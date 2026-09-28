let currentId = null;
let historyStack = [];
let teamName = "";
let unlockedClues = new Set();

const $ = (id) => document.getElementById(id);

const settings = HUNT_CONFIG.settings || {
  rememberTeam: true,
  allowBack: false
};


// ==================================================
// INITIALIZE
// ==================================================

function init() {
  $("huntTitle").textContent = HUNT_CONFIG.title;
  $("huntSubtitle").textContent = HUNT_CONFIG.subtitle;

  if (settings.rememberTeam) {
    const saved =
      localStorage.getItem("biofest_hunt_team");

    if (saved && $("teamName")) {
      $("teamName").value = saved;
    }
  }

  // ================================================
  // QR / DIRECT CLUE SUPPORT
  // ================================================

  const params =
    new URLSearchParams(location.search);

  const directClue =
    params.get("clue");

  if (
    directClue &&
    HUNT_CONFIG.clues[directClue]
  ) {
    teamName =
      localStorage.getItem(
        "biofest_hunt_team"
      ) || "Team";

    showTeam();

    // 🔐 QR CLUE LOCK
    showClueLock(directClue);

    return;
  }
}


// ==================================================
// START HUNT
// ==================================================

function startHunt() {
  const value =
    $("teamName").value.trim();

  teamName =
    value || "Team";

  if (settings.rememberTeam) {
    localStorage.setItem(
      "biofest_hunt_team",
      teamName
    );
  }

  historyStack = [];

  showTeam();

  // IMPORTANT:
  // Start Hunt opens the normal first question
  // WITHOUT the QR lock.
  showClue(
    HUNT_CONFIG.start,
    false
  );
}


// ==================================================
// SHOW TEAM
// ==================================================

function showTeam() {
  if (!$("teamBadge")) return;

  $("teamBadge").textContent =
    teamName;

  $("teamBadge").classList.remove(
    "hidden"
  );
}


// ==================================================
// QR QUESTION LOCK
// ==================================================

function showClueLock(id) {

  const clue =
    HUNT_CONFIG.clues[id];

  if (!clue) {
    return showError(
      "Clue not found: " + id
    );
  }

  currentId = id;

  $("startScreen").classList.add(
    "hidden"
  );

  $("finishScreen").classList.add(
    "hidden"
  );

  $("clueScreen").classList.remove(
    "hidden"
  );


  // ================================================
  // CLUE NUMBER
  // ================================================

  $("clueNumber").textContent =
    clue.number
      ? String(clue.number).padStart(2, "0")
      : "";


  // ================================================
  // TITLE
  // ================================================

  $("clueTitle").textContent =
    clue.title ||
    "🔐 Locked Clue";


  // ================================================
  // STATUS
  // ================================================

  $("progressText").textContent =
    "LOCKED";


  $("routeText").textContent =
    "Answer correctly to unlock this clue";


  // ================================================
  // LOCK QUESTION
  // ================================================

  $("question").textContent =
    clue.lockQuestion ||
    "Answer the question to unlock this clue.";


  // ================================================
  // HIDE NORMAL CLUE ELEMENTS
  // ================================================

  $("hintBox").classList.add(
    "hidden"
  );

  $("locationBox").classList.add(
    "hidden"
  );


  // ================================================
  // ANSWER AREA
  // ================================================

  const answers =
    $("answers");

  answers.innerHTML = "";


  // ================================================
  // IF NO LOCK QUESTION EXISTS
  // ================================================

  if (!clue.lockQuestion) {
    unlockClue(id);
    return;
  }


  // ================================================
  // WRITTEN ANSWER INPUT
  // ================================================

  const input =
    document.createElement("input");

  input.type = "text";

  input.id =
    "lockAnswerInput";

  input.placeholder =
    "Write your answer here...";

  input.autocomplete =
    "off";


  // Input styling
  input.style.width =
    "100%";

  input.style.padding =
    "15px";

  input.style.marginTop =
    "15px";

  input.style.marginBottom =
    "12px";

  input.style.borderRadius =
    "10px";

  input.style.border =
    "1px solid rgba(255,255,255,0.25)";

  input.style.background =
    "rgba(0,0,0,0.35)";

  input.style.color =
    "white";

  input.style.fontSize =
    "16px";

  input.style.boxSizing =
    "border-box";

  input.style.outline =
    "none";


  answers.appendChild(
    input
  );


  // ================================================
  // UNLOCK BUTTON
  // ================================================

  const button =
    document.createElement("button");

  button.className =
    "answer-btn";

  button.innerHTML = `
    <span class="letter">🔓</span>
    <span>UNLOCK CLUE</span>
  `;


  // ================================================
  // CHECK ANSWER
  // ================================================

  button.addEventListener(
    "click",
    () => {

      const userAnswer =
        input.value
          .trim()
          .toLowerCase();


      // Empty answer
      if (!userAnswer) {

        input.focus();

        return;
      }


      // ============================================
      // FIND CORRECT ANSWER
      // ============================================

      const lockAnswers =
        clue.lockAnswers || [];

      const correctAnswer =
        lockAnswers.find(
          answer =>
            answer.correct === true
        );


      // No correct answer configured
      if (!correctAnswer) {

        return showError(
          "No correct answer has been configured for this clue."
        );
      }


      const correctText =
        correctAnswer.text
          .trim()
          .toLowerCase();


      // ============================================
      // CORRECT ANSWER
      // ============================================

      if (
        userAnswer ===
        correctText
      ) {

        input.disabled =
          true;

        button.disabled =
          true;

        // 🔓 OPEN NORMAL CLUE
        unlockClue(id);

      }


      // ============================================
      // WRONG ANSWER
      // ============================================

      else {

        input.value =
          "";

        input.placeholder =
          "❌ Wrong answer — try again";

        input.focus();

        input.style.border =
          "1px solid red";


        setTimeout(
          () => {

            input.style.border =
              "1px solid rgba(255,255,255,0.25)";

            input.placeholder =
              "Write your answer here...";

          },
          1000
        );
      }
    }
  );


  answers.appendChild(
    button
  );


  // ================================================
  // ENTER KEY ALSO SUBMITS ANSWER
  // ================================================

  input.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Enter"
      ) {
        button.click();
      }
    }
  );


  // ================================================
  // SCROLL TO TOP
  // ================================================

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ==================================================
// UNLOCK CLUE
// ==================================================

function unlockClue(id) {

  unlockedClues.add(id);

  const clue =
    HUNT_CONFIG.clues[id];

  if (!clue) return;

  // Open the ORIGINAL question/clue
  showClue(
    id,
    false
  );
}


// ==================================================
// NORMAL CLUE DISPLAY
// ==================================================

function showClue(
  id,
  push = true
) {

  const clue =
    HUNT_CONFIG.clues[id];


  if (!clue) {

    return showError(
      "Clue not found: " + id
    );
  }


  // ================================================
  // HISTORY
  // ================================================

  if (
    push &&
    currentId
  ) {
    historyStack.push(
      currentId
    );
  }


  currentId =
    id;


  // ================================================
  // SCREEN VISIBILITY
  // ================================================

  $("startScreen").classList.add(
    "hidden"
  );

  $("finishScreen").classList.add(
    "hidden"
  );

  $("clueScreen").classList.remove(
    "hidden"
  );


  // ================================================
  // CLUE NUMBER
  // ================================================

  $("clueNumber").textContent =
    clue.number
      ? String(clue.number).padStart(2, "0")
      : "";


  // ================================================
  // TITLE
  // ================================================

  $("clueTitle").textContent =
    clue.title || "";


  // ================================================
  // STATUS
  // ================================================

  $("progressText").textContent =
    clue.type === "clue"
      ? "NEXT CLUE"
      : "QUESTION";


  $("routeText").textContent =
    clue.type === "clue"
      ? "Follow the clue to continue"
      : "Choose carefully";


  // ================================================
  // QUESTION / CLUE TEXT
  // ================================================

  $("question").textContent =
    clue.type === "question"
      ? clue.question || ""
      : clue.clue || "";


  // ================================================
  // HINT
  // ================================================

  if (clue.hint) {

    $("hintBox").textContent =
      "💡 " + clue.hint;

    $("hintBox").classList.remove(
      "hidden"
    );

  } else {

    $("hintBox").classList.add(
      "hidden"
    );
  }


  // ================================================
  // LOCATION
  // ================================================

  if (clue.location) {

    $("locationBox").textContent =
      "📍 " + clue.location;

    $("locationBox").classList.remove(
      "hidden"
    );

  } else {

    $("locationBox").classList.add(
      "hidden"
    );
  }


  // ================================================
  // ANSWERS
  // ================================================

  const answers =
    $("answers");

  answers.innerHTML =
    "";


  // ================================================
  // NORMAL QUESTION
  // ================================================

  if (
    clue.type === "question"
  ) {

    (
      clue.answers || []
    ).forEach(
      (
        answer,
        index
      ) => {

        const button =
          document.createElement(
            "button"
          );

        button.className =
          "answer-btn";


        button.innerHTML = `
          <span class="letter">
            ${String.fromCharCode(
              65 + index
            )}
          </span>

          <span>
            ${escapeHtml(
              answer.text
            )}
          </span>
        `;


        button.addEventListener(
          "click",
          () => {

            chooseAnswer(
              answer
            );

          }
        );


        answers.appendChild(
          button
        );
      }
    );


  // ================================================
  // CLUE / LOCATION
  // ================================================

  } else {

    const message =
      document.createElement(
        "div"
      );

    message.className =
      "location-message";


    message.innerHTML = `
      <strong>🚶 Your next move</strong>

      <p>
        Go to the location described above and
        look for the next BIOFEST Treasure Hunt QR code.
      </p>
    `;


    answers.appendChild(
      message
    );
  }


  // ================================================
  // PROGRESS BAR
  // ================================================

  const total =
    Math.max(
      Object.keys(
        HUNT_CONFIG.clues
      ).length,
      1
    );


  const number =
    clue.number || 1;


  $("progressBar").style.width =
    Math.min(
      100,
      (number / total) * 100
    ) + "%";


  // ================================================
  // BACK BUTTON
  // ================================================

  $("backBtn").classList.toggle(
    "hidden",
    !settings.allowBack ||
    historyStack.length === 0
  );


  // ================================================
  // SCROLL TOP
  // ================================================

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ==================================================
// CHOOSE NORMAL ANSWER
// ==================================================

function chooseAnswer(
  answer
) {

  if (
    !answer ||
    !answer.next
  ) {
    return;
  }


  // ================================================
  // FINISH
  // ================================================

  if (
    answer.next ===
    "FINISH"
  ) {

    return showFinish();
  }


  // ================================================
  // NEXT CLUE
  // ================================================

  showClue(
    answer.next,
    true
  );
}


// ==================================================
// GO BACK
// ==================================================

function goBack() {

  const previous =
    historyStack.pop();


  if (previous) {

    showClue(
      previous,
      false
    );
  }
}


// ==================================================
// FINISH SCREEN
// ==================================================

function showFinish() {

  $("clueScreen").classList.add(
    "hidden"
  );

  $("finishScreen").classList.remove(
    "hidden"
  );


  if (
    HUNT_CONFIG.finish
  ) {

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


// ==================================================
// RESTART
// ==================================================

function restart() {

  historyStack = [];

  currentId = null;

  unlockedClues.clear();


  $("finishScreen").classList.add(
    "hidden"
  );

  $("clueScreen").classList.add(
    "hidden"
  );

  $("startScreen").classList.remove(
    "hidden"
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ==================================================
// GO HOME
// ==================================================

function goHome() {

  restart();

  return false;
}


// ==================================================
// ERROR
// ==================================================

function showError(
  message
) {

  $("clueScreen").classList.remove(
    "hidden"
  );

  $("startScreen").classList.add(
    "hidden"
  );

  $("finishScreen").classList.add(
    "hidden"
  );


  $("clueTitle").textContent =
    "Configuration error";


  $("question").textContent =
    message;


  $("answers").innerHTML =
    "";
}


// ==================================================
// ESCAPE HTML
// ==================================================

function escapeHtml(
  value
) {

  const div =
    document.createElement(
      "div"
    );

  div.textContent =
    value ?? "";

  return div.innerHTML;
}


// ==================================================
// START
// ==================================================

init();
