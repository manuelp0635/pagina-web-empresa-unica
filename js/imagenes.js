document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid-equipo');
  const container = document.querySelector('.carrusel-container');

  if (!grid || !container) return;

  let position = 0;
  const speed = 1.5; // píxeles por tick

    setInterval(() => {
    position -= speed;
    const maxScroll = grid.scrollWidth - container.clientWidth;
    if (Math.abs(position) >= maxScroll) position = 0;
    grid.style.transform = `translateX(${position}px)`;
  }, 16); // ~60fps

  function animate() {
    position -= speed;

    const maxScroll = grid.scrollWidth - container.clientWidth;

    if (Math.abs(position) >= maxScroll) {
      position = 0; // Reinicia limpio
    }

    grid.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  // 🔹 Aseguramos que nunca se "congele" después de un click
  grid.addEventListener('click', e => {
    // Ejemplo: podrías abrir modal, redirigir, etc.
    console.log("Click en:", e.target.alt || "Tarjeta");
    // Reiniciamos la animación por seguridad
    requestAnimationFrame(animate);
  });

  animate();
});
