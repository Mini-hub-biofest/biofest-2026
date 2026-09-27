/*
  BIOFEST TREASURE HUNT — EDIT THIS FILE
  --------------------------------------
  You can change:
  - title/subtitle
  - every question
  - every answer
  - where an answer leads (next clue ID)
  - clue text
  - physical location hints
  - penalties / completion messages

  IMPORTANT:
  Keep each clue ID unique.
  An answer's "next" value must match another clue ID, or use "FINISH".
*/

const HUNT_CONFIG = {
  title: "BIOFEST TREASURE HUNT",
  subtitle: "Every answer opens a different path.",
  accent: "🧩",

  startClue: "clue1",

  settings: {
    showProgress: true,
    allowBack: true,
    rememberTeam: true
  },

  clues: {
    clue1: {
      number: 1,
      title: "The First Trail",
      question: "I can be full of pages, but I am not a book. What am I?",
      hint: "Think of a place where information is stored.",
      location: "Demo location: Library",
      answers: [
        { text: "A Library", next: "clue2a" },
        { text: "A River", next: "clue2b" },
        { text: "A Stadium", next: "clue2c" },
        { text: "A Kitchen", next: "clue2d" }
      ]
    },

    clue2a: {
      number: 2,
      title: "The Quiet Path",
      question: "Which object would most likely help you find a specific page?",
      hint: "This is a demo clue. Replace it later.",
      location: "Demo location: Notice Board",
      answers: [
        { text: "Bookmark", next: "clue3" },
        { text: "Football", next: "clue3" },
        { text: "Spoon", next: "clue3" },
        { text: "Helmet", next: "clue3" }
      ]
    },

    clue2b: {
      number: 2,
      title: "The Water Path",
      question: "Which direction does a compass needle point toward?",
      hint: "Demo content.",
      location: "Demo location: Garden",
      answers: [
        { text: "North", next: "clue3" },
        { text: "South", next: "clue3" },
        { text: "East", next: "clue3" },
        { text: "West", next: "clue3" }
      ]
    },

    clue2c: {
      number: 2,
      title: "The Arena Path",
      question: "How many players are on a football team on the field?",
      hint: "Demo content.",
      location: "Demo location: Sports Ground",
      answers: [
        { text: "11", next: "clue3" },
        { text: "5", next: "clue3" },
        { text: "7", next: "clue3" },
        { text: "15", next: "clue3" }
      ]
    },

    clue2d: {
      number: 2,
      title: "The Kitchen Path",
      question: "Which item is normally used to measure temperature?",
      hint: "Demo content.",
      location: "Demo location: Cafeteria",
      answers: [
        { text: "Thermometer", next: "clue3" },
        { text: "Ruler", next: "clue3" },
        { text: "Compass", next: "clue3" },
        { text: "Stopwatch", next: "clue3" }
      ]
    },

    clue3: {
      number: 3,
      title: "The Final Trail",
      question: "What should every treasure hunter do before claiming the prize?",
      hint: "This is only a placeholder for your real final puzzle.",
      location: "Demo location: Final Checkpoint",
      answers: [
        { text: "Check the final clue", next: "FINISH" },
        { text: "Go home", next: "FINISH" },
        { text: "Start over", next: "FINISH" },
        { text: "Ignore the clue", next: "FINISH" }
      ]
    }
  },

  finish: {
    title: "TREASURE FOUND!",
    message: "Congratulations, team! You reached the end of the demo route.",
    instruction: "Replace this with your real final instruction, prize location, or code."
  }
};
