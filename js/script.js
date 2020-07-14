class Quiz {
  constructor() {
    this.questions = [
      {
        questionNum: "Question 1",
        question: "Who is Leonard's significant other?",
        answer1: "Penny",
        answer2: "Raj",
        answer3: "Amy",
        answer4: "Sheldon",
        correct: "Penny",
      },
      {
        questionNum: "Question 2",
        question: "Who has been an astronaut?",
        answer1: "Penny",
        answer2: "Sheldon",
        answer3: "Howard",
        answer4: "Raj",
        correct: "Howard",
      },
      {
        questionNum: "Question 3",
        question: "Who owns a comic book store?",
        answer1: "Stuart",
        answer2: "Raj",
        answer3: "Amy",
        answer4: "Penny",
        correct: "Stuart",
      },
      {
        questionNum: "Question 4",
        question: "Who has an obsession with trains?",
        answer1: "Sheldon",
        answer2: "Leonard",
        answer3: "Penny",
        answer4: "Howard",
        correct: "Sheldon",
      },
      {
        questionNum: "Question 5",
        question: "Who is from a farm in Nebraska?",
        answer1: "Raj",
        answer2: "Stuart",
        answer3: "Bernadette",
        answer4: "Penny",
        correct: "Penny",
      },
      {
        questionNum: "Question 6",
        question: "Who is Howard's signicant other?",
        answer1: "Raj",
        answer2: "Amy",
        answer3: "Bernadette",
        answer4: "Penny",
        correct: "Bernadette",
      },
      {
        questionNum: "Question 7",
        question: "Who is an Astrophysicist?",
        answer1: "Howard",
        answer2: "Leonard",
        answer3: "Raj",
        answer4: "Sheldon",
        correct: "Raj",
      },
      {
        questionNum: "Question 8",
        question: "Who is from the great state of Texas?",
        answer1: "Stuart",
        answer2: "Howard",
        answer3: "Bernadette",
        answer4: "Sheldon",
        correct: "Sheldon",
      },
      {
        questionNum: "Question 9",
        question: "Who has a dog named Cinnamon?",
        answer1: "Penny",
        answer2: "Amy",
        answer3: "Howard",
        answer4: "Raj",
        correct: "Raj",
      },
      {
        questionNum: "Question 10",
        question: "Who is giddy over tiaras?",
        answer1: "Penny",
        answer2: "Raj",
        answer3: "Amy",
        answer4: "Bernadette",
        correct: "Amy",
      },
    ];
    this.lastQuestion = this.questions.length - 1;
    this.currentQuestion = 0;
    this.score = 0;
    this.q = this.questions[this.currentQuestion];
  }
  startGame = () => {
    this.unhideQuestions();
    this.displayQuestion();
    userScore.style.display = "block";
    startButton.style.display = "none";
    this.unhideAnswerButtons();
    this.unhideQuestionNumber();
  };
  displayQuestion = () => {
    questionsArea.innerHTML = "<p>" + this.q.question + "</p>";
    questionNumber.innerHTML = "<p>" + this.q.questionNum + "</p>";
    answerButton1.innerText = this.q.answer1;
    answerButton2.innerText = this.q.answer2;
    answerButton3.innerText = this.q.answer3;
    answerButton4.innerText = this.q.answer4;
    this.unhideResult();
  };
  answerCorrect = () => {
    result.style.display = "block";
    result.innerHTML =
      "<p>Good Job! Your Answer is correct.<br>Click next to continue.</p>";
    nextButton.style.display = "block";
  };
  advanceScore = () => {
    this.score++;
    userScore.innerHTML = `<p>Score<br>${this.score}/10</p>`;
  };
  answerIncorrect = () => {
    result.style.display = "block";
    result.innerHTML = `<p>Are you sure you have seen the show?<br>The correct answer is ${this.q.correct}.<br>Click next to continue.</p>`;
    nextButton.style.display = "block";
  };
  hideNextButton = () => {
    nextButton.style.display = "none";
    result.style.display = "none";
  };
  hideAnswerButtons = () => {
    answerButton1.style.display = "none";
    answerButton2.style.display = "none";
    answerButton3.style.display = "none";
    answerButton4.style.display = "none";
  };
  unhideAnswerButtons = () => {
    answerButton2.style.display = "inline";
    answerButton1.style.display = "inline";
    answerButton3.style.display = "inline";
    answerButton4.style.display = "inline";
  };
  unhideResult = () => {
    result.style.display = "block";
  };
  clearResult = () => {
    result.innerText = "";
  };
  hideQuestionNumber = () => {
    questionNumber.style.display = "none";
  };
  unhideQuestionNumber = () => {
    questionNumber.style.display = "block";
  };
  hideQuestions = () => {
    questionsArea.style.display = "none";
  };
  unhideQuestions = () => {
    questionsArea.style.display = "block";
  };
  unhideRestartButton = () => {
    restartButton.style.display = "inline";
  };
  hideScore = () => {
    userScore.style.display = "none";
  };
  hideRestartButton = () => {
    restartButton.style.display = "none";
  };
  hideResults = () => {
    result.style.display = "none";
  };
  clearScore = () => {
    this.score = 0;
  };
  restartGame = () => {
    this.lastQuestion = this.questions.length - 1;
    this.currentQuestion = 0;
    this.q = this.questions[this.currentQuestion];
    this.hideRestartButton();
    this.clearScore();
    this.clearResult();
    this.hideResults();
    console.log(this.score);
    userScore.innerHTML = `<p>Score<br>${this.score}/10</p>`;
    this.startGame();
  };
  quizComplete = () => {
    this.unhideRestartButton();
    this.hideNextButton();
    this.hideScore();
    this.hideQuestions();
    this.hideAnswerButtons();
    this.unhideResult();
    result.innerHTML = `<p>You scored ${this.score}/10!<br>Click on restart to play again!</p>`;
  };
  answerInput = (event) => {
    // console.log(event.target.innerText);
    // grab the text from answerButton1 element and store in a variable
    const answer = event.target.innerText;
    //  call validateAnswer function passing the variable as argument
    this.hideAnswerButtons();
    this.hideQuestions();
    this.hideQuestionNumber();
    this.validateAnswer(answer);
  };
  nextQuestion = () => {
    if (this.currentQuestion > this.lastQuestion) {
      this.quizComplete();
    } else {
      this.hideNextButton();
      this.clearResult();
      this.displayQuestion();
      this.unhideQuestions();
      this.unhideQuestionNumber();
      this.unhideAnswerButtons();
    }
  };
  validateAnswer = (answer) => {
    if (answer == this.q.correct) {
      this.answerCorrect();
      this.currentQuestion++;
      this.q = this.questions[this.currentQuestion];
      this.advanceScore();
    } else {
      this.answerIncorrect();
      this.currentQuestion++;
      this.q = this.questions[this.currentQuestion];
    }
  };
}

const myGame = new Quiz();

//Create variables linked to html
const nextButton = document.querySelector(".next-question");
const startButton = document.querySelector(".start-game");
const mainArea = document.querySelector("main");
const questionsArea = document.querySelector(".question");
const questionNumber = document.querySelector(".question-number");
const answersArea = document.querySelector(".answer");
const userScore = document.querySelector(".user-score");
const result = document.querySelector(".result");
const answerButton1 = document.querySelector("#answer1");
const answerButton2 = document.querySelector("#answer2");
const answerButton3 = document.querySelector("#answer3");
const answerButton4 = document.querySelector("#answer4");
const allAnswerButtons = document.querySelectorAll(".button");
const restartButton = document.querySelector(".restart-game");

startButton.addEventListener("click", myGame.startGame);
nextButton.addEventListener("click", myGame.nextQuestion);
answerButton1.addEventListener("click", myGame.answerInput);
answerButton2.addEventListener("click", myGame.answerInput);
answerButton3.addEventListener("click", myGame.answerInput);
answerButton4.addEventListener("click", myGame.answerInput);
restartButton.addEventListener("click", myGame.restartGame);
