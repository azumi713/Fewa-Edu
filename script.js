document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.navigation');

  navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navigation.classList.toggle('active');
  });
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
  
    // Form submission with validation and fetch
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
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
  
      // Perform the POST request with error handling
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
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
    });
       
    