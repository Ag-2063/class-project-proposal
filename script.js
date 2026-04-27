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

function loadQuestion() {
  const q = questions[currentQuestion];
  quizDiv.innerHTML = `<h2>${q.question}</h2>`;

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
  nextBtn.classList.add("hidden");

  let topColor = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  let descriptions = {
    Red: "Leader 🔴 - You are strong, confident, and take charge.",
    Orange: "Socializer 🟠 - You are outgoing and love people.",
    Yellow: "Optimist 🟡 - You are positive and cheerful.",
    Green: "Helper 🟢 - You are caring and supportive.",
    Blue: "Thinker 🔵 - You are logical and analytical.",
    Indigo: "Intuitive 🟣 - You are deep and reflective.",
    Violet: "Visionary 🟣 - You are creative and imaginative."
  };

  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = `
    <h2>Your Color Personality is:</h2>
    <p>${descriptions[topColor]}</p>
  `;
}

nextBtn.addEventListener("click", loadQuestion);

loadQuestion();
