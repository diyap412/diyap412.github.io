// script.js

// Smooth scrolling animations
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
});

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("form-status").innerText = "Message sent successfully!";
        document.getElementById("form-status").style.color = "green";
        this.reset();
    } else {
        document.getElementById("form-status").innerText = "Please fill out all fields.";
        document.getElementById("form-status").style.color = "red";
    }
});
