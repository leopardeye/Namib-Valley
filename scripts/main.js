document.addEventListener('DOMContentLoaded', function() {
  updateCopyrightYear();
  initMobileNavigation();
  initHeaderScroll();
  initLightbox();
});

function updateCopyrightYear() {
  var copyRightText = document.getElementById('copy-right-text');
  var currentYear = String(new Date().getFullYear());

  if (!copyRightText) {
    return;
  }

  copyRightText.textContent = copyRightText.textContent.replace(/\b\d{4}\b/, currentYear);
}

function initMobileNavigation() {
  var hamburger = document.querySelector('.hamburger');
  var ham1 = document.getElementById('ham-1');
  var ham2 = document.getElementById('ham-2');
  var ham3 = document.getElementById('ham-3');
  var mobileNav = document.querySelector('.mobile-nav');

  if (!hamburger || !ham1 || !ham2 || !ham3 || !mobileNav) {
    return;
  }

  function closeMobileNav() {
    ham2.style.display = 'block';
    ham1.style.transform = 'rotate(0deg)';
    ham1.style.position = 'static';
    ham3.style.transform = 'rotate(0deg)';
    ham3.style.position = 'static';
    mobileNav.style.right = '-100%';
  }

  function openMobileNav() {
    ham2.style.display = 'none';
    ham1.style.transform = 'rotate(45deg)';
    ham1.style.position = 'absolute';
    ham3.style.transform = 'rotate(-45deg)';
    ham3.style.position = 'absolute';
    mobileNav.style.right = '0';
  }

  hamburger.addEventListener('click', function() {
    if (ham2.style.display === 'none') {
      closeMobileNav();
      return;
    }

    openMobileNav();
  });

  document.addEventListener('click', function(event) {
    if (event.target.closest('.hamburger') || event.target.closest('.mobile-nav')) {
      return;
    }

    closeMobileNav();
  });
}

function initHeaderScroll() {
  var header = document.querySelector('header');
  var lastScrollTop = 0;

  if (!header) {
    return;
  }

  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.style.top = '-150px';
    } else {
      header.style.top = '0';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

function initLightbox() {
  var galleryItems = document.querySelectorAll('.g-img');
  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lightbox-image');
  var closeButton = document.getElementById('close-lightbox');

  if (!galleryItems.length || !lightbox || !lightboxImage || !closeButton) {
    return;
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
  }

  galleryItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      var image = event.currentTarget.getAttribute('data-image');

      if (!image) {
        return;
      }

      lightboxImage.src = image;
      lightbox.classList.remove('hidden');
    });
  });

  closeButton.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

