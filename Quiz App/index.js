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
// const submitAnswerBtn = document.querySelector(".submitAnswerBtn");
const isQuestionAnswered = document.querySelector(".isQuestionAnswered");
const submitTest = document.getElementById("submitTest");

function loadQuestion() {
  const data = questions[questionNumber];
  updateNavigationButtons();
  displayQuestionAndOptions(data);
  highlightAnsweredQuestion(data);
}

function updateNavigationButtons() {
  previousBtn.style.visibility = questionNumber === 0 ? "hidden" : "visible";
  nextBtn.style.visibility =
    questionNumber === questions.length - 1 ? "hidden" : "visible";
}

function displayQuestionAndOptions(data) {
  questionHeading.textContent = `${questionNumber + 1}) ${data.question}`;
  options.forEach((option, index) => {
    option.textContent = data.options[index];
    answerInput[index].checked = data.selectedAnswer === index;
  });
}

function highlightAnsweredQuestion(data) {
  isQuestionAnswered.textContent = data.answered ? "🟢" : "🔴";
}

function handleAnswerSubmission() {
  const data = questions[questionNumber];
  // if (data.answered) {
  //   alert(
  //     `You have already answered this question. Your previous answer was: ${
  //       data.options[data.selectedAnswer]
  //     }`
  //   );
  //   return;
  // }

  answerInput.forEach((input, index) => {
    if (input.checked) {
      data.answered = true;
      data.selectedAnswer = index;
      if (index === data.correct) {
        correctAnswers++;
      } else {
        wrongAnswers -= 0.25;
      }
      moveToNextQuestion();
    }
  });
}

function moveToNextQuestion() {
  // questionNumber++;
  if (questionNumber < questions.length) {
    loadQuestion();
  } else {
    displayFinalScore();
  }
}

function displayFinalScore() {
  mainContainer.innerHTML = `<h2>Your Final Score is: ${
    correctAnswers + wrongAnswers
  }</h2>`;
}

loadQuestion();

nextBtn.addEventListener("click", () => {
  handleAnswerSubmission();
  if (questionNumber < questions.length - 1) {
    questionNumber++;

    loadQuestion();
  }
});

previousBtn.addEventListener("click", () => {
  handleAnswerSubmission();
  if (questionNumber > 0) {
    questionNumber--;

    loadQuestion();
  }
});

// submitAnswerBtn.addEventListener("click", handleAnswerSubmission);

submitTest.addEventListener("click", displayFinalScore);
