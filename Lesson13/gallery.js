$(document).ready(function() {

    //  hover effect 
    $("#thumbs img").hover(
        function() {
            $(this).css({
                "border": "2px solid darkgreen",
                "box-shadow": "0 0 10px darkgreen"
            });
        },
        function() {
            $(this).css({
                "border": "",
                "box-shadow": ""
            });
        }
    );

    // action click changes
    $("#thumbs img").click(function() {
        let newSrc = $(this).attr("src");
        let newAlt = $(this).attr("alt");

        $("#lgPic").attr("src", newSrc);
        $("#lgTitle").text(newAlt);
    });

    // click action and opens image in new tab
    $("#lgPic").click(function() {
        let imgSrc = $(this).attr("src");
        window.open(imgSrc);
    });

});