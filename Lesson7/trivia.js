function showDate() { //date function
    let today = new Date();
    let day = today.toLocaleDateString();
    let time = today.toLocaleTimeString();

    document.getElementById("date").innerHTML =
        "Today is " + day + ". It is " + time + ".";
}
function greeting() { //greetinh function
    let name = prompt("Enter your name please:");

    if (!name) return;

    name = name.charAt(0).toUpperCase() + name.slice(1);

    let hour = new Date().getHours();
    let message;

    switch (true) {
        case (hour < 12):
            message = "Good Morning";
            break;
        case (hour < 18):
            message = "Good Afternoon";
            break;
        default:
            message = "Good Evening";
    }

    document.getElementById("greeting").innerHTML =
        message + " " + name + "!";
}


function getEmail() {  //email check function
    let email;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    do {
        email = prompt("Enter your email:");

        if (!pattern.test(email)) {
            alert("Invalid email. Try again.");
        }

    } while (!pattern.test(email));

    let parts = email.split("@");
    let username = parts[0].toUpperCase();
    let domain = parts[1];

    document.getElementById("emailInfo").innerHTML =
        "Username: " + username + "<br>Domain: " + domain;
}


function quoteOfDay() {  //quote function
    let quotes = [
        "See the good things.",
        "The harder your work now, the easier it will be later.",
        "Trust in yourself.",
        "Believe in yourself.",
        "Small steps are still process."
    ];

    let random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerHTML =
        "Quote of the day:   " + quotes[random];
}
//Start trivia quizz
var questions = [
    "What is the color of an emerald?",
    "Which country is both an island and a continent?",
    "What is the largest planet in our solar system?",
    "What is the name of the snowman in Frozen?",
    "Which gas makes up the majority of Earth's atmosphere?"
];

var answers = [
    "green",
    "australia",
    "jupiter",
    "olaf",
    "nitrogen"
];

function startQuiz() {

    var score = 0;
    var outputText = "";

   //Loops
    for (var i = 0; i < questions.length; i++) {

        var guesses = 3; //User max attempts
        var correct = false;

       
        while (guesses > 0 && !correct) {

            var userAnswer = window.prompt(questions[i]); //Show questions

            if (userAnswer === null) {
                break; 
            }

            userAnswer = userAnswer.toLowerCase();

            
            if (userAnswer === answers[i]) {

                score += guesses;
                outputText += "<p>Question " + (i+1) + ": Correct! +" + guesses + " points</p>";
                correct = true;

            } else {

                guesses--;

                if (guesses === 0) {
                    outputText += "<p>Question " + (i+1) + ": Incorrect. Correct answer: " + answers[i] + "</p>";
                }
            }
        }
    }

    document.getElementById("output").innerHTML = outputText;
    return score;

}

function showScore() {
    var totalScore = startQuiz();
    var percent = ((totalScore / 9) * 100).toFixed(2);

    document.getElementById("output").innerHTML +=
        "<h2>Your Final Score: " + totalScore + " / 9</h2>" +
        "<p>Percentage: " + percent + "%</p>";
}

function runProgram() {
    showDate();
    greeting();
    getEmail();
    quoteOfDay();
    showScore();
}