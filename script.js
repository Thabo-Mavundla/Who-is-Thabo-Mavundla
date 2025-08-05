function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const statusElement = document.getElementById('form-status');

    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        statusElement.textContent = "Please enter a valid email address.";
        statusElement.style.color = "red";
        return;
    }
    
    // Here you would typically send the form data to a server
    // For now, we'll just simulate a successful submission
    statusElement.textContent = "Thank you for your message! I'll get back to you soon.";
    statusElement.style.color = "green";
    statusElement.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
    
    // Reset the form
    form.reset();
    
    // Clear the status message after 5 seconds
    setTimeout(() => {
        statusElement.textContent = "";
        statusElement.style.backgroundColor = "transparent";
    }, 5000);
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
