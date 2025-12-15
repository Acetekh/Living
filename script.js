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

            document.querySelectorAll('.accordion-header.active').forEach(openHeader => {
                openHeader.classList.remove('active');
                openHeader.nextElementSibling.style.maxHeight = null;
            });

            if (!isCurrentlyActive) {
                header.classList.add('active');
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



document.querySelectorAll('a[href]').forEach(link => {
    if (!link.href.includes('#')) { 
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            document.body.classList.add('fade-out'); 
            setTimeout(() => {
                window.location.href = link.href; 
            }, 500); 
        });
    }
});



 const reviewTab = document.getElementById('reviewTab');
    const reviewFormPopup = document.getElementById('reviewFormPopup');
    const body = document.body;

    reviewTab.addEventListener('click', function() {
        reviewFormPopup.classList.toggle('active');
        
        // This toggles the CSS class that includes the overflow:hidden and padding-right fix
        if (reviewFormPopup.classList.contains('active')) {
            body.classList.add('modal-open');
        } else {
            body.classList.remove('modal-open');
        }
    });

    document.addEventListener('click', function(event) {
        if (!reviewFormPopup.contains(event.target) && !reviewTab.contains(event.target)) {
            reviewFormPopup.classList.remove('active');
            
            // Removing the CSS class when closing the form
            body.classList.remove('modal-open');
        }
    });