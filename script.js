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
            card.classList.add("hover-effect");
        });
        card.addEventListener("mouseleave", () => {
            card.classList.remove("hover-effect");
        });
    });

    // Show alert only for 'coming soon' projects
    document.querySelectorAll(".btn[data-coming-soon]").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            alert("More details coming soon!");
        });
    });

    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.classList.add("btn", "dark-mode-toggle");

    // Add button inside the navbar
    document.querySelector(".navbar").appendChild(toggleButton);

    // Load dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "Toggle Light Mode";
    }

    // Toggle dark mode
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        toggleButton.textContent = isDark ? "Toggle Light Mode" : "Toggle Dark Mode";
        localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    });
});
