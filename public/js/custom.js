particlesJS('particles-js', function(){});

// FOR HEADER

document.addEventListener('DOMContentLoaded', () => {
  const $nav = document.getElementById('nav');
  const $navBurger = document.getElementById('nav-burger');
  const $navCancel = document.getElementById('nav-cancel');
 // Add a click event on each of them
  $navBurger.addEventListener('click', () => {
    $nav.classList.toggle('is-active');
    $navCancel.classList.toggle('is-active');
  });
  $navCancel.addEventListener('click', () => {
    $nav.classList.toggle('is-active');
    $navCancel.classList.toggle('is-active');
  });  

});

// FOR POPUP MODAL
// $(document).ready(function() {
//   // Show the modal after 5 seconds
//   // setTimeout(function() {
//       $('#myModal').modal('show');
//   // }, 2000);

//   // Close the modal when the close button is clicked
//   $('.modal .close').on('click', function() {
//       $('#myModal').modal('hide');
//   });
// });

$(document).ready(function() {
  // Array of modal IDs
  var modalIds = ['#myModal1', '#myModal2', '#myModal3']; // Add more modal IDs as needed
  var currentModalIndex = 0;

  // Function to show the current modal
  function showCurrentModal() {
    $(modalIds[currentModalIndex]).modal('show');
  }

  // Show the first modal when the page loads
  showCurrentModal();

  // Close the current modal and show the next one when the close button is clicked
  $('.modal .close').on('click', function() {
    $(modalIds[currentModalIndex]).modal('hide');
    currentModalIndex++;

    // Check if there are more modals to display
    if (currentModalIndex < modalIds.length) {
      showCurrentModal();
    } else {
      // All modals have been displayed
      currentModalIndex = 0; // Reset the index if you want to loop
    }
  });
});

    
    //   owl caraousel
    $(".features-carousel").owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        900: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    $(".gallery-carousel").owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
      },
    });

    $(".connections-carousel").owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items:  1,
        },
      },
    });
  





// Preloader
$(window).on("load", function () {
  $(".preloader").fadeOut();
});

  // page scrolling
  $.scrollIt({
    topOffset: -50,
  });



    // video popup
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn,.video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player-1").attr("src", videoSrc);
      }
    }
  });