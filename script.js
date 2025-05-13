function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

function addToCart() {
  alert("Item added to cart!");
}

// Form validation for contact page
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
    } else {
      alert('Thank you for contacting us!');
      contactForm.reset();
    }
  });
}
