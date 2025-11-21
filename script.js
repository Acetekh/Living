// Animation
AOS.init({
    duration: 1200,
    once: true,    
    offset: 200,
    easing: 'ease',
    delay: 40,      
    throttleDelay: 99 


});


// smooth scrolling 
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    easing: 'easeInOutCubic',
    updateURL: false,
    offset: 0,
    callback: function (anchor, toggle) { } 
});


// nav. 
document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active'); 
        }
    });
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isCurrentlyActive = header.classList.contains('active');

            // 1. Close ALL currently active headers (the "single-open" logic)
            document.querySelectorAll('.accordion-header.active').forEach(openHeader => {
                openHeader.classList.remove('active');
                openHeader.nextElementSibling.style.maxHeight = null;
            });

            // 2. Open the clicked header ONLY if it was NOT already open
            if (!isCurrentlyActive) {
                // Open the clicked one
                header.classList.add('active');
                // Use scrollHeight for smooth transition based on content size
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});

// Animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.js-fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.01
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});



// menu icon 
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});
