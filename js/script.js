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
    1
  ),
  new Question(
    "Who has been an astronaut?",
    ["Penny", "Sheldon", "Howard", "Raj"],
    2
  ),
  new Question(
    "Who owns a comic book store?",
    ["Stuart", "Raj", "Amy", "Penny"],
    0
  ),
  new Question(
    "Who has an obsession with trains?",
    ["Sheldon", "Leonard", "Penny", "Howard"],
    0
  ),
  new Question(
    "Who is from a farm in Nebraska?",
    ["Raj", "Stuart", "Bernadette", "Penny"],
    3
  ),
  new Question(
    "Who is Howard's signicant other?",
    ["Raj", "Amy", "Bernadette", "Penny"],
    2
  ),
  new Question(
    "Who is an Astrophysicist?",
    ["Howard", "Leonard", "Raj", "Sheldon"],
    2
  ),
  new Question(
    "Who is from the great state of Texas?",
    ["Stuart", "Howard", "Bernadette", "Sheldon"],
    3
  ),
  new Question(
    "Who has a dog named Cinnamon?",
    ["Penny", "Amy", "Howard", "Raj"],
    3
  ),
  new Question("Who loves tiaras?", ["Penny", "Raj", "Amy", "Bernadette"], 2),
];
