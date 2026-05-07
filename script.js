const questions = [
  {
    question: "How do you prefer to spend your free time?",
    options: [
      { text: "Leading or organizing others", color: "Red" },
      { text: "Socializing with friends", color: "Orange" },
      { text: "Relaxing and staying positive", color: "Yellow" },
      { text: "Helping others", color: "Green" },
      { text: "Thinking and analyzing", color: "Blue" },
      { text: "Reflecting and imagining", color: "Indigo" },
      { text: "Creating new ideas", color: "Violet" }
    ]
  },

  {
    question: "What describes you best?",
    options: [
      { text: "Confident and driven", color: "Red" },
      { text: "Energetic and fun", color: "Orange" },
      { text: "Happy and optimistic", color: "Yellow" },
      { text: "Kind and supportive", color: "Green" },
      { text: "Logical and focused", color: "Blue" },
      { text: "Intuitive and deep thinker", color: "Indigo" },
      { text: "Creative and visionary", color: "Violet" }
    ]
  }
];

let currentQuestion = 0;

let scores = {
  Red: 0,
  Orange: 0,
  Yellow: 0,
  Green: 0,
  Blue: 0,
  Indigo: 0,
  Violet: 0
};

const quizDiv = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const resultDiv = document.getElementById("result");

const startScreen = document.getElementById("startScreen");
const quizContainer = document.getElementById("quizContainer");
const startBtn = document.getElementById("startBtn");

function loadQuestion() {
  const q = questions[currentQuestion];

  quizDiv.innerHTML = `
    <h2>Question ${currentQuestion + 1} of ${questions.length}</h2>
    <h3>${q.question}</h3>
  `;

  q.options.forEach(opt => {
    const btn = document.createElement("div");

    btn.classList.add("option");

    btn.innerText = opt.text;

    btn.onclick = () => selectAnswer(opt.color);

    quizDiv.appendChild(btn);
  });
}

function selectAnswer(color) {
  scores[color]++;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizDiv.classList.add("hidden");

  let topColor = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  let descriptions = {
    Red: "Leader 🔴 - You are confident and determined.",
    Orange: "Socializer 🟠 - You are outgoing and energetic.",
    Yellow: "Optimist 🟡 - You are cheerful and positive.",
    Green: "Helper 🟢 - You are caring and supportive.",
    Blue: "Thinker 🔵 - You are logical and analytical.",
    Indigo: "Intuitive 🟣 - You are reflective and thoughtful.",
    Violet: "Visionary 💜 - You are imaginative and creative."
  };

  let bgColors = {
    Red: "#ff4d4d",
    Orange: "#ff944d",
    Yellow: "#ffe066",
    Green: "#66cc66",
    Blue: "#4d79ff",
    Indigo: "#5c6bc0",
    Violet: "#b366ff"
  };

  document.body.style.backgroundColor = bgColors[topColor];

  resultDiv.classList.remove("hidden");

  resultDiv.innerHTML = `
    <h2>Your Color Personality is:</h2>
    <p>${descriptions[topColor]}</p>
  `;
}

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");

  quizContainer.classList.remove("hidden");

  loadQuestion();
});
