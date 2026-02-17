document.querySelectorAll('.toggleBtn').forEach(button => {
  button.addEventListener('click', () => {
    const container = button.previousElementSibling; // get the matching sub-flex-container
    container.classList.toggle('expanded');

    if (container.classList.contains('expanded')) {
      button.textContent = "View Less";
    } else {
      button.textContent = "View More";

      const offset = 220; // pixels above the element (adjust to taste)
      const y =
        container.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  });
});


