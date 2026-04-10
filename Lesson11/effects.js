$(document).ready(function(){

    // Hide the newsletter form
    $("#newsSignup").hide();

    // signup event
    $("#signuplink").click(function(e){
        e.preventDefault(); // cancel 

        $("#newsSignup").slideToggle();

        if($("#openclose").text() === "+"){
            $("#openclose").text("-");
        } else {
            $("#openclose").text("+");
        }
    });


    //slogan hover
    $("#slogan").hover(

        // mouseover
        function(){
            $("#slogan").fadeOut("normal","linear", function(){
                $(this).text("Hand Picked Just for You")
                       .fadeIn("slow","swing");
            });
        },

        // mouseout
        function(){
            $("#slogan").fadeOut("fast","swing", function(){
                $(this).text("The Power of Flowers")
                       .fadeIn("slow","linear");
            });
        }
    );

     // rose animation
    $("#rose").animate({
        right: "100px",
        opacity: 1
    }, 2000, "swing");

    // form submission
    $("#newsSignup").submit(function(e){
        alert("Thank you for registering");

        $("#newsSignup").hide();

        $("#signuplink").fadeTo("slow",0.3);

        e.preventDefault();
    });

});