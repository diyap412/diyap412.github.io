document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-alert").forEach(button => {
    button.addEventListener("click", () => {
      alert("More details coming soon!");
    });
  });

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 0 15px rgba(37, 99, 235, 0.8)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 0 10px rgba(37, 99, 235, 0.5)";
    });
  });
});
