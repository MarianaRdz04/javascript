 $(document).ready(function(){

            // jQuery Effect #1
            $("#showStory").click(function(){
                $("#story").slideToggle();
            });

            // jQuery Effect #2
            $("#showSkills").click(function(){
                $("#skills").fadeToggle();
            });

        });

        // Custom JavaScript Function
        function changeMessage() {
            document.getElementById("goalMessage").innerHTML =
            "This class helped me improve my creativity and web development skills.";
        }