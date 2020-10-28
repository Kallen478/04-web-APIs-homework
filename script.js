// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

var questionList = [
    {
        "question": "Name the bass player of the Red Hot Chili Peppers:",
        "a": "Gnat",
        "b": "Fly",
        "c": "Bob",
        "d": "Flea",
        "correct": "d",
        "userAnswer": null
    },
    {
        "question": "How many albums did Rage Against the Machine release before breaking up?",
        "a": "7",
        "b": "10",
        "c": "4",
        "d": "1",
        "correct": "c",
        "userAnswer": null
    },
    {
        "question": "The title of Pearl Jam's debut album is:",
        "a": "Vs.",
        "b": "Core",
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

var questionTag = document.body.querySelector("#question");
var answerTagA = document.body.querySelector("#answer-a");
var answerTagB = document.body.querySelector("#answer-b");
var answerTagC = document.body.querySelector("#answer-c");
var answerTagD = document.body.querySelector("#answer-d");

var buttonA = document.body.querySelector("#button-a");
var buttonB = document.body.querySelector("#button-b");
var buttonC = document.body.querySelector("#button-c");
var buttonD = document.body.querySelector("#button-d");

var score = document.body.querySelector("#score");

var questionIndex = 0; // change this index to change questions

function buttonHandler(event){
        var button = event.target;
        var userAnswer = button.getAttribute("data-answer");
        var questionId = parseInt(button.getAttribute("data-question"));
        console.log(button);
        console.log(userAnswer);
        console.log(questionId);
        questionList[questionId]["userAnswer"] = userAnswer;

        if(questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]) {
            score.textContent = "You got it right";
            setTimeout(function(){
                questionIndex++;
                initializeQuestion();
                score.textContent = "";
                score++;
            }, 5000);
        }
        else{
            score.textContent = "You got it wrong";
            setTimeout(function(){
                questionIndex++;
                initializeQuestion();
                score.textContent = "";
            }, 5000);
        }
}

buttonA.addEventListener("click", buttonHandler);
buttonB.addEventListener("click", buttonHandler);
buttonC.addEventListener("click", buttonHandler);
buttonD.addEventListener("click", buttonHandler);

function initializeQuestion(){
    console.log(questionList[questionIndex]);
    var wholeObj = questionList[questionIndex];
    var question = wholeObj.question;
    console.log(question);
    questionTag.textContent = question;
    questionTag.setAttribute("data-question", questionIndex);

    // hw - how we change the text
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

