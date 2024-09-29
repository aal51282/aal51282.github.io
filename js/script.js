// Web Development/cv/aal51282.github.io/js/script.js

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('#')[1] || this.getAttribute('href');
        const targetSection = document.getElementById(targetId) || document.querySelector(this.getAttribute('href'));

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save user preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// Form Validation
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;
    let errorMessage = '';

    if (name === '') {
        valid = false;
        errorMessage += 'Name is required.\n';
    }

    if (email === '') {
        valid = false;
        errorMessage += 'Email is required.\n';
    } else if (!validateEmail(email)) {
        valid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    if (message === '') {
        valid = false;
        errorMessage += 'Message is required.\n';
    }

    if (!valid) {
        e.preventDefault();
        alert(errorMessage);
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}