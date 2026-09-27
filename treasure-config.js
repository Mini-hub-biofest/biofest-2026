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

      title: "THE FIRST TRAIL",

      question:
        "Which path will you take?",

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
          next: "ground2"
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

    ground2: {
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
    // ORIGINAL STARTING GROUND
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
    },


    // ==================================================
    // QR-05 — LAB QUESTION
    // ==================================================

    lab2: {
      type: "question",

      title: "THE THIRD TRAIL",

      question:
        "The laboratory revealed another path. " +
        "Where will your next discovery take you?",

      answers: [
        {
          text: "Where ideas are presented for everyone to see",
          next: "poster"
        },

        {
          text: "Where people gather when the day gets busy",
          next: "canteen"
        },

        {
          text: "Where footsteps echo through corridors",
          next: "block"
        }
      ]
    },


    // ==================================================
    // QR-06 — CAFETERIA QUESTION
    // ==================================================

    cafeteria2: {
      type: "question",

      title: "THE THIRD TRAIL",

      question:
        "The trail brought you here. " +
        "Now choose where the next clue is hiding.",

      answers: [
        {
          text: "Where knowledge is displayed",
          next: "poster2"
        },

        {
          text: "Where students gather between classes",
          next: "common"
        },

        {
          text: "Where science meets practical work",
          next: "lab2clue"
        }
      ]
    },


    // ==================================================
    // QR-07 — GROUND QUESTION
    // ==================================================

    ground3: {
      type: "question",

      title: "THE THIRD TRAIL",

      question:
        "The game continues. " +
        "Which direction will you choose next?",

      answers: [
        {
          text: "Follow the sound of learning",
          next: "classroom"
        },

        {
          text: "Follow the path of discovery",
          next: "lab3"
        },

        {
          text: "Follow the place where people gather",
          next: "common2"
        }
      ]
    },


    // =========================
    // LAB ROUTE CLUES
    // =========================

    poster: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Ideas become visible here. " +
        "Look for a place where creativity and knowledge " +
        "are displayed for others to discover.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-08"
    },


    canteen: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Between lectures and activities, " +
        "this is where students come together, relax " +
        "and recharge.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-09"
    },


    block: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Walls surround you, footsteps pass by, " +
        "and many journeys begin and end here.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-10"
    },


    // =========================
    // CAFETERIA ROUTE CLUES
    // =========================

    poster2: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Look for the place where information " +
        "stands proudly for everyone to observe.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-11"
    },


    common: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Conversations, laughter and passing faces " +
        "make this place come alive throughout the day.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-12"
    },


    lab2clue: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Step into the world where theory becomes practice " +
        "and experiments turn questions into answers.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-13"
    },


    // =========================
    // GROUND ROUTE CLUES
    // =========================

    classroom: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Chalk, screens and curious minds come together here. " +
        "Find the place where lessons take shape.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-14"
    },


    lab3: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Discover the place where careful hands, " +
        "scientific tools and experiments meet.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-15"
    },


    common2: {
      type: "clue",

      title: "CLUE UNLOCKED",

      clue:
        "Not a classroom, not a laboratory, " +
        "but a place where many paths and many people meet.",

      location:
        "Find the next BIOFEST QR code at the place described by this clue.",

      qrId: "QR-16"
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
