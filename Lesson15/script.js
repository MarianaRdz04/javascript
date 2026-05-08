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

});


function changeMessage() {
    document.getElementById("Message").innerHTML =
        "This class helped me improve my creativity, problem-solving, and web development skills. I feel more confident building interactive websites.";
}