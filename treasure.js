let currentId = null;
let historyStack = [];
let teamName = "";
let unlockedClues = new Set();

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
    teamName =
      localStorage.getItem("biofest_hunt_team") || "Team";

    showTeam();

    // 🔐 QR CLUE LOCK
    showClueLock(directClue);

    return;
  }
}

function startHunt() {
  const value = $("teamName").value.trim();

  teamName = value || "Team";

  if (settings.rememberTeam) {
    localStorage.setItem(
      "biofest_hunt_team",
      teamName
    );
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


/* =====================================================
   🔐 QR QUESTION LOCK
   ===================================================== */

function showClueLock(id) {

  const clue = HUNT_CONFIG.clues[id];

  if (!clue) {
    return showError("Clue not found: " + id);
  }

  currentId = id;

  $("startScreen").classList.add("hidden");
  $("finishScreen").classList.add("hidden");
  $("clueScreen").classList.remove("hidden");

  $("clueNumber").textContent =
    clue.number
      ? String(clue.number).padStart(2, "0")
      : "";

  $("clueTitle").textContent =
    clue.title || "🔐 Locked Clue";

  $("progressText").textContent =
    "LOCKED";

  $("routeText").textContent =
    "Answer correctly to unlock this clue";

  $("question").textContent =
    clue.lockQuestion ||
    "Answer the question to unlock this clue.";

  $("hintBox").classList.add("hidden");
  $("locationBox").classList.add("hidden");

  const answers = $("answers");

  answers.innerHTML = "";

  /*
    If no lock question has been added,
    automatically unlock the clue.
  */

  if (!clue.lockQuestion) {
    unlockClue(id);
    return;
  }

  const lockAnswers = clue.lockAnswers || [];

  lockAnswers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.className = "answer-btn";

    button.innerHTML = `
      <span class="letter">
        ${String.fromCharCode(65 + index)}
      </span>

      <span>${escapeHtml(answer.text)}</span>
    `;

    button.addEventListener("click", () => {

      if (answer.correct === true) {
        unlockClue(id);
      } else {

        button.classList.add("wrong-answer");

        button.disabled = true;

        setTimeout(() => {
          button.classList.remove("wrong-answer");
        }, 800);
      }

    });

    answers.appendChild(button);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =====================================================
   🔓 UNLOCK CLUE
   ===================================================== */

function unlockClue(id) {

  unlockedClues.add(id);

  const clue = HUNT_CONFIG.clues[id];

  if (!clue) return;

  showClue(id, false);
}


/* =====================================================
   NORMAL CLUE DISPLAY
   ===================================================== */

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
    clue.number
      ? String(clue.number).padStart(2, "0")
      : "";

  $("clueTitle").textContent =
    clue.title || "";

  $("progressText").textContent =
    clue.type === "clue"
      ? "NEXT CLUE"
      : "QUESTION";

  $("routeText").textContent =
    clue.type === "clue"
      ? "Follow the clue to continue"
      : "Choose carefully";

  // Question / clue text
  $("question").textContent =
    clue.type === "question"
      ? clue.question || ""
      : clue.clue || "";

  // Hint
  if (clue.hint) {

    $("hintBox").textContent =
      "💡 " + clue.hint;

    $("hintBox").classList.remove("hidden");

  } else {

    $("hintBox").classList.add("hidden");
  }

  // Location
  if (clue.location) {

    $("locationBox").textContent =
      "📍 " + clue.location;

    $("locationBox").classList.remove("hidden");

  } else {

    $("locationBox").classList.add("hidden");
  }

  // Answers
  const answers = $("answers");

  answers.innerHTML = "";

  if (clue.type === "question") {

    (clue.answers || []).forEach(
      (answer, index) => {

        const button =
          document.createElement("button");

        button.className =
          "answer-btn";

        button.innerHTML = `
          <span class="letter">
            ${String.fromCharCode(65 + index)}
          </span>

          <span>
            ${escapeHtml(answer.text)}
          </span>
        `;

        button.addEventListener(
          "click",
          () => {
            chooseAnswer(answer);
          }
        );

        answers.appendChild(button);
      }
    );

  } else {

    const message =
      document.createElement("div");

    message.className =
      "location-message";

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
  const total =
    Math.max(
      Object.keys(HUNT_CONFIG.clues).length,
      1
    );

  const number =
    clue.number || 1;

  $("progressBar").style.width =
    Math.min(
      100,
      (number / total) * 100
    ) + "%";

  // Back button
  $("backBtn").classList.toggle(
    "hidden",
    !settings.allowBack ||
    historyStack.length === 0
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =====================================================
   NORMAL QUESTION ANSWER
   ===================================================== */

function chooseAnswer(answer) {

  if (!answer || !answer.next) return;

  if (answer.next === "FINISH") {
    return showFinish();
  }

  showClue(answer.next, true);
}


/* =====================================================
   BACK
   ===================================================== */

function goBack() {

  const previous =
    historyStack.pop();

  if (previous) {
    showClue(previous, false);
  }
}


/* =====================================================
   FINISH
   ===================================================== */

function showFinish() {

  $("clueScreen").classList.add("hidden");

  $("finishScreen").classList.remove("hidden");

  if (HUNT_CONFIG.finish) {

    $("finishTitle").textContent =
      HUNT_CONFIG.finish.title ||
      "Treasure Found";

    $("finishMessage").textContent =
      HUNT_CONFIG.finish.message ||
      "";

    $("finishInstruction").textContent =
      HUNT_CONFIG.finish.instruction ||
      "";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =====================================================
   RESTART
   ===================================================== */

function restart() {

  historyStack = [];
  currentId = null;

  unlockedClues.clear();

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


/* =====================================================
   ERROR
   ===================================================== */

function showError(message) {

  $("clueScreen").classList.remove("hidden");

  $("startScreen").classList.add("hidden");

  $("finishScreen").classList.add("hidden");

  $("clueTitle").textContent =
    "Configuration error";

  $("question").textContent =
    message;

  $("answers").innerHTML = "";
}


/* =====================================================
   SECURITY / HTML ESCAPE
   ===================================================== */

function escapeHtml(value) {

  const div =
    document.createElement("div");

  div.textContent =
    value ?? "";

  return div.innerHTML;
}


init();
