$(document).ready(function () {

    // Show / Hide Story
    $("#showStory").click(function () {
        $("#story").slideToggle();
    });

    // Show / Hide Skills
    $("#showSkills").click(function () {
        $("#skills").fadeToggle();
    });

    // Show / Hide Motivation (photos section)
    $("#showMotivation").click(function () {
        $("#motivation").slideToggle();
    });

    // Hover effect for all h2 titles
    $("h2").mouseover(function () {
        $(this).css("color", "black");
    });

    $("h2").mouseout(function () {
        $(this).css("color", "purple");
    });

    // Message of submit the form
    $("#contactForm").submit(function (event) {
        event.preventDefault();

        $("#formMessage")
            .text("Thank you! Your message has been sent.")
            .css({
                "color": "light purple",
                "margin-top": "10px",
                "font-weight": "bold"
            });

        this.reset();
    });

});

function changeMotivation() {
    document.getElementById("motivationText").innerHTML =
        "I have always wanted to be someone who helps others, and in technology, I found the perfect tool to achieve that. I’ve learned that engineering is not just about circuits or code, but a way to improve our everyday environment. Being a woman in this industry is not always easy, but that reality is exactly what motivates me to keep growing and to demonstrate the impact we can create";
}

