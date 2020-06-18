var quizContainer = document.getElementById('quiz');
var preguntas = document.querySelector(".preg");

var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");
var anstext = document.querySelector(".typeofanswer");
var quizQuestionpage = document.querySelector("#quizQuestionsPage");
var input = document.querySelector("#initialInput");
var initialBtn = document.querySelector("#initialButton")
var quizQuestionHeader = document.getElementById("quizQuestionHeader");
var choice1 = document.getElementById("a");
var choice2 = document.getElementById("b");
var choice3 = document.getElementById("c");
var choice4 = document.getElementById("d");
var choice5 = document.getElementById("e");
var answerResponse = document.getElementById("answerResponse");
var questionIndex = 0;
var finalScoreIs = document.getElementById("finalScoreIs");
var questionButton = document.querySelectorAll("button.questions");
var list = document.querySelector("#highScoreList");

console.log(questionButton)

quizQuestionpage.style.display= "none";
var quizChallengePage = document.querySelector(".quizChallengePage");
var finalScorePage = document.querySelector(".finalScorePage");

var quizQuestions = [
  {
    question: "The 2014 film Maleficent is based on the evil godmother from which Disney princess film?",
      a: "Alice in Wonderland",
      b: "Sleeping Beauty", 
      c: "Cinderella",
      d: "Aladdin",
      e: "Tarzan",
    correctAnswer: "b"
  },
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
  {
    question:  "What does Hakuna Matata mean?",
      a: "I came, I saw, I conquered:",
      b: "Just keep swimming",
      c: "Everything is satisfactua",
      d: "No worries",
      e: "Dance like crazy",
    
    correctAnswer: "d"
  },
  {
    question:  "What does King Louie want Mowgli to do??",
      a: "Leave the jungle",
      b: "Become his slave",
      c: "Learn to swim",
      d: "Tell him how to make fire",
      e: "Merry his Daughter",
    
    correctAnswer: "a"
  },
  {
    question:  "What kind of animal is Bambi?",
      a: "Deer",
      b: "Rabbit ",
      c: "Owl",
      d: "Cat",
      e: "Horse",
    
    correctAnswer: "a"
  },
  {
    question:  "Who does Captain Hook fear above all else?",
      a: "Peter Pan",
      b: "Thinker bell",
      c: "Michael Eisner ",
      d: "Cocodrile",
      e: "Himself",
    
    correctAnswer: "d"
  },
  
];

finalScorePage.style.display = "none";   // Hide Final Core Page 
submitButton.addEventListener("click", startQuiz);  // Event Listener when hit start quiz 

// Define the variable to store the selector
var x = document.querySelector("#submitButton");
// Add an event listener to the variable an determine a set of instructions
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
      
    //};
   if(questionIndex < quizQuestions.length){
    generateQuestions(questionIndex)
   }
   else{
    generateQuestions.text("Game over")
   }
   
};

function generateQuestions(index){
  quizQuestionHeader.textContent = quizQuestions[index].question;
  choice1.textContent = quizQuestions[index].a;
  choice2.textContent = quizQuestions[index].b;
  choice3.textContent = quizQuestions[index].c;
  choice4.textContent = quizQuestions[index].d;
  choice5.textContent = quizQuestions[index].e;
} 

initialBtn.addEventListener("click", function(event){
  //Use Prevent Default otherwise it will not wait to save the values
  event.preventDefault();
  // Get highscores previously saved, if there are no item called "highscores"  
  // the variable highscores will be equal to an empty array
  var highscores =
  JSON.parse(window.localStorage.getItem("highscores")) || [];

  //get input value
  var playerName = input.value;

  //Check what is the variable highscores
  console.log('HIGHSCORES', highscores);

  //create a new highscore
  var newScore = {
    playerName: playerName,
    score: secondsLeft
  }

  //push the new score to the highsocres array 
  highscores.push(newScore);

  //save the array to the localStorage
  localStorage.setItem("highscores", JSON.stringify(highscores));

  //redirect the user to the highscores view instead of using and <a></a> tag 
  window.location.href = "highscore.html";

 })
questionButton.forEach((button) => {


      button.addEventListener("click", function(event) {
       console.log(event.target.id)

           if(questionIndex >= quizQuestions.length){
            quizQuestionpage.style.display= "none";
            anstext.textContent= "Game over"
            console.log("Game over")
            finalScorePage.style.display = "block"; 
           
           }
           else if(event.target.id === quizQuestions[questionIndex].correctAnswer&&questionIndex <= quizQuestions.length){
            anstext.textContent= "CORRECT!!"
           console.log("CORRECT!!")
           console.log(questionIndex)
           questionIndex = questionIndex +  1;
           
           console.log(questionIndex)
           generateQuestions(questionIndex)
          }
          else{
            anstext.textContent="Incorrect"
            secondsLeft = secondsLeft - 10;
            console.log("incorrect")
            questionIndex=questionIndex +1
            generateQuestions(questionIndex)
            
         }
      })


})


