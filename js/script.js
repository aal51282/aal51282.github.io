// Web Development/cv/aal51282.github.io/js/script.js

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').split('#')[1];

            // Check if the link is an internal link (e.g., #section)
            if (targetId) {
                e.preventDefault(); // Prevent default only for internal links
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Adjust for navbar height
                        behavior: 'smooth'
                    });
                }
            }
            // If it's an external link (like contact.html), allow default behavior
        });
    });

    // Dark Mode Toggle
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Ensure toggleButton is not null before adding event listener
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            // Save user preference in localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('dark-mode', 'enabled');
            } else {
                localStorage.setItem('dark-mode', 'disabled');
            }
        });
    } else {
        console.error("Toggle button not found");
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