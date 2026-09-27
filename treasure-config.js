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
    // LIBRARY — SECOND QUESTION
    // =========================

    library: {
      type: "question",

      title: "THE SECOND TRAIL",

      question:
        "You found the place where knowledge waits. " +
        "Now choose your next path carefully.",

      answers: [
        {
          text: "The place where experiments come alive",
          next: "lab"
        },

        {
          text: "The place where everyone gathers to eat",
          next: "cafeteria"
        },

        {
          text: "The place where people come to play",
          next: "ground"
        }
      ]
    },


    // =========================
    // LAB CLUE
    // =========================

    lab: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Glass, experiments and curious minds surround this place. " +
        "Your next discovery is waiting where science comes to life.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-05"
    },


    // =========================
    // CAFETERIA CLUE
    // =========================

    cafeteria: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "When hunger calls, students gather here. " +
        "Follow the scent of food and find your next clue.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-06"
    },


    // =========================
    // GROUND CLUE
    // =========================

    ground: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Where footsteps become races and cheers become louder, " +
        "your next clue waits.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-07"
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
