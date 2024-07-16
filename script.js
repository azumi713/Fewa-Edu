document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

  
    // Language switcher functionality
    const langEn = document.getElementById('lang-en');
    const langJp = document.getElementById('lang-jp');

    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-en][data-jp]');
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });

        // Update placeholders for form inputs
        const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
        inputs.forEach(input => {
            input.placeholder = input.getAttribute(`data-${lang}`);
        });
    }

    langEn.addEventListener('click', () => switchLanguage('en'));
    langJp.addEventListener('click', () => switchLanguage('jp'));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



    // Form submission prevention
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const phone = form.querySelector('input[name="phone"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Form data to be sent
        const formData = new FormData(form);

        // Fetch options
        const options = {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        };

        // Perform the POST request
        fetch(form.action, options)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Show success message
                    alert("Form submitted successfully!");
                    form.reset(); // Reset form after submission
                } else {
                    // Handle error response
                    alert("There was an issue submitting the form. Please try again.");
                }
            })
            .catch(error => {
                // Handle network error
                alert("There was a network error. Please try again.");
                console.error('Error:', error);
            });
    });
const expandableElement = document.getElementById('expandableElement');
const threshold = 100; // Expand/hide after scrolling 100px

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > threshold) {
    expandableElement.classList.remove('hidden');
  } else {
    expandableElement.classList.add('hidden');
  }
});
});
