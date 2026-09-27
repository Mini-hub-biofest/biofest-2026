let currentId = null;
let historyStack = [];
let teamName = "";

const $ = (id) => document.getElementById(id);

function init() {
  $("huntTitle").textContent = HUNT_CONFIG.title;
  $("huntSubtitle").textContent = HUNT_CONFIG.subtitle;

  if (HUNT_CONFIG.settings.rememberTeam) {
    const saved = localStorage.getItem("biofest_hunt_team");
    if (saved) $("teamName").value = saved;
  }

  // Optional direct-link support:
  // Add ?clue=clue2a to a QR code if you want a QR to open a specific clue.
  const params = new URLSearchParams(location.search);
  const directClue = params.get("clue");
  if (directClue && HUNT_CONFIG.clues[directClue]) {
    teamName = "Team";
    showTeam();
    showClue(directClue, false);
  }
}

function startHunt() {
  const value = $("teamName").value.trim();
  teamName = value || "Team";
  if (HUNT_CONFIG.settings.rememberTeam) localStorage.setItem("biofest_hunt_team", teamName);
  historyStack = [];
  showTeam();
  showClue(HUNT_CONFIG.startClue, false);
}

function showTeam() {
  $("teamBadge").textContent = teamName;
  $("teamBadge").classList.remove("hidden");
}

function showClue(id, push = true) {
  const clue = HUNT_CONFIG.clues[id];
  if (!clue) return showError("Clue not found: " + id);

  if (push && currentId) historyStack.push(currentId);
  currentId = id;

  $("startScreen").classList.add("hidden");
  $("finishScreen").classList.add("hidden");
  $("clueScreen").classList.remove("hidden");

  $("clueNumber").textContent = String(clue.number ?? "").padStart(2, "0");
  $("clueTitle").textContent = clue.title || "";
  $("question").textContent = clue.question || "";
  $("progressText").textContent = "CLUE " + (clue.number ?? "");
  $("routeText").textContent = "Choose carefully";

  if (clue.hint) {
    $("hintBox").textContent = "💡 " + clue.hint;
    $("hintBox").classList.remove("hidden");
  } else $("hintBox").classList.add("hidden");

  if (clue.location) {
    $("locationBox").textContent = "📍 " + clue.location;
    $("locationBox").classList.remove("hidden");
  } else $("locationBox").classList.add("hidden");

  const answers = $("answers");
  answers.innerHTML = "";

  (clue.answers || []).forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.innerHTML = `<span class="letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(answer.text)}</span>`;
    button.addEventListener("click", () => chooseAnswer(answer));
    answers.appendChild(button);
  });

  const total = Math.max(Object.keys(HUNT_CONFIG.clues).length, 1);
  $("progressBar").style.width = Math.min(100, ((clue.number || 1) / total) * 100) + "%";
  $("backBtn").classList.toggle("hidden", !HUNT_CONFIG.settings.allowBack || historyStack.length === 0);

  window.scrollTo({top: 0, behavior: "smooth"});
}

function chooseAnswer(answer) {
  if (!answer || !answer.next) return;
  if (answer.next === "FINISH") return showFinish();
  showClue(answer.next, true);
}

function goBack() {
  const previous = historyStack.pop();
  if (previous) showClue(previous, false);
}

function showFinish() {
  $("clueScreen").classList.add("hidden");
  $("finishScreen").classList.remove("hidden");
  $("finishTitle").textContent = HUNT_CONFIG.finish.title;
  $("finishMessage").textContent = HUNT_CONFIG.finish.message;
  $("finishInstruction").textContent = HUNT_CONFIG.finish.instruction;
  window.scrollTo({top: 0, behavior: "smooth"});
}

function restart() {
  historyStack = [];
  currentId = null;
  $("finishScreen").classList.add("hidden");
  $("clueScreen").classList.add("hidden");
  $("startScreen").classList.remove("hidden");
  window.scrollTo({top: 0, behavior: "smooth"});
}

function goHome() {
  restart();
  return false;
}

function showError(message) {
  $("clueScreen").classList.remove("hidden");
  $("startScreen").classList.add("hidden");
  $("finishScreen").classList.add("hidden");
  $("clueTitle").textContent = "Configuration error";
  $("question").textContent = message;
  $("answers").innerHTML = "";
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value ?? "";
  return div.innerHTML;
}

init();
