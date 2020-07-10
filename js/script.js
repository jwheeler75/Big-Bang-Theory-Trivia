const nextButton = document.querySelector(".next-question");
const startButton = document.querySelector(".start-game");
const mainArea = document.querySelector("main");
const gameArea = document.querySelector(".game-area");
const answers = document.querySelector(".answers");
const outcome = document.querySelector(".outcome");
const userScore = document.querySelector(".user-score");

const questions = [
  new Question(
    "Who is Leonard's significant other?",
    ["Penny", "Raj", "Amy", "Sheldon"],
    "Penny"
  ),
  new Question(
    "Who has been an astronaut?",
    ["Penny", "Sheldon", "Howard", "Raj"],
    "Howard"
  ),
  new Question(
    "Who owns a comic book store?",
    ["Stuart", "Raj", "Amy", "Penny"],
    "Stuart"
  ),
  new Question(
    "Who has an obsession with trains?",
    ["Sheldon", "Leonard", "Penny", "Howard"],
    "Sheldon"
  ),
  new Question(
    "Who is from a farm in Nebraska?",
    ["Raj", "Stuart", "Bernadette", "Penny"],
    "Penny"
  ),
  new Question(
    "Who is Howard's signicant other?",
    ["Raj", "Amy", "Bernadette", "Penny"],
    "Bernadette"
  ),
  new Question(
    "Who is an Astrophysicist?",
    ["Howard", "Leonard", "Raj", "Sheldon"],
    "Raj"
  ),
  new Question(
    "Who is from the great state of Texas?",
    ["Stuart", "Howard", "Bernadette", "Sheldon"],
    "Sheldon"
  ),
  new Question(
    "Who has a dog named Cinnamon?",
    ["Penny", "Amy", "Howard", "Raj"],
    "Raj"
  ),
  new Question(
    "Who loves tiaras?",
    ["Penny", "Raj", "Amy", "Bernadette"],
    "Amy"
  ),
];
