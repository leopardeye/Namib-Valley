if (window.matchMedia("(max-width: 767px)").matches) {
    // Your script here

    let hamburger = document.querySelector('.hamburger');
    let mobileNav = document.querySelector('.mobile-nav');
    let lastScrollPosition = window.pageYOffset;

    hamburger.addEventListener('click', function() {
        let divs = hamburger.querySelectorAll('div');
        if (divs.length === 3) {
            divs[0].style.transform = 'translateY(0.25rem) rotate(45deg)';
            divs[1].style.transform = 'translateY(-0.25rem) rotate(-45deg)';
            hamburger.removeChild(divs[2]);
            mobileNav.style.right = '0';
        } else {
            divs[0].style.transform = 'translateY(0) rotate(0deg)';
            divs[1].style.transform = 'translateY(0) rotate(0deg)';
            let newDiv = document.createElement('div');
            newDiv.id = 'ham-3';
            newDiv.style.width = '1.5rem';
            newDiv.style.height = '.2rem';
            newDiv.style.margin = '.15rem';
            newDiv.style.borderRadius = '10%';
            newDiv.style.backgroundColor = 'hsl(0, 0%, 98%)';
            hamburger.appendChild(newDiv);
            mobileNav.style.right = '-200px';
        }
    });

    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
            let divs = hamburger.querySelectorAll('div');
            if (divs.length === 2) {
                divs[0].style.transform = 'translateY(0) rotate(0deg)';
                divs[1].style.transform = 'translateY(0) rotate(0deg)';
                let newDiv = document.createElement('div');
                newDiv.id = 'ham-3';
                newDiv.style.width = '1.5rem';
                newDiv.style.height = '.2rem';
                newDiv.style.margin = '.15rem';
                newDiv.style.borderRadius = '10%';
                newDiv.style.backgroundColor = 'hsl(0, 0%, 98%)';
                hamburger.appendChild(newDiv);
                mobileNav.style.right = '-200px';
            }
        }
    });

    window.addEventListener('scroll', function() {
        if (window.matchMedia("(max-width: 767px)").matches) {
            let currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition > lastScrollPosition) {
                // Scrolling down, hide the hamburger
                hamburger.style.display = 'none';
            } else {
                // Scrolling up, show the hamburger
                hamburger.style.display = 'flex';
            }
            lastScrollPosition = currentScrollPosition;
        }
    });
}
