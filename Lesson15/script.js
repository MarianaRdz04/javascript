 $(document).ready(function(){

       
            $("#showStory").click(function(){
                $("#story").slideToggle();
            });

         
            $("#showSkills").click(function(){
                $("#skills").fadeToggle();
            });

            $("h2").mouseover(function() {
                $(this).css("color", "black");
            });
            
            $("h2").mouseout(function() {
                $(this).css("color", "purple");
            });

        });

        // JavaScript Function
        function changeMessage() {
            document.getElementById("goalMessage").innerHTML =
            "This class helped me improve my creativity and web development skills.";
        }

        $("#showMotivation").click(function () {
            $("#motivation").slideToggle();
        });