window.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.tilt-wrapper');

  if (!wrappers.length) return;

  wrappers.forEach(wrapper => {
    const images = [...wrapper.querySelectorAll('.tilt-img')];

    let targetX = 0;
    let targetY = 0;

    window.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      targetX = (e.clientX - centerX) / window.innerWidth;
      targetY = (e.clientY - centerY) / window.innerHeight;
    });

    function animate() {
      images.forEach(img => {
        const maxTilt = parseFloat(img.dataset.tilt) || 12;
        const speed = parseFloat(img.dataset.speed) || 0.1;

        const curX = img._x || 0;
        const curY = img._y || 0;

        const nextX = curX + (targetY * -maxTilt - curX) * speed;
        const nextY = curY + (targetX *  maxTilt - curY) * speed;

        img._x = nextX;
        img._y = nextY;

        img.style.transform =
          `rotateX(${nextX}deg) rotateY(${nextY}deg)`;
      });

      requestAnimationFrame(animate);
    }

    animate();
  });
});
