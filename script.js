var quizContainer = document.getElementById('quiz');
var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");


var quizQuestionpage = document.querySelector("#quizQuestionsPage");
// 
quizQuestionpage.style.display= "block";
var preguntas = document.querySelector(".preg");
var quizQuestionHeader = document.getElementById("quizQuestionHeader");
var choice1 = document.getElementById("a");
var choice2 = document.getElementById("b");
var choice3 = document.getElementById("c");
var choice4 = document.getElementById("d");
var choice5 = document.getElementById("e");
var answerResponse = document.getElementById("answerResponse");
var questionIndex = 0;


var finalScoreIs = document.getElementById("finalScoreIs");
var questionButton = document.querySelector(".questions");

console.log(questionButton)


var quizChallengePage = document.querySelector(".quizChallengePage");
var finalScorePage = document.querySelector(".finalScorePage");

var quizQuestions = [
  {
    question: "Cruella de Vil is the villain in which Disney movie?",
      a: "Finding Nemo",
      b: " 101 Dalmatians", 
      c: "Monsters Inc",
      d: " Toy Story",
      e: "Frozen",
    correctAnswer: "b"
  },
  {
    question: "What does Cinderella’s fairy godmother turn into a carriage?",
      a: "A tomatoe",
      b: "A banana",
      c: "A pumpking",
      d: "A squash",
      e: "A Peach",
    correctAnswer: "c"
  },
  {
    question: "What type of animal does Jasmine have for a pet in Aladdin?",
      a: "A tiger called Rajah",
      b: "A Dragon called Mushu",
      c: "A fish called flouder",
      d: "A Chamelion called Pascal",
      e: "A racoon called Meeko",
    correctAnswer: "a"
  },
  {
    question:  "The song “You Can Fly” is from which Disney movie?",
      a: "Mulan",
      b: "Mary Poppins",
      c: "Up",
      d: "Peter Pan",
      e: "Frozen",
    correctAnswer: "d"
  },
  {
    question:  "In The Emperor's New Groove, what does Yzma admit to Kronk that she never liked?",
      a: "his face",
      b: "his jokes",
      c: "his pitchy singing",
      d: "his goofy hat",
      e: "his spinach puffs",
    
    correctAnswer: "e"
  },
];

quizQuestionpage.style.display = "none"; // Hide Quiz Questions Page
finalScorePage.style.display = "none";   // Hide Final Core Page 

submitButton.addEventListener("click", startQuiz);  // Event Listener when hit start quiz 

// Define the variable to store the selector
var x = document.querySelector("#submitButton");
// Add an event listener to the variable an determine a set of instructions
x.addEventListener("click", function(event) {
 
});


var secondsLeft = 80; // Seconds in Timer 
var startScore = 0; // Starting time 
var timer = document.getElementById("timer"); // Timer Variable 

timer.textContent = "Time: " + startScore; // Holder text in nav bar 

function startQuiz() { 
  quizQuestionpage.style.display = "block";
  finalScorePage.style.display = "none"; // Hide Final Core Page 
  quizChallengePage.style.display = "none"; // Hide Quiz Challenge Page 
  choice1.style.display = "block";
  choice2.style.display = "block";
  choice3.style.display = "block";
  choice4.style.display = "block";
  choice5.style.display = "block";
 

  var timerInterval = setInterval(function() { 
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || quizQuestions.length === questionIndex+1) {
      clearInterval(timerInterval);
      // showFinalScore();
    }
    
    },1000);
 //crear header y choices 
    //for (var i = 0; i > quizQuestions.length; i++){
      // quizQuestionHeader.textContent = quizQuestions[0].question;
      // choice1.textContent = quizQuestions[0].a;
      // choice2.textContent = quizQuestions[0].b;
      // choice3.textContent = quizQuestions[0].c;
      // choice4.textContent = quizQuestions[0].d;
      // choice5.textContent = quizQuestions[0].e;
    //};

//MANDAR A LLAMAR LA FUNCION QUE GENEREA LAS PREGUNTAS
    generateQuestions(questionIndex);


};

function generateQuestions(index){
  var pregunta = createElement("<button>");
  //HACER  append de la pregunta al  quizQuestionsPage div  


}



questionButton.addEventListener("click", function(event){
console.log(event.target)
//   //checkAnswer(event);

//   // if (
//   //   event.target["data-index"] == quizQuestions [questionIndex].correctAnswer
//   // ){
//   //   console.log("correct");
//   // }
})

  
