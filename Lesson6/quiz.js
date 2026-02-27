

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
    document.getElementById("output").innerHTML += 
        "<h2>Your Final Score: " + totalScore + "</h2>";
}