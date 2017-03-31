
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})


  ///login

  function validate()
{
  var u=document.getElementById("text1").value;
  var v=document.getElementById("text2").value;
  var user=["unni","goutham","kottackal","crissy"];
  var pas=["123","001","kot","crispi"];
    if( (u == user[0] && v == pas[0] )||
      (u == user[1] && v == pas[1] )||
      (u == user[2]&& v == pas[2] ) || (u == user[3]&& v == pas[3] ))
    {
        alert( "validation succeeded" );
        location.href="business.html";
    }
    else
    {
        alert( "validation failed" );
        location.href="sticker.html";
    }
}

