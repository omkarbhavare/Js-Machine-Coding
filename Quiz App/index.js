import { questions as questionsAPI } from "./api.js";

const questions = questionsAPI;
let questionNumber = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

const finalScore = document.querySelector(".finalScore");
const mainContainer = document.getElementById("mainContainer");
const questionHeading = document.querySelector(".questionHeading");
const options = document.querySelectorAll(".options");
const answerInput = document.querySelectorAll("input");
const previousBtn = document.querySelector(".previousBtn");
const nextBtn = document.querySelector(".nextBtn");
const submitTest = document.getElementById("submitTest");

function loadQuestion() {
  const data = questions[questionNumber];
  updateNavigationButtons();
  displayQuestionAndOptions(data);
}

function updateNavigationButtons() {
  previousBtn.style.visibility = questionNumber === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = questionNumber === questions.length - 1 ? "hidden" : "visible";
}

function displayQuestionAndOptions(data) {
  questionHeading.textContent = `${questionNumber + 1}) ${data.question}`;
  options.forEach((option, index) => {
    option.textContent = data.options[index];
    answerInput[index].checked = data.selectedAnswer === index;
  });
}

function handleAnswerSubmission() {
  const data = questions[questionNumber];
  answerInput.forEach((input, index) => {
    if (input.checked && !data.answered) {
      data.answered = true;
      data.selectedAnswer = index;
      if (index === data.correct) {
        correctAnswers++;
      } else {
        console.log("correctAnswers",correctAnswers,"wrongAnswers",wrongAnswers)
        wrongAnswers = wrongAnswers - 0.25;
        console.log("correctAnswers",correctAnswers,"wrongAnswers",wrongAnswers)
      }
      moveToNextQuestion();
    }
  });
}

function moveToNextQuestion() {
  if (questionNumber < questions.length - 1) {
    questionNumber++;
    loadQuestion();
  } else {
    displayFinalScore();
  }
}

function displayFinalScore() {
  mainContainer.innerHTML = `<h2>Your Final Score is: ${correctAnswers + wrongAnswers}</h2>`;
}

loadQuestion();

nextBtn.addEventListener("click", handleAnswerSubmission);
previousBtn.addEventListener("click", () => {
  if (questionNumber > 0) {
    questionNumber--;
    loadQuestion();
  }
});
submitTest.addEventListener("click", displayFinalScore);
