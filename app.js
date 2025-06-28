let score = JSON.parse(localStorage.getItem("score")) || 0;

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");

let num1, num2, correctAns;

generateQuestion();
updateScore();

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from reloading page

  const userAns = +inputEl.value;

  if (userAns === correctAns) {
    score++;
    messageEl.textContent = "✅ Correct!";
    messageEl.className = "correct";
  } else {
    score--;
    messageEl.textContent = `❌ Wrong! The correct answer was ${correctAns}.`;
    messageEl.className = "wrong";
  }

  updateLocalStorage();
  updateScore();
  generateQuestion();
  inputEl.value = "";
});

function generateQuestion() {
  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);
  correctAns = num1 * num2;
  questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
}

function updateScore() {
  scoreEl.innerText = `score: ${score}`;
}

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
