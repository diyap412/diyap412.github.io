document.addEventListener("DOMContentLoaded", () => {
    // Select all links with the class "project-alert"
    document.querySelectorAll(".project-alert").forEach(link => {
        link.addEventListener("click", (event) => {
            // Prevent the browser from trying to follow a broken link anchor
            event.preventDefault(); 
            
            // Pop up the custom alert
            alert("New project coming soon!");
        });
    });
});
