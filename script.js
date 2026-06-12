function showQuestion() {
  if(currentQ >= currentQuiz.length) {
    document.getElementById('question').innerHTML = `Final Score: ${score}/${currentQuiz.length} 🔥<br><br><button class="option-btn" onclick="location.reload()">Play Again</button>`;
    document.getElementById('options').innerHTML = '';
    return;
  }
  let q = currentQuiz[currentQ];
  document.getElementById('question').innerText = q.q;
  document.getElementById('options').innerHTML = q.options.map(opt =>
    `<button class="option-btn" onclick="checkAns('${opt}')">${opt}</button>`
  ).join('');
}
  
