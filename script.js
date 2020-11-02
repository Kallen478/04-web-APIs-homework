// quiz questions
var questionList = [
    {
        "question": "Name the singer of Rage Against the Machine:",
        "a": "Frank Sinatra",
        "b": "Flavor Flav",
        "c": "Zack de la Rocha",
        "d": "Kurt Cobain",
        "correct": "c",
        "userAnswer": null
    },
    {
        "question": "The title of Pearl Jam's debut album is:",
        "a": "Core",
        "b": "Too Legit to Quit",
        "c": "Dookie",
        "d": "Ten",
        "correct": "d",
        "userAnswer": null
    },
    {
        "question": "Which band did Dave Grohl start after Nirvana?",
        "a": "Foo Fighters",
        "b": "Limp Bizkit",
        "c": "Enya",
        "d": "Wu-Tang Clan",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "What is the the title of Radiohead's first hit song?",
        "a": "Sabotage",
        "b": "Creep",
        "c": "Cannonball",
        "d": "Buddy Holly",
        "correct": "b",
        "userAnswer": null
    },
    {
        "question": "The artwork for the Smashing Pumpkins record 'Siamese Dream' featured two little girls dressed up as:",
        "a": "Monsters",
        "b": "Fruit",
        "c": "Angels",
        "d": "Dogs",
        "correct": "c",
        "userAnswer": null
    }
];

// question variables
var questionTag = document.body.querySelector("#question");
var answerTagA = document.body.querySelector("#answer-a");
var answerTagB = document.body.querySelector("#answer-b");
var answerTagC = document.body.querySelector("#answer-c");
var answerTagD = document.body.querySelector("#answer-d");

var buttonA = document.body.querySelector("#button-a");
var buttonB = document.body.querySelector("#button-b");
var buttonC = document.body.querySelector("#button-c");
var buttonD = document.body.querySelector("#button-d");

var result = document.body.querySelector("#result");

var pointsDisplay = document.querySelector("#points");
var points = 0;

var questionIndex = 0; // change this index to change questions

document.getElementById("quiz-questions").style.display = "none";
document.getElementById("game-over").style.display = "none";

// logic for answering quiz questions
function buttonHandler(event) {
    var button = event.target;
    var userAnswer = button.getAttribute("data-answer");
    var questionId = parseInt(button.getAttribute("data-question"));
    console.log(button);
    console.log(userAnswer);
    console.log(questionId);
    questionList[questionId]["userAnswer"] = userAnswer;

    if (questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]) {
        result.textContent = "You got it right. Awesome!";
        setTimeout(function () {
            questionIndex++;
            initializeQuestion();
            result.textContent = "";
        }, 3000);
        points = points + 20;
        pointsDisplay.textContent = points + "%";
        scoreDisplay.textContent = points + "%";
    }
    else {
        result.textContent = "You got it wrong. Lame!";
        subtractTime();
        setTimeout(function () {
            questionIndex++;
            initializeQuestion();
            result.textContent = "";
        }, 3000);
        pointsDisplay.textContent = points + "%";
        scoreDisplay.textContent = points + "%";
    }
    if (questionIndex === questionList.length - 1) {
        document.getElementById("game-over").style.display = "block";
        document.getElementById("quiz-questions").style.display = "none";
        minutesDisplay.textContent = "0";
        secondsDisplay.textContent = "00";
        clearInterval(interval);
    }
}

// click event listeners for answer choices
buttonA.addEventListener("click", buttonHandler);
buttonB.addEventListener("click", buttonHandler);
buttonC.addEventListener("click", buttonHandler);
buttonD.addEventListener("click", buttonHandler);

// initializes the questions
function initializeQuestion() {
    console.log(questionList[questionIndex]);
    var wholeObj = questionList[questionIndex];
    var question = wholeObj.question;
    console.log(question);
    questionTag.textContent = question;
    questionTag.setAttribute("data-question", questionIndex);

    // how the text gets changed
    answerTagA.textContent = wholeObj.a;
    answerTagB.textContent = wholeObj.b;
    answerTagC.textContent = wholeObj.c;
    answerTagD.textContent = wholeObj.d;
    buttonA.setAttribute("data-question", questionIndex);
    buttonB.setAttribute("data-question", questionIndex);
    buttonC.setAttribute("data-question", questionIndex);
    buttonD.setAttribute("data-question", questionIndex);
}
initializeQuestion();

// timer variables
var startButton = document.querySelector("#start");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

// function runs once a second
function runClock() {
    secondsElapsed++;
    console.log(secondsElapsed);
    minutesDisplay.textContent = Math.floor((totalSeconds - secondsElapsed) / 60);
    secondsDisplay.textContent = (totalSeconds - secondsElapsed) % 60;

    if (secondsElapsed >= totalSeconds) {
        clearInterval(interval);
        minutesDisplay.textContent = "0";
        secondsDisplay.textContent = "00";
        document.getElementById("game-over").style.display = "block";
        document.getElementById("quiz-questions").style.display = "none";
    }
}

// starts the timer
function startTimer() {
    // total minutes to take the quiz
    var minutes = 3;
    // set the timeusing totalSeconds
    totalSeconds = minutes * 60;
    // initialize seconds on the play button
    secondsElapsed = 0;

    if (typeof interval !== "undefined") {
        // if we have an interval we want to clear it
        clearInterval(interval);
    }
    // keep track of interval
    interval = setInterval(runClock, 1000);

    document.getElementById("instructions").style.display = "none";
    document.getElementById("quiz-questions").style.display = "block";
    document.getElementById("game-over").style.display = "none";
}

startButton.addEventListener("click", startTimer);

// function to subtract time
function subtractTime() {
    secondsElapsed = secondsElapsed + 30;
    minutesDisplay.textContent = Math.floor((totalSeconds - secondsElapsed) / 60);
    secondsDisplay.textContent = (totalSeconds - secondsElapsed) % 60;
}

// game over variables
var submitButton = document.querySelector("#submit-button");
var valMessage = document.querySelector("#val-message");
var scoreDisplay = document.querySelector("#score");

// validation for entering initials
function displayMessage(type, message) {
    valMessage.textContent = message;
    valMessage.setAttribute("class", type);
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    var initials = document.querySelector("#initials").value;

    if (initials === "") {
        displayMessage("error", "You'd be a lot cooler if you entered your initials.");
    }
    else {
        displayMessage("success", "Game info saved.");
    }
});



