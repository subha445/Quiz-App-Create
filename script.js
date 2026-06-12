const quizData = {
  python: [
    {q: "How do you print text in Python?", options: ["echo()", "print()", "cout", "printf"], ans: "print()"},
    {q: "Which keyword defines a function?", options: ["func", "def", "function", "define"], ans: "def"}
  ],

  gk: [
    {q: "Capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], ans: "Delhi"},
    {q: "Largest planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], ans: "Jupiter"}
  ],

  cinema: [
    {q: "Who directed Baahubali?", options: ["Shankar", "Rajini", "SSR", "Lokesh"], ans: "SSR"},
    {q: "Which film has song Naatu Naatu?", options: ["RRR", "Pushpa", "KGF", "Leo"], ans: "RRR"}
  ],

  science: [
    {q: "H2O is?", options: ["Oxygen", "Water", "Hydrogen", "Salt"], ans: "Water"}
  ],

  math: [
    {q: "5 × 6 = ?", options: ["30", "25", "35", "40"], ans: "30"}
  ],

  computer: [
    {q: "CPU stands for?", options: ["Central Processing Unit", "Computer Power Unit", "Control Program Unit", "Central Program Utility"], ans: "Central Processing Unit"}
  ]
};

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;

function startQuiz(subject) {
  currentQuestions = quizData[subject];
  currentQuestion = 0;
  score = 0;

  document.getElementById("menu").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= currentQuestions.length) {
    document.getElementById("question").innerHTML =
      `Quiz Finished! Score: ${score}/${currentQuestions.length}`;
    document.getElementById("options").innerHTML = "";
    return;
  }

  const q = currentQuestions[currentQuestion];

  document.getElementById("question").innerText = q.q;

  let html = "";

  q.options.forEach(option => {
    html += `<button onclick="checkAnswer('${option}')">${option}</button><br><br>`;
  });

  document.getElementById("options").innerHTML = html;
}

function checkAnswer(answer) {
  if (answer === currentQuestions[currentQuestion].ans) {
    score++;
  }

  document.getElementById("score").innerText = "Score: " + score;

  currentQuestion++;
  showQuestion();
}
