document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid-equipo');
  const container = document.querySelector('.carrusel-container');

  if (!grid || !container) return;

  let position = 0;
  const speed = 1.5; // píxeles por frame

  function animate() {
    position -= speed;

    // Última tarjeta totalmente visible
    const maxScroll = grid.scrollWidth - container.clientWidth;

    if (Math.abs(position) >= maxScroll) {
      position = 0; // Reinicia al inicio limpio
    }

    grid.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  // Asegura que no se congele tras clic
  grid.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
      console.log("Click en:", e.target.alt || "Tarjeta");
      requestAnimationFrame(animate);
    }
  });

  animate();
});
