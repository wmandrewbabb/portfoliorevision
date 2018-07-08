$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.navbar').addClass('shrink');
      $('.masthead-brand').css("visibility", "visible")
    } else {
      $('.navbar').removeClass('shrink');
      $('.masthead-brand').css("visibility", "hidden")
    }
  });

  

  // Scroll to specific values
// scrollTo is the same
// window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth' 
//   });
  
  
//   // Scroll to a certain element
//   document.querySelector('#aboutrow').scrollIntoView({ 
//     behavior: 'smooth' 
//   });

//   document.querySelector('#portfoliorow').scrollIntoView({ 
//     behavior: 'smooth' 
//   });

//   document.querySelector('#contactrow').scrollIntoView({ 
//     behavior: 'smooth' 
//   });
// Select all links with hashes

// document.querySelector('#topofpage').scrollIntoView({ behavior: 'smooth' });


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });