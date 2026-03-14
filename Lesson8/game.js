// Question counter
var count = 0;

// Array with questions
var questions = [
    ["What language is used to style web pages?", 1, "HTML", "CSS", "Python"],
    ["In a website browser address bar, what does “www” stand for? ", 0, "World Wide Web", "Word Web World", "Worldwild Web Wide"],
    ["What was the most popular app in 2010?", 2, "Twitter", "Facebook", "Tumblr"]
];

// Load the Play Game button when page starts
document.getElementById("prompt").innerHTML =
"<button onclick='playGame()'>Play Game</button>";

function playGame() {

    //Questions
    var questionArray = questions[count];

    var questionText = questionArray.shift();

    var correctIndex = questionArray.shift();

    document.getElementById("question").innerHTML = questionText;

    // Build answers list
    var answerHTML = "";

    for (var i = 0; i < questionArray.length; i++) {
        answerHTML += "<li><a href='#' onclick='checkAnswer(" + i + "," + correctIndex + ")'>" 
        + questionArray[i] + "</a></li>";
    }

    document.getElementById("answers").innerHTML = answerHTML;

    document.getElementById("prompt").innerHTML =
    "Click the best answer.";
}

function checkAnswer(choice, correct) {

    if (choice == correct) {
        document.getElementById("prompt").innerHTML =
        "Correct! <br><button onclick='playGame()'>Next Question</button>";
    } else {
        document.getElementById("prompt").innerHTML =
        "Incorrect. <br><button onclick='playGame()'>Next Question</button>";
    }

    count++;

    // If there is no more questions
    if (count >= questions.length) {

        document.getElementById("prompt").innerHTML =
        "Game Over! <br><button onclick='location.reload()'>Restart Game</button>";

        document.getElementById("question").innerHTML = "";
        document.getElementById("answers").innerHTML = "";
    }
}