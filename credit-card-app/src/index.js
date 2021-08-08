var $;
var $t;
var m;
var y;

var ccType="VISA"

var logoContainer = document.getElementsByClassName("logo-container")
  var logo = $("<div>").attr("class","logo")
  $(logo).html(ccType)
  $(logoContainer).append(logo)

var logoContainer2 = document.getElementsByClassName("logo2-container")
  var logo2 = $("<p>").attr("class","logo2")
  $(logoContainer2).append(logo2)
   


$(".input-cart-number").on("keyup change", function () {
    $t = $(this);
    
  
    if ($t.val().length > 3) {
      ccType = creditCardType($t.val())
      $(logo).html(ccType)
      $(logo2).html(ccType.toUpperCase())
      console.log(ccType)
      $t.next().focus();
    }
 
 
  
    var card_number = "";
    $(".input-cart-number").each(function () {
      card_number += $(this).val() + " ";
      if ($(this).val().length === 4) {
        $(this).next().focus();
      }
    });
  
    $(".credit-card-box .number").html(card_number);
  });
  
  
  
  
  $("#card-holder").change( function () {
    $t = $(this);
    $(".credit-card-box .card-holder div").html($t.val());
  });
  
  
  
  $("#card-holder").on("keyup change", function () {
    $t = $(this);
    $(".credit-card-box .card-holder div").html($t.val());
  });
  
  
  
  
  $("#card-expiration-month, #card-expiration-year").change(function () {
    m = $("#card-expiration-month option").index(
      $("#card-expiration-month option:selected")
    );
    m = m < 10 ? "0" + m : m;
    y = $("#card-expiration-year").val().substr(2, 2);
    $(".card-expiration-date div").html(m + "/" + y);
  });
  
  
  
  
  $("#card-ccv")
    .on("focus", function () {
      $(".credit-card-box").addClass("hover");
    })
    .on("blur", function () {
      $(".credit-card-box").removeClass("hover");
    })
    .on("keyup change", function () {
      $(".ccv div").html($(this).val());
    });
  
  /*--------------------
    CodePen Tile Preview
    --------------------*/
    setTimeout(function(){
      $('#card-ccv').focus().delay(1000).queue(function(){
        $(this).blur().dequeue();
      });
    }, 500);


 function creditCardType(number) {
   
     console.log("card function is working ")
   
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";
      
      re = new RegExp('^9792')
      if (number.match(re) != null) return 'troy'

      return "visa"; // default type
    }


  

  


    /*
    link:https://nosir.github.io/cleave.js/
    var cleave = new Cleave('.input-element', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        // update UI ...
    }
});
    
    
///////////////////////////////////////////////////////////////////////
    */
