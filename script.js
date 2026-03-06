// script.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function (e) {
        let valid = true;
        this.querySelectorAll('input[required]').forEach(input => {
            if (!input.value) {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        if (!valid) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
});

// Button interactions
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        alert('Button clicked: ' + this.innerText);
    });
});

// Dynamic navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});