const quizData = {
  python: [
    {q: "How do you print text in Python?", options: ["echo()", "print()", "cout", "printf"], ans: "print()"},
    {q: "Which method adds element to a list?", options: ["add()", "append()", "push()", "insert()"], ans: "append()"},
    {q: "How to write a single line comment?", options: ["1", "2", "3", "//"], ans: "1"}
  ],
  gk: [
    {q: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], ans: "Delhi"},
    {q: "Where is Taj Mahal located?", options: ["Delhi", "Agra", "Jaipur", "Madurai"], ans: "Agra"}
  ],
  cinema: [
    {q: "Who directed Baahubali?", options: ["Shankar", "Rajini", "SSR", "Lokesh"], ans: "SSR"},
    {q: "What is Kollywood?", options: ["Hindi", "Tamil", "Telugu", "Malayalam"], ans: "Tamil"}
  ]
};

let currentQuiz = [];
let currentQ = 0;
let score = 0;

function startQuiz(category) {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  currentQuiz = quizData[category];
  currentQ = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  if(currentQ >= currentQuiz.length) {
    document.getElementById('question').innerHTML = `Final Score: ${score}/${currentQuiz.length}`;
    document.getElementById('options').innerHTML = '';
    return;
  }
  let q = currentQuiz[currentQ];
  document.getElementById('question').innerText = q.q;
  document.getElementById('options').innerHTML = q.options.map(opt =>
    `<button class="option-btn" onclick="checkAns('${opt}')">${opt}</button>`
  ).join('');
}

function checkAns(selected) {
  if(selected === currentQuiz[currentQ].ans) score++;
  currentQ++;
  showQuestion();
}
