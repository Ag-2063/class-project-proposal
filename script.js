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
  },

  {
    question: "How do you react in stressful situations?",
    options: [
      { text: "Take control immediately", color: "Red" },
      { text: "Talk to others for support", color: "Orange" },
      { text: "Stay positive and hopeful", color: "Yellow" },
      { text: "Help everyone stay calm", color: "Green" },
      { text: "Analyze the problem carefully", color: "Blue" },
      { text: "Trust your instincts", color: "Indigo" },
      { text: "Think of creative solutions", color: "Violet" }
    ]
  },

  {
    question: "What is most important to you?",
    options: [
      { text: "Success and achievement", color: "Red" },
      { text: "Friendship and fun", color: "Orange" },
      { text: "Happiness and positivity", color: "Yellow" },
      { text: "Peace and kindness", color: "Green" },
      { text: "Knowledge and understanding", color: "Blue" },
      { text: "Meaning and intuition", color: "Indigo" },
      { text: "Innovation and imagination", color: "Violet" }
    ]
  },

  {
    question: "What type of school project do you enjoy most?",
    options: [
      { text: "Being the leader", color: "Red" },
      { text: "Working with a group", color: "Orange" },
      { text: "Fun and creative activities", color: "Yellow" },
      { text: "Helping teammates", color: "Green" },
      { text: "Research and problem-solving", color: "Blue" },
      { text: "Deep discussions and ideas", color: "Indigo" },
      { text: "Artistic or original projects", color: "Violet" }
    ]
  },

  {
    question: "How would your friends describe you?",
    options: [
      { text: "Strong leader", color: "Red" },
      { text: "Funny and outgoing", color: "Orange" },
      { text: "Cheerful and positive", color: "Yellow" },
      { text: "Caring and loyal", color: "Green" },
      { text: "Smart and logical", color: "Blue" },
      { text: "Wise and thoughtful", color: "Indigo" },
      { text: "Creative and unique", color: "Violet" }
    ]
  },

  {
    question: "What motivates you the most?",
    options: [
      { text: "Winning and succeeding", color: "Red" },
      { text: "Having exciting experiences", color: "Orange" },
      { text: "Enjoying life", color: "Yellow" },
      { text: "Making others happy", color: "Green" },
      { text: "Learning new things", color: "Blue" },
      { text: "Understanding yourself", color: "Indigo" },
      { text: "Creating something new", color: "Violet" }
    ]
  },

  {
    question: "What would you rather do on a weekend?",
    options: [
      { text: "Compete in sports or challenges", color: "Red" },
      { text: "Go to a party", color: "Orange" },
      { text: "Relax and have fun", color: "Yellow" },
      { text: "Spend time with loved ones", color: "Green" },
      { text: "Read or study", color: "Blue" },
      { text: "Reflect or journal", color: "Indigo" },
      { text: "Work on creative hobbies", color: "Violet" }
    ]
  },

  {
    question: "How do you usually make decisions?",
    options: [
      { text: "Quickly and confidently", color: "Red" },
      { text: "Based on what feels exciting", color: "Orange" },
      { text: "By staying positive", color: "Yellow" },
      { text: "Thinking about others", color: "Green" },
      { text: "Using logic and facts", color: "Blue" },
      { text: "Following intuition", color: "Indigo" },
      { text: "Imagining possibilities", color: "Violet" }
    ]
  },

  {
    question: "Which career sounds most interesting to you?",
    options: [
      { text: "Business leader or manager", color: "Red" },
      { text: "Event planner or entertainer", color: "Orange" },
      { text: "Motivational speaker", color: "Yellow" },
      { text: "Teacher or counselor", color: "Green" },
      { text: "Scientist or engineer", color: "Blue" },
      { text: "Psychologist or philosopher", color: "Indigo" },
      { text: "Artist or designer", color: "Violet" }
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
