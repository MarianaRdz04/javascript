$(document).ready(function () {

  // cursor in the name field
  $("#name").focus();

  // validate name field
  $("#name").blur(function () {
    if ($("#name").val() == "") {
      $("#nameErr").text("Name is required.");
    } else {
      $("#nameErr").text("");
    }
  });

  // validate email field
  $("#email").blur(function () {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ($("#email").val() == "") {
      $("#emailErr").text("Email is required.");
    } else if (!emailRegex.test($("#email").val())) {
      $("#emailErr").text("Please enter a valid email address.");
    } else {
      $("#emailErr").text("");
    }
  });

  // validte confirm email field
  $("#email2").blur(function () {
    if ($("#email2").val() == "") {
      $("#email2Err").text("Please confirm your email.");
    } else if ($("#email2").val() != $("#email").val()) {
      $("#email2Err").text("Emails do not match.");
    } else {
      $("#email2Err").text("");
    }
  });

  // validate billing address field
  $("#address").blur(function () {
    if ($("#address").val() == "") {
      $("#addressErr").text("Billing address is required.");
    } else {
      $("#addressErr").text("");
    }
  });

  // validate the city field
  $("#city").blur(function () {
    if ($("#city").val() == "") {
      $("#cityErr").text("City is required.");
    } else {
      $("#cityErr").text("");
    }
  });

  // validate billing Zip code field
  $("#zip").blur(function () {
    if ($("#zip").val() == "") {
      $("#zipErr").text("Zip code is required.");
    } else if (isNaN($("#zip").val()) || $("#zip").val().length != 5) {
      $("#zipErr").text("Zip code must be 5 numbers.");
    } else {
      $("#zipErr").text("");
    }
  });

  // validate shipping address field
  $("#shipaddr").blur(function () {
    if ($("#shipaddr").val() == "") {
      $("#shipaddrErr").text("Shipping address is required.");
    } else {
      $("#shipaddrErr").text("");
    }
  });

  // validate shipping city field
  $("#shipcity").blur(function () {
    if ($("#shipcity").val() == "") {
      $("#shipcityErr").text("Shipping city is required.");
    } else {
      $("#shipcityErr").text("");
    }
  });

  // validate shipping zip code field
  $("#shipzip").blur(function () {
    if ($("#shipzip").val() == "") {
      $("#shipzipErr").text("Shipping zip code is required.");
    } else if (isNaN($("#shipzip").val()) || $("#shipzip").val().length != 5) {
      $("#shipzipErr").text("Shipping zip code must be 5 numbers.");
    } else {
      $("#shipzipErr").text("");
    }
  });


  
  // This copy the address -> runs when the checkbox is checked/unchecked
 
  $("#copy").change(function () {
    if ($("#copy").is(":checked")) {
      $("#shipaddr").val($("#address").val());
      $("#shipcity").val($("#city").val());
      $("#shipzip").val($("#zip").val());
      $("#shipstate").val($("#state").val());
    }
  });

  // Order totals -> runs when user leaves a quantity field
  $(".qty").blur(function () {

    var orderTotal = 0;

    // Mums 
    var qty1 = $("#1").val();
    if (isNaN(qty1) || qty1 == "") {
      qty1 = 0;
      $("#1").val(0);
    }
    var price1 = parseFloat($("#price1").text());
    var total1 = price1 * qty1;
    $("#total1").text("$" + total1.toFixed(2));
    orderTotal = orderTotal + total1;

    // Pansies 
    var qty2 = $("#2").val();
    if (isNaN(qty2) || qty2 == "") {
      qty2 = 0;
      $("#2").val(0);
    }
    var price2 = parseFloat($("#price2").text());
    var total2 = price2 * qty2;
    $("#total2").text("$" + total2.toFixed(2));
    orderTotal = orderTotal + total2;

    // Ornamental Kale 
    var qty3 = $("#3").val();
    if (isNaN(qty3) || qty3 == "") {
      qty3 = 0;
      $("#3").val(0);
    }
    var price3 = parseFloat($("#price3").text());
    var total3 = price3 * qty3;
    $("#total3").text("$" + total3.toFixed(2));
    orderTotal = orderTotal + total3;

    // shows the subtotal
    $("#subt").text("$" + orderTotal.toFixed(2));

    // Calculate Tax (only for Texas)
    var shipState = $("#shipstate").val();
    var tax = 0;
    if (shipState == "TX") {
      tax = orderTotal * 0.08;
    }
    $("#tax").text("$" + tax.toFixed(2));
    orderTotal = orderTotal + tax;

    // calculate the shipping cost based on state
    var shipping = 0;
    if (shipState == "TX") {
      shipping = 5.00;
    } else if (shipState == "CA" || shipState == "NY") {
      shipping = 20.00;
    } else {
      shipping = 10.00;
    }
    $("#ship").text("$" + shipping.toFixed(2));
    orderTotal = orderTotal + shipping;

    // Show the Grand Total
    $("#gTotal").text("$" + orderTotal.toFixed(2));

  });


  // form submit -> re-validate everything before submitting
  
  $("#order").submit(function (e) {

    var isValid = true;

    if ($("#name").val() == "") {
      $("#nameErr").text("Name is required.");
      isValid = false;
    } else {
      $("#nameErr").text("");
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ($("#email").val() == "") {
      $("#emailErr").text("Email is required.");
      isValid = false;
    } else if (!emailRegex.test($("#email").val())) {
      $("#emailErr").text("Please enter a valid email address.");
      isValid = false;
    } else {
      $("#emailErr").text("");
    }

    if ($("#email2").val() == "") {
      $("#email2Err").text("Please confirm your email.");
      isValid = false;
    } else if ($("#email2").val() != $("#email").val()) {
      $("#email2Err").text("Emails do not match.");
      isValid = false;
    } else {
      $("#email2Err").text("");
    }

    if ($("#address").val() == "") {
      $("#addressErr").text("Billing address is required.");
      isValid = false;
    } else {
      $("#addressErr").text("");
    }

    if ($("#city").val() == "") {
      $("#cityErr").text("City is required.");
      isValid = false;
    } else {
      $("#cityErr").text("");
    }

    if ($("#zip").val() == "") {
      $("#zipErr").text("Zip code is required.");
      isValid = false;
    } else if (isNaN($("#zip").val()) || $("#zip").val().length != 5) {
      $("#zipErr").text("Zip code must be 5 numbers.");
      isValid = false;
    } else {
      $("#zipErr").text("");
    }

    if ($("#shipaddr").val() == "") {
      $("#shipaddrErr").text("Shipping address is required.");
      isValid = false;
    } else {
      $("#shipaddrErr").text("");
    }

    if ($("#shipcity").val() == "") {
      $("#shipcityErr").text("Shipping city is required.");
      isValid = false;
    } else {
      $("#shipcityErr").text("");
    }

    if ($("#shipzip").val() == "") {
      $("#shipzipErr").text("Shipping zip code is required.");
      isValid = false;
    } else if (isNaN($("#shipzip").val()) || $("#shipzip").val().length != 5) {
      $("#shipzipErr").text("Shipping zip code must be 5 numbers.");
      isValid = false;
    } else {
      $("#shipzipErr").text("");
    }

    if (isValid == false) {
      e.preventDefault();
      $("#orderErr").text("Please fix the errors above before submitting.");
    } else {
      $("#orderErr").text("");
    }

  });

}); 