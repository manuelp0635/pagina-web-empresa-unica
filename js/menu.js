const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuToggle.classList.toggle('open');
  
  // Accesibilidad
  const expanded = menuToggle.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', expanded);
});