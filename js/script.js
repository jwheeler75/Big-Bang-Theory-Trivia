const nextButton = document.querySelector(".next-question");
const startButton = document.querySelector(".start-game");
const mainArea = document.querySelector("main");
const questionsArea = document.querySelector(".question");
const answersArea = document.querySelector(".answer");
const userScore = document.querySelector(".user-score");
const answerButton1 = document.querySelector(".button1");
const answerButton2 = document.querySelector(".button2");
const answerButton3 = document.querySelector(".button3");
const answerButton4 = document.querySelector(".button4");
const questions = [
  {
    question: "Who is Leonard's significant other?",
    choiceA: "Penny",
    choiceB: "Raj",
    choiceC: "Amy",
    choiceD: "Sheldon",
    correct: "Penny",
  },
  {
    question: "Who has been an astronaut?",
    choiceA: "Penny",
    choiceB: "Sheldon",
    choiceC: "Howard",
    choiceD: "Raj",
    correct: "Howard",
  },
  {
    question: "Who owns a comic book store?",
    choiceA: "Stuart",
    choiceB: "Raj",
    choiceC: "Amy",
    choiceD: "Penny",
    correct: "Stuart",
  },
  {
    question: "Who has an obsession with trains?",
    choiceA: "Sheldon",
    choiceB: "Leonard",
    choiceC: "Penny",
    choiceD: "Howard",
    correct: "Sheldon",
  },
  {
    question: "Who is from a farm in Nebraska?",
    choiceA: "Raj",
    choiceB: "Stuart",
    choiceC: "Bernadette",
    choiceD: "Penny",
    correct: "",
  },
  {
    question: "Who is Howard's signicant other?",
    choiceA: "Raj",
    choiceB: "Amy",
    choiceC: "Bernadette",
    choiceD: "Penny",
    correct: "Bernadette",
  },
  {
    question: "Who is an Astrophysicist?",
    choiceA: "Howard",
    choiceB: "Leonard",
    choiceC: "Raj",
    choiceD: "Sheldon",
    correct: "Raj",
  },
  {
    question: "Who is from the great state of Texas?",
    choiceA: "Stuart",
    choiceB: "Howard",
    choiceC: "Bernadette",
    choiceD: "Sheldon",
    correct: "Sheldon",
  },
  {
    question: "Who has a dog named Cinnamon?",
    choiceA: "Penny",
    choiceB: "Amy",
    choiceC: "Howard",
    choiceD: "Raj",
    correct: "Raj",
  },
  {
    question: "Who is giddy over tiaras?",
    choiceA: "Penny",
    choiceB: "Raj",
    choiceC: "Amy",
    choiceD: "Bernadette",
    correct: "Amy",
  },
];
const lastQuestion = questions.length - 1;
let = currentQuestion = 0;

function displayQuestion() {
  let q = questions[currentQuestion];
  questionsArea.innerHTML = "<p>" + q.question + "</p>";
}
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  displayQuestion();
}
