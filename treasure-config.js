const HUNT_CONFIG = {
  title: "BIOFEST 2026",
  subtitle: "TREASURE HUNT",

  start: "start",

  settings: {
    rememberTeam: true,
    allowBack: false
  },

  clues: {

    // =========================
    // STARTING QUESTION
    // =========================

    start: {
      type: "question",

      question: "Which path will you take?",

      answers: [
        {
          text: "Follow the books",
          next: "library"
        },

        {
          text: "Follow the games",
          next: "ground"
        },

        {
          text: "Follow the crowd",
          next: "auditorium"
        }
      ]
    },


    // =========================
    // LIBRARY CLUE
    // =========================

    library: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Thousands of stories rest silently behind my walls. " +
        "I have no voice, yet I speak through every page. " +
        "Find the place where knowledge waits to be opened.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-02"
    },


    // =========================
    // GROUND CLUE
    // =========================

    ground: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Where competition, speed and cheers come together, " +
        "your next path awaits.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-03"
    },


    // =========================
    // AUDITORIUM CLUE
    // =========================

    auditorium: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Look for the place where voices, performances " +
        "and celebrations fill the air.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-04"
    }

  },

  // =========================
  // FINAL SCREEN
  // =========================

  finish: {
    title: "TREASURE FOUND",

    message:
      "Congratulations! You have completed the BIOFEST Treasure Hunt.",

    instruction:
      "Report to the BIOFEST Treasure Hunt desk."
  }
};
