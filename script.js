// Smooth Scrolling

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Event Listeners

var aboutMe = document.querySelector("#about-me a");
aboutMe.addEventListener("click", function() {
  smoothScroll("#about-me", 1000);
});

var research = document.querySelector("#research a");
research.addEventListener("click", function() {
  smoothScroll("#research", 1000);
});

var publications = document.querySelector("#publications a");
publications.addEventListener("click", function() {
  smoothScroll("#publications", 1000);
});

var presentations = document.querySelector("#presentations a");
presentations.addEventListener("click", function() {
  smoothScroll("#presentations", 1000);
});

var teaching = document.querySelector("#teaching a");
teaching.addEventListener("click", function() {
  smoothScroll("#teaching", 1000);
});

var contact = document.querySelector("#contact a");
contact.addEventListener("click", function() {
  smoothScroll("#contact", 1000);
});

// Publications Accordion

var publications = document.querySelectorAll(".publication");

function togglePublication(event) {
    var publication = event.currentTarget;
    var publicationContent = publication.nextElementSibling;
    if (publicationContent.style.maxHeight) {
        publicationContent.style.maxHeight = null;
    } else {
        publicationContent.style.maxHeight = publicationContent.scrollHeight + "px";
    }
}
