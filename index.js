let darkModeActive = false;

let w = window.innerWidth;
let txt;

if (w < 450) {
  txt = '<i class="fas fa-moon"></i>'
  $('.dark').empty();
  $('.dark').append(txt);
}

function checkDarkMode() {
  var linkColor = $(".dark").css("color");
  if (linkColor == "rgb(17, 21, 23)") {
    darkModeActive = false;
  } else if (linkColor == "rgb(17, 21, 22)") {
    darkModeActive = true;
  }
  darkMode();
}

function darkMode() {
  if (darkModeActive == false) {

    $(".dark").css("color", "rgb(17, 21, 22)");
    darkModeActive = true;
    $("body, #aboutSection, #projectSection").addClass("bodyDark");
    $("#expSection, footer").addClass("expSectionDark");
    $(".card").addClass("cardDark");
    $(".text-muted").addClass("text-muted-dark");
    if (w < 450) {
      txt = '<i class="fas fa-sun"></i>'
      $('.dark').empty();
      $('.dark').append(txt);
      console.log(darkModeActive);
    }

  } else if (darkModeActive == true) {

    $(".dark").css("color", "rgb(17, 21, 23)");
    $("body, #aboutSection, #projectSection").removeClass("bodyDark");
    $("#expSection, footer").removeClass("expSectionDark");
    $(".card").removeClass("cardDark");
    $(".text-muted").removeClass("text-muted-dark");

    if (w < 450) {
      txt = '<i class="fas fa-moon"></i>'
      $('.dark').empty();
      $('.dark').append(txt);
      console.log(darkModeActive);
    }
  }
}

let scrollToTopBtn = $("#scrollToTop");

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    scrollToTopBtn.addClass('show');
  } else {
    scrollToTopBtn.removeClass('show');
  }
});

scrollToTopBtn.on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '500');
});

$(window).on('load', function() {

  // Add smooth scrolling on all links inside the navbar
  $(".navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // console.log(this);
      // console.log(this.hash);
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      console.log($(hash).offset().top);
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if

  });

  let countExp = 0;
  let countProject = 0;

  var waypoint = new Waypoint({
    element: document.getElementsByClassName('experienceTypewriter'),
    handler: function(direction) {
      // console.log('trigger');
      countExp = 1;
      if (countExp === 1) {
        $(".experienceTypewriter").addClass('typewriter');
      }
    },
    offset: '70%'
  });

  var waypoint = new Waypoint({
    element: document.getElementsByClassName('projectTypewriter'),
    handler: function(direction) {
      // console.log('trigger');
      countProject = 1;
      if (countProject === 1) {
        $(".projectTypewriter").addClass('typewriter');
      }
    },
    offset: '70%'
  });

  let btns = $(".btn-toolbar button");
  btns.click(function() {
    var current = $(".activeBtn");
    if (current.length > 0) {
      if (current[0].className !== $(this)[0].className) {
        current[0].className = current[0].className.replace(" activeBtn", "");
      }
    }
    $(this).toggleClass("activeBtn");
  });

  $('.isoGrid').imagesLoaded(function(instance) {
    // init Isotope after all images have loaded
    $('.isoGrid').isotope({
      // options...
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      percentPosition: true,
      fitRows: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer',
        horizontalOrder: true,
      }
    });
  });

  $('.btn-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('.isoGrid').isotope({
      filter: filterValue
    });
  });

});
