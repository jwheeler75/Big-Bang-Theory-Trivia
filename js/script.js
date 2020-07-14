class Quiz {
  constructor() {
    this.questions = [
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
        correct: "Penny",
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
    this.lastQuestion = this.questions.length - 1;
    this.currentQuestion = 0;
    this.score = 0;
    this.q = this.questions[this.currentQuestion];
  }
  startGame = () => {
    this.displayQuestion();
    userScore.style.display = "block";
    startButton.style.display = "none";
    this.unhideAnswerButtons();
  };
  displayQuestion = () => {
    questionsArea.innerHTML = "<p>" + this.q.question + "</p>";
    answerButton1.innerText = this.q.answer1;
    answerButton2.innerText = this.q.answer2;
    answerButton3.innerText = this.q.answer3;
    answerButton4.innerText = this.q.answer4;
    this.unhideResult();
  };
  answerCorrect = () => {
    result.innerHTML =
      "<p>Good Job! Your Answer is correct.<br>Click next to continue.</p>";
    nextButton.style.display = "block";
  };
  advanceScore = () => {
    this.score++;
    userScore.innerHTML = `<p>Score<br>${this.score}/10</p>`;
  };
  answerIncorrect = () => {
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
    // result.style.display = "none";
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
  restartGame = () => {
    this.startGame();
  };

  // isQuizComplete = () => {
  //   if (this.currentQuestion == this.lastQuestion){
  // this.unhideRestartButton();
  //   result.innerHTML = `<p>You scored${this.score}/10.<br>Click on restart to play again!</p>`;
  // };

  answerInput = (event) => {
    // console.log(event.target.innerText);
    // grab the text from answerButton1 element and store in a variable
    const answer = event.target.innerText;
    //  call validateAnswer function passing the variable as argument
    this.hideAnswerButtons();
    this.hideQuestions();
    this.validateAnswer(answer);
  };
  nextQuestion = () => {
    this.currentQuestion++;
    this.q = this.questions[this.currentQuestion];
    this.hideNextButton();
    this.clearResult();
    this.displayQuestion();
    this.unhideQuestions();
    this.unhideAnswerButtons();
  };
  validateAnswer = (answer) => {
    console.log(answer);
    console.log(this.currentQuestion);
    console.log(this.lastQuestion);
    console.log(this.q);
    if (answer == this.q.correct) {
      this.answerCorrect();
      this.advanceScore();
    } else {
      this.answerIncorrect();
    }
  };
}

const myGame = new Quiz();

//Create variables linked to html
const nextButton = document.querySelector(".next-question");
const startButton = document.querySelector(".start-game");
const mainArea = document.querySelector("main");
const questionsArea = document.querySelector(".question");
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
