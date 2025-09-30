document.addEventListener('DOMContentLoaded', () => {
  const PX_PER_SECOND = 200; // más rápido

  document.querySelectorAll('.grid-equipo').forEach(grid => {
    if (!grid) return;
    if (grid.dataset.duplicated === 'true') return; // ya procesado

    // Clonar sólo el bloque actual (no usar innerHTML += innerHTML)
    const items = Array.from(grid.children);
    const frag = document.createDocumentFragment();
    items.forEach(item => frag.appendChild(item.cloneNode(true)));
    grid.appendChild(frag);
    grid.dataset.duplicated = 'true';

    // Esperar a que todas las imágenes dentro del grid (originales + duplicadas) carguen
    const imgs = Array.from(grid.querySelectorAll('img'));
    const imgsLoaded = imgs.map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise(res => img.addEventListener('load', res, { once: true }));
    });

    const setAnimationDuration = () => {
      // scrollWidth ahora es (original + duplicado)
      const totalWidth = grid.scrollWidth;
      const singleBlockWidth = totalWidth / 2; // ancho del bloque original
      // Duración para desplazar singleBlockWidth a la velocidad definida
      const durationSec = Math.max(8, Math.round(singleBlockWidth / PX_PER_SECOND));
      // Aplica la duración a la animación CSS (usa variable CSS o estilo directo)
      grid.style.animationDuration = `${durationSec}s`;
      // Sugerencia de rendimiento
      grid.style.willChange = 'transform';
    };

    Promise.all(imgsLoaded).then(setAnimationDuration);

    // Recalcular si cambian tamaños (responsive)
    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(() => {
        // recalcula tras un pequeño delay para evitar loop excesivo
        setTimeout(setAnimationDuration, 50);
      });
      ro.observe(grid);
    } else {
      // fallback simple
      window.addEventListener('resize', () => setTimeout(setAnimationDuration, 150));
    }

    // Pausar/play al pasar el mouse y al recibir foco (accesibilidad)
    grid.addEventListener('mouseenter', () => grid.style.animationPlayState = 'paused');
    grid.addEventListener('mouseleave', () => grid.style.animationPlayState = 'running');
    grid.addEventListener('focusin', () => grid.style.animationPlayState = 'paused');
    grid.addEventListener('focusout', () => grid.style.animationPlayState = 'running');
  });
});

