// readlineSync package

var readlineSync = require("readline-sync");
const chalk = require("chalk");
console.log("This is an app developed by me to check how well you know me:");
var userName = readlineSync.question("What is your name(Type your name)? ");

console.log("Welcome " + userName + "! Do You Know Me?");

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  // Use Of Chalk
  if (userAnswer === answer) {
    console.log(chalk.green("Yeay you got it Right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("Sorry its Wrong!"));
  }

  console.log(chalk.blue("Score: " + score));
  console.log("---------");
}

var questions = [
  {
    question: "What is my Name? ",
    answer: "Hassan",
  },
  {
    question: "My favourite Mobile game? ",
    answer: "Bgmi",
  },
  {
    question: "What is my favourite Food? ",
    answer: "Biryani",
  },
  {
    question: "Where do I live? ",
    answer: "Gorakhpur",
  },
  {
    question: "My favourite Movie? ",
    answer: "Veer Zara",
  },
  {
    question: "My favourite Anime Movie? ",
    answer: "A silent voice",
  },
  {
    question: "I am a Tea or Coffee Person? ",
    answer: "Tea",
  },
  {
    question: "I am Pursuing which course? ",
    answer: "Computer Science",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.bgGreen("Total Score: " + score));
