const HUNT_CONFIG = {
  title: "BIOFEST 2026",
  subtitle: "TREASURE HUNT",

  start: "qr1",

  settings: {
    rememberTeam: true,
    allowBack: false
  },

  clues: {

    // ==================================================
    // QR-01 — QUESTION 1
    // ==================================================

    qr1: {
      type: "question",

      title: "THE FIRST TRAIL",

      // 🔐 QR-01 LOCK QUESTION
      lockQuestion: "What is the powerhouse of the cell?",

      lockAnswers: [
        {
          text: "Nucleus",
          correct: false
        },
        {
          text: "Mitochondria",
          correct: true
        },
        {
          text: "Ribosome",
          correct: false
        },
        {
          text: "Cell membrane",
          correct: false
        }
      ],

      question:
        "The hunt begins here. Choose your path carefully.",

      answers: [
        {
          text: "Follow the path of knowledge",
          next: "qr1_clue_a"
        },

        {
          text: "Follow the path of competition",
          next: "qr1_clue_b"
        },

        {
          text: "Follow the path of celebration",
          next: "qr1_clue_c"
        },

        {
          text: "Follow the path of discovery",
          next: "qr1_clue_d"
        }
      ]
    },


    // ==================================================
    // QR-01 — FOUR POSSIBLE LOCATIONS
    // ==================================================

    qr1_clue_a: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Thousands of voices sleep without speaking. " +
        "Stories stand silently beside one another, " +
        "waiting for someone to open them.",

      location:
        "Figure out the location and find QR-02 there.",

      qrId: "QR-02"
    },


    qr1_clue_b: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Footsteps become faster here, " +
        "competition brings people together, " +
        "and cheers rise when someone crosses the line.",

      location:
        "Figure out the location and find QR-02 there.",

      qrId: "QR-02"
    },


    qr1_clue_c: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "When many voices become one, " +
        "performances come alive and celebrations fill the air.",

      location:
        "Figure out the location and find QR-02 there.",

      qrId: "QR-02"
    },


    qr1_clue_d: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Curious minds gather here. " +
        "Questions become experiments, " +
        "and ideas become discoveries.",

      location:
        "Figure out the location and find QR-02 there.",

      qrId: "QR-02"
    },


    // ==================================================
    // QR-02 — QUESTION 2
    // ==================================================

    qr2: {
      type: "question",

      title: "THE SECOND TRAIL",

      // 🔐 QR-02 LOCK QUESTION
      lockQuestion: "Which organ pumps blood throughout the human body?",

      lockAnswers: [
        {
          text: "Lungs",
          correct: false
        },
        {
          text: "Brain",
          correct: false
        },
        {
          text: "Heart",
          correct: true
        },
        {
          text: "Kidney",
          correct: false
        }
      ],

      question:
        "You found the second checkpoint. " +
        "The trail continues. Choose carefully.",

      answers: [
        {
          text: "Follow where students recharge",
          next: "qr2_clue_a"
        },

        {
          text: "Follow where ideas are displayed",
          next: "qr2_clue_b"
        },

        {
          text: "Follow where lessons come alive",
          next: "qr2_clue_c"
        },

        {
          text: "Follow where people gather",
          next: "qr2_clue_d"
        }
      ]
    },


    // ==================================================
    // QR-02 — FOUR POSSIBLE LOCATIONS
    // ==================================================

    qr2_clue_a: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "After hours of learning and activity, " +
        "this is where hunger calls and students come together.",

      location:
        "Figure out the location and find QR-03 there.",

      qrId: "QR-03"
    },


    qr2_clue_b: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Ideas leave the mind and become visible here. " +
        "Look for a place where information catches the eye.",

      location:
        "Figure out the location and find QR-03 there.",

      qrId: "QR-03"
    },


    qr2_clue_c: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Chalk, screens, questions and answers. " +
        "This is where knowledge is shared face to face.",

      location:
        "Figure out the location and find QR-03 there.",

      qrId: "QR-03"
    },


    qr2_clue_d: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "People pass through here all day. " +
        "Some stop to talk, some wait, " +
        "and others simply continue their journey.",

      location:
        "Figure out the location and find QR-03 there.",

      qrId: "QR-03"
    },


    // ==================================================
    // QR-03 — QUESTION 3
    // ==================================================

    qr3: {
      type: "question",

      title: "THE THIRD TRAIL",

      // 🔐 QR-03 LOCK QUESTION
      lockQuestion: "What is the largest planet in our solar system?",

      lockAnswers: [
        {
          text: "Earth",
          correct: false
        },
        {
          text: "Mars",
          correct: false
        },
        {
          text: "Jupiter",
          correct: true
        },
        {
          text: "Saturn",
          correct: false
        }
      ],

      question:
        "Three checkpoints remain between you and the treasure. " +
        "Which path will you choose now?",

      answers: [
        {
          text: "Follow the sound of footsteps",
          next: "qr3_clue_a"
        },

        {
          text: "Follow the sound of voices",
          next: "qr3_clue_b"
        },

        {
          text: "Follow the scent of knowledge",
          next: "qr3_clue_c"
        },

        {
          text: "Follow the path of science",
          next: "qr3_clue_d"
        }
      ]
    },


    // ==================================================
    // QR-03 — FOUR POSSIBLE LOCATIONS
    // ==================================================

    qr3_clue_a: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Look for the place where every step matters, " +
        "where movement is constant and journeys begin.",

      location:
        "Figure out the location and find QR-04 there.",

      qrId: "QR-04"
    },


    qr3_clue_b: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Many conversations begin here, " +
        "but none of them are written on a page.",

      location:
        "Figure out the location and find QR-04 there.",

      qrId: "QR-04"
    },


    qr3_clue_c: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Look for a place surrounded by knowledge, " +
        "where answers are found before questions are forgotten.",

      location:
        "Figure out the location and find QR-04 there.",

      qrId: "QR-04"
    },


    qr3_clue_d: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Where experiments transform curiosity into evidence, " +
        "your next step is waiting.",

      location:
        "Figure out the location and find QR-04 there.",

      qrId: "QR-04"
    },


    // ==================================================
    // QR-04 — QUESTION 4
    // ==================================================

    qr4: {
      type: "question",

      title: "THE FOURTH TRAIL",

      // 🔐 QR-04 LOCK QUESTION
      lockQuestion: "How many chambers does the human heart have?",

      lockAnswers: [
        {
          text: "2",
          correct: false
        },
        {
          text: "3",
          correct: false
        },
        {
          text: "4",
          correct: true
        },
        {
          text: "5",
          correct: false
        }
      ],

      question:
        "The trail is getting shorter. " +
        "Choose your next destination wisely.",

      answers: [
        {
          text: "Where celebrations begin",
          next: "qr4_clue_a"
        },

        {
          text: "Where competition begins",
          next: "qr4_clue_b"
        },

        {
          text: "Where knowledge waits",
          next: "qr4_clue_c"
        },

        {
          text: "Where people pause",
          next: "qr4_clue_d"
        }
      ]
    },


    // ==================================================
    // QR-04 — FOUR POSSIBLE LOCATIONS
    // ==================================================

    qr4_clue_a: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Lights, voices and anticipation meet here. " +
        "When something important is about to happen, " +
        "people gather close.",

      location:
        "Figure out the location and find QR-05 there.",

      qrId: "QR-05"
    },


    qr4_clue_b: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Before the whistle blows, " +
        "before the race begins, " +
        "this is where competitors prepare.",

      location:
        "Figure out the location and find QR-05 there.",

      qrId: "QR-05"
    },


    qr4_clue_c: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Pages may be silent, but knowledge is never quiet. " +
        "Find the place where countless answers wait.",

      location:
        "Figure out the location and find QR-05 there.",

      qrId: "QR-05"
    },


    qr4_clue_d: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Between one journey and another, " +
        "people stop, wait and watch the world pass by.",

      location:
        "Figure out the location and find QR-05 there.",

      qrId: "QR-05"
    },


    // ==================================================
    // QR-05 — QUESTION 5
    // ==================================================

    qr5: {
      type: "question",

      title: "THE FIFTH TRAIL",

      // 🔐 QR-05 LOCK QUESTION
      lockQuestion: "Which gas do humans need to breathe to survive?",

      lockAnswers: [
        {
          text: "Carbon dioxide",
          correct: false
        },
        {
          text: "Oxygen",
          correct: true
        },
        {
          text: "Nitrogen",
          correct: false
        },
        {
          text: "Hydrogen",
          correct: false
        }
      ],

      question:
        "Only two checkpoints remain after this one. " +
        "Which clue will you follow?",

      answers: [
        {
          text: "Follow the path of learning",
          next: "qr5_clue_a"
        },

        {
          text: "Follow the path of food",
          next: "qr5_clue_b"
        },

        {
          text: "Follow the path of movement",
          next: "qr5_clue_c"
        },

        {
          text: "Follow the path of gathering",
          next: "qr5_clue_d"
        }
      ]
    },


    // ==================================================
    // QR-05 — FOUR POSSIBLE LOCATIONS
    // ==================================================

    qr5_clue_a: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Look for the place where minds are challenged, " +
        "questions are asked and lessons continue.",

      location:
        "Figure out the location and find QR-06 there.",

      qrId: "QR-06"
    },


    qr5_clue_b: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "The aroma will tell you more than words can. " +
        "Find the place where tired explorers refuel.",

      location:
        "Figure out the location and find QR-06 there.",

      qrId: "QR-06"
    },


    qr5_clue_c: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Speed, balance and movement define this place. " +
        "Find where the body gets to compete.",

      location:
        "Figure out the location and find QR-06 there.",

      qrId: "QR-06"
    },


    qr5_clue_d: {
      type: "clue",

      title: "YOUR CLUE",

      clue:
        "Look for the place where paths cross " +
        "and people naturally gather together.",

      location:
        "Figure out the location and find QR-06 there.",

      qrId: "QR-06"
    },


    // ==================================================
    // QR-06 — QUESTION 6
    // ==================================================

    qr6: {
      type: "question",

      title: "THE FINAL TRAIL",

      // 🔐 QR-06 LOCK QUESTION
      lockQuestion: "What is the basic unit of life?",

      lockAnswers: [
        {
          text: "Tissue",
          correct: false
        },
        {
          text: "Organ",
          correct: false
        },
        {
          text: "Cell",
          correct: true
        },
        {
          text: "Atom",
          correct: false
        }
      ],

      question:
        "One final checkpoint stands between you and the treasure. " +
        "Choose your final path.",

      answers: [
        {
          text: "Follow the final lesson",
          next: "qr6_clue_a"
        },

        {
          text: "Follow the final challenge",
          next: "qr6_clue_b"
        },

        {
          text: "Follow the final gathering",
          next: "qr6_clue_c"
        },

        {
          text: "Follow the final discovery",
          next: "qr6_clue_d"
        }
      ]
    },


    // ==================================================
    // QR-06 — FOUR POSSIBLE LOCATIONS
    // ==================================================

    qr6_clue_a: {
      type: "clue",

      title: "THE FINAL CLUE",

      clue:
        "Your journey has brought you to the place " +
        "where knowledge is shared one final time.",

      location:
        "Figure out the location and find QR-07 there.",

      qrId: "QR-07"
    },


    qr6_clue_b: {
      type: "clue",

      title: "THE FINAL CLUE",

      clue:
        "The final challenge waits where competition " +
        "and determination meet.",

      location:
        "Figure out the location and find QR-07 there.",

      qrId: "QR-07"
    },


    qr6_clue_c: {
      type: "clue",

      title: "THE FINAL CLUE",

      clue:
        "Where people come together, " +
        "your final discovery is waiting nearby.",

      location:
        "Figure out the location and find QR-07 there.",

      qrId: "QR-07"
    },


    qr6_clue_d: {
      type: "clue",

      title: "THE FINAL CLUE",

      clue:
        "Curiosity brought you this far. " +
        "Now look where discovery itself becomes possible.",

      location:
        "Figure out the location and find QR-07 there.",

      qrId: "QR-07"
    },


    // ==================================================
    // QR-07 — FINAL
    // ==================================================

    qr7: {
      type: "question",

      title: "THE TREASURE AWAITS",

      // 🔐 QR-07 LOCK QUESTION
      lockQuestion: "What is the chemical symbol for water?",

      lockAnswers: [
        {
          text: "CO2",
          correct: false
        },
        {
          text: "O2",
          correct: false
        },
        {
          text: "H2O",
          correct: true
        },
        {
          text: "NaCl",
          correct: false
        }
      ],

      question:
        "You have reached the final checkpoint. " +
        "What is hidden at the end of the trail?",

      answers: [
        {
          text: "The BIOFEST Treasure",
          next: "FINISH"
        },

        {
          text: "The final discovery",
          next: "FINISH"
        },

        {
          text: "The reward for the journey",
          next: "FINISH"
        }
      ]
    }

  },


  // ==================================================
  // FINAL SCREEN
  // ==================================================

  finish: {
    title: "TREASURE FOUND",

    message:
      "Congratulations! You have completed the BIOFEST Treasure Hunt.",

    instruction:
      "Report to the BIOFEST Treasure Hunt desk."
  }
};
