 $(document).ready(function(){

       
            $("#showStory").click(function(){
                $("#story").slideToggle();
            });

         
            $("#showSkills").click(function(){
                $("#skills").fadeToggle();
            });

            $("h2").mouseover(function() {
                $(this).css("color", "red");
            });
            
            $("h2").mouseout(function() {
                $(this).css("color", "darkgreen");
            });

        });

        // JavaScript Function
        function changeMessage() {
            document.getElementById("goalMessage").innerHTML =
            "This class helped me improve my creativity and web development skills.";
        }