document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleDetails");
    const projectDetails = document.getElementById("projectDetails");

    toggleBtn.addEventListener("click", () => {
        // Toggle between showing and hiding the project section
        if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
            projectDetails.style.display = "flex";
        } else {
            projectDetails.style.display = "none";
        }
    });

    // Optional: start with details hidden
    // projectDetails.style.display = "none";
});
