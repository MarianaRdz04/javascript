
$(document).ready(function() {

    let itemCount = 0;

    let removeBtn = "<span class='del'>Remove</span>";
    // add to cart
    $(".add").on("click", function() {

        itemCount++;

        $("#empty").hide();

        let itemName = $(this).attr("name");
        let itemID = $(this).attr("id");

        let cartItem = $("<li></li>")
            .addClass("cartItem")
            .attr("name", itemID)
            .html(itemName + " " + removeBtn);

        $("#cart").append(cartItem);

        $(this).hide();
    });

    // remove of cart
    $("#cart").on("click", ".del", function() {

        let parentLi = $(this).parent();
        let itemID = parentLi.attr("name");

        parentLi.remove();

        itemCount--;

        if (itemCount === 0) {
            $("#empty").show();
        }

        $("#" + itemID).show();
    });

    //rating
    $(".rating img").on("click", function() {

        $(this).siblings().attr("src", "staroff.gif");
        $(this).attr("src", "staron.gif");
        $(this).prevAll().attr("src", "staron.gif");
    });

});