document.querySelectorAll('.toggleBtn').forEach(button => {
  button.addEventListener('click', () => {
    const container = button.previousElementSibling; // get the matching sub-flex-container
    container.classList.toggle('expanded');

    if (container.classList.contains('expanded')) {
      button.textContent = "View Less";
    } else {
      button.textContent = "View More";

      // Scroll the container into view smoothly
      container.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

