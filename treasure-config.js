const HUNT_CONFIG = {
  title: "BIOFEST 2026",
  subtitle: "TREASURE HUNT",

  start: "start",

  clues: {

    start: {
      type: "question",
      question: "Which path will you take?",
      description: "Choose your answer carefully. Each answer leads to a different location.",
      answers: [
        {
          text: "A — Follow the books",
          next: "library"
        },
        {
          text: "B — Follow the games",
          next: "ground"
        },
        {
          text: "C — Follow the crowd",
          next: "auditorium"
        }
      ]
    },

    library: {
      type: "clue",
      title: "CLUE UNLOCKED",
      clue: "Knowledge surrounds you, but your next destination is not inside a book.",
      location: "Find the next QR code near the Library.",
      nextQR: "library-qr"
    },

    ground: {
      type: "clue",
      title: "CLUE UNLOCKED",
      clue: "Where competition, speed and cheers come together, your next path awaits.",
      location: "Find the next QR code near the Ground.",
      nextQR: "ground-qr"
    },

    auditorium: {
      type: "clue",
      title: "CLUE UNLOCKED",
      clue: "Look for the place where voices, performances and celebrations fill the air.",
      location: "Find the next QR code near the Auditorium.",
      nextQR: "auditorium-qr"
    }

  }
};
