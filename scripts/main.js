var ham1 = document.getElementById('ham-1');
var ham2 = document.getElementById('ham-2');
var ham3 = document.getElementById('ham-3');
var mobileNav = document.querySelector('.mobile-nav');
var header = document.querySelector('header');
var lastScrollTop = 0;

document.querySelector('.hamburger').addEventListener('click', function() {
  if (ham2.style.display !== 'none') {
    // Hide ham-2, rotate ham-1 and ham-3, and slide in .mobile-nav
    ham2.style.display = 'none';
    ham1.style.transform = 'rotate(45deg)';
    ham1.style.position = 'absolute';
    ham3.style.transform = 'rotate(-45deg)';
    ham3.style.position = 'absolute';
    mobileNav.style.right = '0'; // Slide in from the right
  } else {
    // If ham-2 is hidden, revert to original state and slide out .mobile-nav
    ham2.style.display = 'block';
    ham1.style.transform = 'rotate(0deg)';
    ham1.style.position = 'static';
    ham3.style.transform = 'rotate(0deg)';
    ham3.style.position = 'static';
    mobileNav.style.right = '-100%'; // Slide out to the right
  }
});

document.addEventListener('click', function(event) {
  if (!event.target.matches('.hamburger, .hamburger *, .mobile-nav, .mobile-nav *')) {
    // If the click is not on the hamburger, its children, .mobile-nav, or its children, revert to original state and slide out .mobile-nav
    ham2.style.display = 'block';
    ham1.style.transform = 'rotate(0deg)';
    ham1.style.position = 'static';
    ham3.style.transform = 'rotate(0deg)';
    ham3.style.position = 'static';
    mobileNav.style.right = '-100%'; // Slide out to the right
  }
});

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // If scrolling down, move header up
    header.style.top = '-150px'; // Replace '50px' with the height of your header
  } else {
    // If scrolling up, move header down
    header.style.top = '0';
  }
  lastScrollTop = scrollTop;
});