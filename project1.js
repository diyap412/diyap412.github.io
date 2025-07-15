document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleDetails");
    const projectDetails = document.getElementById("projectDetails");

    toggleBtn.addEventListener("click", () => {

        if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
            projectDetails.style.display = "flex";
        } else {
            projectDetails.style.display = "none";
        }
    });

});
