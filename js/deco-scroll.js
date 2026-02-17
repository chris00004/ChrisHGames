const rotators = document.querySelectorAll('.scroll-rotate');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    rotators.forEach((el, i) => {
      const speed = parseFloat(getComputedStyle(el).getPropertyValue('--speed')) || 0.1;
      el.style.transform = `rotate(${scrollY * speed}deg)`;
    });
  });