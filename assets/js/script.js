// Create elements

var body = document.body;
var headerEl = document.createElement("div");
var highScoresEl = document.createElement("a");
var timerEl = document.createElement("div");
var containerEl = document.createElement("div");
var quizIntroEl = document.createElement("h1");
var introEl = document.createElement("p");
var questionsEl = document.createElement("h1");
var choice1El = document.createElement("button");
var choice2El = document.createElement("button");
var choice3El = document.createElement("button");
var answerBtnEl = document.createElement("button");
var startBtnEl = document.createElement("button");

// Add text content to elements that need it
highScoresEl.textContent = "View high scores"
timerEl.textContent = "Time: "
quizIntroEl.textContent = "Coding Quiz Challenge";
introEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
/* questionsEl.textContent = // insert object array
choice1El.textContent = // insert choice array
choice2El.textContent = // insert choice array
choice3El.textContent = // insert choice array
answerBtnEl.textContent = // Insert choice array */
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
containerEl.appendChild(answerBtnEl);

// set attributes for elements
highScoresEl.setAttribute("style", "float:left; font-size:20px;");
timerEl.setAttribute("style", "float:right; font-size:20px;");
containerEl.setAttribute("style", "margin:auto; display:block; width:100%; max-width:60%; padding-top:150px;");
quizIntroEl.setAttribute("style", "font-weight:bold; font-size:30px; text-align:center;");
introEl.setAttribute("style", "text-align:center; font-size:22px;");
startBtnEl.setAttribute("style", "border: none; border-radius:10px; background-color:purple; font-size:15px; color:white; padding:10px 25px; margin:10px auto; display:block;");
questionsEl.setAttribute("style", "font-weight:bold; font-size:32px;");
choice1El.setAttribute("style", "border: none; border-radius:10px; background-color:purple; font-size:15px; color:white; padding:10px 25px; margin:10px auto; display:block;");
choice2El.setAttribute("style", "border: none; border-radius:10px; background-color:purple; font-size:15px; color:white; padding:10px 25px; margin:10px auto; display:block;");
choice3El.setAttribute("style", "border: none; border-radius:10px; background-color:purple; font-size:15px; color:white; padding:10px 25px; margin:10px auto; display:block;");
answerBtnEl.setAttribute("style", "border: none; border-radius:10px; background-color:purple; font-size:15px; color:white; padding:10px 25px; margin:10px auto; display:block;");


// Create function for quiz
function startQuiz() {
startBtnEl.classList.add("hide");
quizIntroEl.classList.add("hide");
introEl.classList.add("hide");
startTimer();

}

// Event listener for start button

startBtnEl.addEventListener("click", startQuiz)

// Once button is clicked, function runs the quiz and setinterval
function startTimer() {
    timerEl.textContent = timerEl + "60";
}

// Have an object of question array, choices array, answer array

// Use a for loop to go through the questions

// When correct answer is picked, next question pops up

// Else the answer is incorrect and time gets subtracted from clock (Decrement)

// When all questions have gone through or time is out - the game is over

// When game is over, then I can save initials and the score into local storage
