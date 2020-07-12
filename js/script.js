//Create variables linked to html
const nextButton = document.querySelector(".next-question");
const startButton = document.querySelector(".start-game");
const mainArea = document.querySelector("main");
const questionsArea = document.querySelector(".question");
const answersArea = document.querySelector(".answer");
const userScore = document.querySelector(".user-score");
const result = document.querySelector(".result");
const answerButton1 = document.querySelector(".answer1");
const answerButton2 = document.querySelector(".answer2");
const answerButton3 = document.querySelector(".answer3");
const answerButton4 = document.querySelector(".answer4");
//Create Questions
const questions = [
  {
    question: "Who is Leonard's significant other?",
    answer1: "Penny",
    answer2: "Raj",
    answer3: "Amy",
    answer4: "Sheldon",
    correct: "Penny",
  },
  {
    question: "Who has been an astronaut?",
    answer1: "Penny",
    answer2: "Sheldon",
    answer3: "Howard",
    answer4: "Raj",
    correct: "Howard",
  },
  {
    question: "Who owns a comic book store?",
    answer1: "Stuart",
    answer2: "Raj",
    answer3: "Amy",
    answer4: "Penny",
    correct: "Stuart",
  },
  {
    question: "Who has an obsession with trains?",
    answer1: "Sheldon",
    answer2: "Leonard",
    answer3: "Penny",
    answer4: "Howard",
    correct: "Sheldon",
  },
  {
    question: "Who is from a farm in Nebraska?",
    answer1: "Raj",
    answer2: "Stuart",
    answer3: "Bernadette",
    answer4: "Penny",
    correct: "",
  },
  {
    question: "Who is Howard's signicant other?",
    answer1: "Raj",
    answer2: "Amy",
    answer3: "Bernadette",
    answer4: "Penny",
    correct: "Bernadette",
  },
  {
    question: "Who is an Astrophysicist?",
    answer1: "Howard",
    answer2: "Leonard",
    answer3: "Raj",
    answer4: "Sheldon",
    correct: "Raj",
  },
  {
    question: "Who is from the great state of Texas?",
    answer1: "Stuart",
    answer2: "Howard",
    answer3: "Bernadette",
    answer4: "Sheldon",
    correct: "Sheldon",
  },
  {
    question: "Who has a dog named Cinnamon?",
    answer1: "Penny",
    answer2: "Amy",
    answer3: "Howard",
    answer4: "Raj",
    correct: "Raj",
  },
  {
    question: "Who is giddy over tiaras?",
    answer1: "Penny",
    answer2: "Raj",
    answer3: "Amy",
    answer4: "Bernadette",
    correct: "Amy",
  },
];
//Display Question

const lastQuestion = questions.length - 1;
let = currentQuestion = 0;
let q = questions[currentQuestion];
function displayQuestion() {
  questionsArea.innerHTML = "<p>" + q.question + "</p>";
  answerButton1.innerHTML = q.answer1;
  answerButton2.innerHTML = q.answer2;
  answerButton3.innerHTML = q.answer3;
  answerButton4.innerHTML = q.answer4;
}
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", hideDisplayButton);
function startGame() {
  startButton.style.display = "none";
  displayQuestion();
  answerIncorrect();
}

function answerCorrect() {
  result.innerHTML =
    "Good Job! Your Answer is correct. Click next to continue.";
  nextButton.style.display = "block";
}

function answerIncorrect() {
  result.innerHTML = `Are you sure you have seen the show? The correct answer is ${q.correct}. Click next to continue.`;
  nextButton.style.display = "block";
}
function hideDisplayButton() {
  nextButton.style.display = "none";
}
