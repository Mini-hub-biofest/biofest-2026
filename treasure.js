let currentId = null;
let historyStack = [];
let teamName = "";

const $ = (id) => document.getElementById(id);

const settings = HUNT_CONFIG.settings || {
  rememberTeam: true,
  allowBack: false
};

function init() {
  $("huntTitle").textContent = HUNT_CONFIG.title;
  $("huntSubtitle").textContent = HUNT_CONFIG.subtitle;

  if (settings.rememberTeam) {
    const saved = localStorage.getItem("biofest_hunt_team");
    if (saved && $("teamName")) {
      $("teamName").value = saved;
    }
  }

  // QR / direct clue support
  const params = new URLSearchParams(location.search);
  const directClue = params.get("clue");

  if (directClue && HUNT_CONFIG.clues[directClue]) {
    teamName = localStorage.getItem("biofest_hunt_team") || "Team";
    showTeam();
    showClue(directClue, false);
  }
}

function startHunt() {
  const value = $("teamName").value.trim();

  teamName = value || "Team";

  if (settings.rememberTeam) {
    localStorage.setItem("biofest_hunt_team", teamName);
  }

  historyStack = [];

  showTeam();
  showClue(HUNT_CONFIG.start, false);
}

function showTeam() {
  if (!$("teamBadge")) return;

  $("teamBadge").textContent = teamName;
  $("teamBadge").classList.remove("hidden");
}

function showClue(id, push = true) {
  const clue = HUNT_CONFIG.clues[id];

  if (!clue) {
    return showError("Clue not found: " + id);
  }

  if (push && currentId) {
    historyStack.push(currentId);
  }

  currentId = id;

  $("startScreen").classList.add("hidden");
  $("finishScreen").classList.add("hidden");
  $("clueScreen").classList.remove("hidden");

  // Basic information
  $("clueNumber").textContent =
    clue.number ? String(clue.number).padStart(2, "0") : "";

  $("clueTitle").textContent =
    clue.title || "";

  $("progressText").textContent =
    clue.type === "clue" ? "NEXT CLUE" : "QUESTION";

  $("routeText").textContent =
    clue.type === "clue"
      ? "Follow the clue to continue"
      : "Choose carefully";

  // Question
  $("question").textContent =
    clue.type === "question"
      ? clue.question || ""
      : clue.clue || "";

  // Hint
  if (clue.hint) {
    $("hintBox").textContent = "💡 " + clue.hint;
    $("hintBox").classList.remove("hidden");
  } else {
    $("hintBox").classList.add("hidden");
  }

  // Location
  if (clue.location) {
    $("locationBox").textContent = "📍 " + clue.location;
    $("locationBox").classList.remove("hidden");
  } else {
    $("locationBox").classList.add("hidden");
  }

  // Answers
  const answers = $("answers");
  answers.innerHTML = "";

  if (clue.type === "question") {

    (clue.answers || []).forEach((answer, index) => {
      const button = document.createElement("button");

      button.className = "answer-btn";

      button.innerHTML = `
        <span class="letter">
          ${String.fromCharCode(65 + index)}
        </span>
        <span>${escapeHtml(answer.text)}</span>
      `;

      button.addEventListener("click", () => {
        chooseAnswer(answer);
      });

      answers.appendChild(button);
    });

  } else {

    // This is a physical-location clue.
    // There are no answer buttons here.
    const message = document.createElement("div");

    message.className = "location-message";

    message.innerHTML = `
      <strong>🚶 Your next move</strong>
      <p>
        Go to the location described above and
        look for the next BIOFEST Treasure Hunt QR code.
      </p>
    `;

    answers.appendChild(message);
  }

  // Progress bar
  const total = Math.max(
    Object.keys(HUNT_CONFIG.clues).length,
    1
  );

  const number = clue.number || 1;

  $("progressBar").style.width =
    Math.min(100, (number / total) * 100) + "%";

  // Back button
  $("backBtn").classList.toggle(
    "hidden",
    !settings.allowBack || historyStack.length === 0
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function chooseAnswer(answer) {
  if (!answer || !answer.next) return;

  // If the answer leads to the final screen
  if (answer.next === "FINISH") {
    return showFinish();
  }

  // Otherwise open the next clue/location screen
  showClue(answer.next, true);
}

function goBack() {
  const previous = historyStack.pop();

  if (previous) {
    showClue(previous, false);
  }
}

function showFinish() {
  $("clueScreen").classList.add("hidden");
  $("finishScreen").classList.remove("hidden");

  if (HUNT_CONFIG.finish) {
    $("finishTitle").textContent =
      HUNT_CONFIG.finish.title || "Treasure Found";

    $("finishMessage").textContent =
      HUNT_CONFIG.finish.message || "";

    $("finishInstruction").textContent =
      HUNT_CONFIG.finish.instruction || "";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function restart() {
  historyStack = [];
  currentId = null;

  $("finishScreen").classList.add("hidden");
  $("clueScreen").classList.add("hidden");
  $("startScreen").classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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
