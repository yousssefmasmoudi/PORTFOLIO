const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
function myFunction() {
  alert("Message Reçu");
}
//Question bank
var questionBank = [
  {
    question: "Que signifie HTML ?",
    option: [
      "HomeTabulation of Mailing List",
      "XpTdr Mdr Lol",
      "Hyperspace TradeMark Language",
      "HyperText Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "À quoi sert HTML ?",
    option: [
      "À mettre en forme des pages web",
      " À structurer du contenu dans une page web",
      " À créer des pages dynamiques",
      "À concurrencer Google et Facebook",
    ],
    answer: " À structurer du contenu dans une page web",
  },
  {
    question: "Quel attribut permet d'indiquer la destination d'un lien ?",
    option: ["a", "src", "link", "href"],
    answer: "href",
  },
  {
    question: "Comment représenter une liste en HTML ?",
    option: ["ul", "li", "list", "lu"],
    answer: "ul",
  },
  {
    question: "Que signifie CSS ?",
    option: [
      "Cascading Style Sheets",
      "Create Simple Samples",
      "C est Super Simple !",
      "Choucroute et Saucisses de Strasbourg",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "À quoi sert le langage CSS ?",
    option: [
      "À réaliser des pages dynamiques",
      " À ajouter du style aux documents web",
      "À insérer du contenu dans une page internet",
      "À simuler une application en mode avion durant les trajets dans un bus",
    ],
    answer: " À ajouter du style aux documents web",
  },
  {
    question: "Pourquoi utilise-t-on généralement du CSS ?",
    option: [
      "Pour se compliquer la vie bien sûr",
      "Pour séparer le contenu et la présentation des documents web",
      "Cela permet de faire de plus jolis dégradés de couleurs",
      "Parce que c'est plus simple à comprendre que JavaScript",
    ],
    answer: "Pour séparer le contenu et la présentation des documents web",
  },
  {
    question: "Dans quel élément HTML place-t-on le JavaScript?",
    option: ["scripting", "javascript", "script", "js"],
    answer: "script",
  },
  {
    question:
      "Quelle est la syntaxe correcte pour faire référence à un script externe appelé 'xxx.js' ?",
    option: [
      "script name='xxx.js'",
      "script href='xxx.js'",
      "link src='xxx.js'",
      "script src='xxx.js'",
    ],
    answer: "script src='xxx.js'",
  },
  {
    question: "Comment créer une fonction en JavaScript ?",
    option: [
      "function:myFunction()",
      "def myFunction()",
      "function myFunction()",
      "def:myFunction()",
    ],
    answer: "function myFunction()",
  },
];

var i = 0;
var score = 0;

// Function to display questions
function displayQuestion() {
  var spans = document.querySelectorAll("span");
  for (var a = 0; a < spans.length; a++) {
    spans[a].style.background = "none";
  }
  document.getElementById("question").innerHTML =
    "Q." + (i + 1) + " " + questionBank[i].question;
  document.getElementById("option0").innerHTML = questionBank[i].option[0];
  document.getElementById("option1").innerHTML = questionBank[i].option[1];
  document.getElementById("option2").innerHTML = questionBank[i].option[2];
  document.getElementById("option3").innerHTML = questionBank[i].option[3];
  document.getElementById("stat").innerHTML =
    "Question" + " " + (i + 1) + " " + "of" + " " + questionBank.length;
}

// Function to calculate scores
function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = "limegreen";
  } else {
    document.getElementById(e.id).style.background = "tomato";
  }
  setTimeout(nextQuestion, 300);
}

// Function to display next question
function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
  } else {
    document.getElementById("result").innerHTML =
      score + "/" + questionBank.length;
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    displayResult();
  }
}

// Function to display the final result
function displayResult() {
  document.getElementById("result").innerHTML =
    "Your final score is: " + score + " out of " + questionBank.length;
}

// Function to go back to the quiz
function backToQuiz() {
  location.reload();
}

// Function to check answers
function checkAnswer() {
  var answerBank = document.getElementById("answerBank");
  var answers = document.getElementById("answers");
  answerBank.style.display = "block";
  document.getElementById("scoreboard").style.display = "none";
  for (var a = 0; a < questionBank.length; a++) {
    var list = document.createElement("li");
    list.innerHTML = questionBank[a].answer;
    answers.appendChild(list);
  }
}

// Event listener for the "Next" button
document.querySelector(".next").addEventListener("click", nextQuestion);

// Event listener for the "Check Answers" button
document.getElementById("check-answer").addEventListener("click", checkAnswer);

// Display the first question on page load
document.addEventListener("DOMContentLoaded", function () {
  displayQuestion();
});
