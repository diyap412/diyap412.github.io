document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Add hover effect to project cards
    const projects = document.querySelectorAll(".project-card");
    projects.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0px 0px 15px rgba(255, 152, 0, 0.8)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0px 0px 10px rgba(255, 152, 0, 0.5)";
        });
    });

    // Show alert when clicking a project button
    const projectButtons = document.querySelectorAll(".btn");
    projectButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("More details coming soon!");
        });
    });

    // Dark mode toggle button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.classList.add("btn");
    document.body.insertBefore(toggleButton, document.body.firstChild);

    // Toggle dark mode and light mode
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Change button text based on the mode
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "Toggle Light Mode";
        } else {
            toggleButton.textContent = "Toggle Dark Mode";
        }
    });
});
