const grid = document.querySelector('.grid-equipo');

// Duplicar tarjetas para crear efecto scroll infinito
grid.innerHTML += grid.innerHTML;

// Duplicar tarjetas para efecto scroll infinito
grid.innerHTML += grid.innerHTML;

// Reiniciar animación automáticamente al finalizar
grid.addEventListener('animationiteration', () => {
  grid.style.animation = 'none';       // Detener
  grid.offsetHeight;                    // Trigger reflow
  grid.style.animation = '';            // Reanudar
});
