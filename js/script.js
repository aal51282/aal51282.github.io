// Web Development/cv/aal51282.github.io/js/script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Responsive Navigation Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Update ARIA attribute
        const expanded = menuToggle.classList.contains('active') ? 'true' : 'false';
        menuToggle.setAttribute('aria-expanded', expanded);
    });

    // Allow toggling via Enter key for accessibility
    menuToggle.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');

            // Update ARIA attribute
            const expanded = menuToggle.classList.contains('active') ? 'true' : 'false';
            menuToggle.setAttribute('aria-expanded', expanded);
        }
    });

    // Dark Mode Toggle Functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Load saved dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Change icon to sun
    } else {
        darkModeToggle.textContent = '🌙'; // Moon icon
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Update dark mode preference in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            darkModeToggle.textContent = '☀️'; // Sun icon
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            darkModeToggle.textContent = '🌙'; // Moon icon
        }
    });

    // Back-to-Top Button Functionality
    const backToTopButton = document.getElementById('back-to-top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll smoothly to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    contactForm.addEventListener('submit', function(e) {
        let valid = true;

        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(msg => {
            msg.textContent = '';
            msg.style.display = 'none';
        });

        // Validate Name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            valid = false;
            const nameError = document.getElementById('name-error');
            nameError.textContent = 'Name is required.';
            nameError.style.display = 'block';
        }

        // Validate Email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            valid = false;
            const emailError = document.getElementById('email-error');
            emailError.textContent = 'Email is required.';
            emailError.style.display = 'block';
        } else if (!emailRegex.test(email.value.trim())) {
            valid = false;
            const emailError = document.getElementById('email-error');
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
        }

        // Validate Message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            valid = false;
            const messageError = document.getElementById('message-error');
            messageError.textContent = 'Message is required.';
            messageError.style.display = 'block';
        }

        if (!valid) {
            e.preventDefault(); // Prevent form submission
        } else {
            // Display success message
            e.preventDefault(); // Prevent default submission to handle via JavaScript
            formSuccess.textContent = 'Thank you! Your message has been sent.';
            formSuccess.style.display = 'block';
            contactForm.reset();
        }
    });

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('.nav-links a');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default behavior
            e.preventDefault();

            // Get the target section's ID
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Calculate the top position considering the navbar's height
                const targetPosition = targetSection.offsetTop - navbarHeight;

                // Smooth scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});