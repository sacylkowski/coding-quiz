// Have an array in objects for the questions, choices, and answers

var quizQuestions = [
    {
        question: "What HTML tag do we put our JavaScript file?",
        choices: ['<javascript>', '<js>', '<script>', '<link>'],
        answer: '<script>',
    },
    {
        question: "Where is the correct place to insert your JavaScript file?",
        choices: ['the <head> section', 'the <body> section', 'both are correct', 'neither are correct'],
        answer: 'the <body> section',
    },
    {
        question: "JavaScript has a file extension of:",
        choices: ['.js', '.java', '.javascript', '.xml'],
        answer: '.js',
    },
    {
        question: "Commonly used data types do not include:",
        choices: ['strings', 'alerts', 'booleans', 'numbers'],
        answer: 'alerts',
    },
    {
        question: "How would you write 'Hello World' in an alert box?",
        choices: ['msgBox("Hello World")', 'msgAlert("Hello World");', 'alertBox("Hello World");', 'alert("Hello world");'],
        answer: 'alert("Hello World")',
    },
    {
        question: "How do you start a FOR loop?",
        choices: ['for (i <= 3; i++)', 'for (i = 0; i <= 3; i++)', 'for i = 1 to 3', 'for (i = 0; i <= 3)'],
        answer: 'for (i = 0; i <= 3; i++)',
    },
    {
        question: "How do you round 10.68 to the largest integer that is less than or equal to itself?",
        choices: ['Math.floor(10.68)', 'Math.round(10.68)', 'Math.random(10.68)', 'round(10.68)'],
        answer: 'Math.floor(10.68',
    },
    {
        question: "What will the following return: Boolean(3 < 7) ?",
        choices: ['false', 'true', 'undefined', 'SyntaxError'],
        answer: 'true',
    },
    {
        question: "Which method runs the same code over and over, using a different value each time?",
        choices: ['forEach()', 'while()', 'for()', 'None of the above'],
        answer: 'for()'
    },
    {
        question: "Which statement cannot be used to declare a variable in JavaScript?",
        choices: ['Const', 'Var', 'Let', 'Int'],
        answer: 'Int'
    },
];
var questionIndex, shuffledQuestions
var score = 0;

// Create elements

var body = document.body;
var headerEl = document.createElement("div");
var highScoresEl = document.createElement("a");
var timerEl = document.createElement("p");
var containerEl = document.createElement("div");
var quizIntroEl = document.createElement("h1");
var introEl = document.createElement("p");
var questionsEl = document.createElement("h1");
var choice1El = document.createElement("button");
var choice2El = document.createElement("button");
var choice3El = document.createElement("button");
var choice4El = document.createElement("button");
var startBtnEl = document.createElement("button");


// Add text content to elements that need it
highScoresEl.textContent = "View high scores";
timerEl.textContent = "Time: ";
quizIntroEl.textContent = "Coding Quiz Challenge";
introEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startBtnEl.textContent = "Start Quiz";

// append the elements
body.appendChild(timerEl);
body.appendChild(highScoresEl);
body.appendChild(containerEl);
containerEl.appendChild(quizIntroEl);
containerEl.appendChild(introEl);
containerEl.appendChild(startBtnEl);
containerEl.appendChild(questionsEl);
containerEl.appendChild(choice1El);
containerEl.appendChild(choice2El);
containerEl.appendChild(choice3El);
containerEl.appendChild(choice4El);

// set attributes for elements
highScoresEl.setAttribute("style", "float:left; font-size:20px; padding-left:20px; padding-top:10px;");
timerEl.setAttribute("style", "float:right; font-size:20px; padding-right:20px;");
containerEl.setAttribute("style", "margin:auto; display:block; width:100%; max-width:60%; padding-top:150px;");
quizIntroEl.setAttribute("style", "font-weight:bold; font-size:30px; text-align:center;");
introEl.setAttribute("style", "text-align:center; font-size:22px;");
startBtnEl.setAttribute("style", "border: none; border-radius:10px; background-color:purple; font-size:15px; color:white; padding:10px 25px; margin:10px auto; display:block;");
questionsEl.setAttribute("style", "font-weight:bold; font-size:32px;");
choice1El.setAttribute("class", "hide answer-button");
choice2El.setAttribute("class", "hide answer-button");
choice3El.setAttribute("class", "hide answer-button");
choice4El.setAttribute("class", "hide answer-button");


// Create function for quiz
function startQuiz() {
    // start button and intro to quiz hides
    startBtnEl.classList.add("hide");
    quizIntroEl.classList.add("hide");
    introEl.classList.add("hide");
    // timer starts
    startTimer();
    // question and choices pop up
    shuffledQuestions = quizQuestions.sort(() => Math.random() - .5)
    questionIndex = 0
    questionsEl.classList.remove("hide");
    choice1El.classList.remove("hide");
    choice2El.classList.remove("hide");
    choice3El.classList.remove("hide");
    choice4El.classList.remove("hide");
    loadQuestions()
}

// Event listener for start button

startBtnEl.addEventListener("click", startQuiz)


function loadQuestions() {
    showQuestion(shuffledQuestions[questionIndex])
    // for (var i = 0; i < 3; i++) { 
    // choices.innerText = questions[questionIndex].choices[i]
    // }
}
// function to display the questions

function showQuestion(question) {
    questionsEl.innerText = question.question
    choice1El.innerText = question.choices[0]
    choice2El.innerText = question.choices[1]
    choice3El.innerText = question.choices[2]
    choice4El.innerText = question.choices[3]
   if (questionIndex > question.length -1) {
       addHighScore()
   } else {
       loadQuestions()
   }
}

// Function that runs the countdown
function startTimer() {
    var timeLeft = 60;
    var timer = setInterval(function () {
        if (timeLeft >= 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "";
            clearInterval(timer);
            addHighScore();
        }
    }, 1000);
}

// Check if question that is picked is correct, else the answer is incorrect and time gets subtracted from clock (Decrement)
function checkAnswer() { 
if (quizQuestions[questionIndex].answer) {
     score+10;
 } else {
 timeLeft-10;
 } 
 loadQuestions();
};

answerBtnEl.addEventListener("click", checkAnswer)

/*
// When all questions have gone through or time is out - the game is over
var initialBoxEl = document.createElement("input");
var submitBtnEl = document.createElement("button");
var endGameEl = document.createElement("h1");
var inputInstEl = document.createElement("p");

submitBtnEl.textContent = "Submit";
endGameEl.textContent = "The quiz is over!"
inputInstEl.textContent = "Your final score was: " + score + ". Please enter initials below"; 

containerEl.appendChild(inputInstEl);
containerEl.appendChild(initialBoxEl);
containerEl.appendChild(submitBtnEl);

initialBoxEl.setAttribute("type", "placeholder:'Type initials here'; width:80%; padding:10px 30px;");
submitBtnEl.setAttribute("style", "hide answer-button");
endGameEl.setAttribute("style", "font-weight:bold; font-size:30px; text-align:center;");
inputInstEl.setAttribute("style", "text-align:center; font-size:22px;");

// When game is over, then I can save initials and the score into local storage

function addHighScore() {
submitBtnEl.classList.remove("hide");
}

*/