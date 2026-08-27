
  document.querySelectorAll('.expandCode').forEach(button => {
    button.innerHTML = `<img src="images/buttons/arrow-expand-white.png" alt="">`;

    button.addEventListener('mouseenter', () => {
      button.innerHTML = `<img src="images/buttons/arrow-expand-green.png" alt="">`;
    });

    button.addEventListener('mouseleave', () => {
      button.innerHTML = `<img src="images/buttons/arrow-expand-white.png" alt="">`;
    });
  });


document.querySelectorAll('.expandCode').forEach(button => {
  button.addEventListener('click', () => {
    const container = button.previousElementSibling; // get the matching sub-flex-container
    container.classList.toggle('expanded');
    button.classList.toggle('expanded');

    if (!container.classList.contains('expanded')) {

      const offset = 5; // pixels above the element (adjust to taste)
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

function syncWidth() {
  const target = document.querySelector('.expandCode');
  const previous = target.previousElementSibling;
  target.style.width = (previous.offsetWidth * 0.95) + 'px';
}

syncWidth(); // run once on load
window.addEventListener('resize', syncWidth); // keep in sync


