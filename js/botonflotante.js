  // Carousel automático
  const track = document.getElementById("carouselTrack");
  const cards = document.querySelectorAll(".carousel-track .card");
  let index = 0;
  function moveToNextCard() {
    index = (index + 1) % cards.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
  setInterval(moveToNextCard, 5000);

  // Contadores animados
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace('+', '');
      const increment = Math.ceil(target / 100);
      if (count < target) {
        counter.innerText = `+${count + increment}`;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = `+${target.toLocaleString()}`;
      }
    };
    updateCount();
  });

  // Animación de entrada del logo
  window.addEventListener('load', () => {
    const logo = document.getElementById('logo');
    const logoText = document.getElementById('logoText');
    setTimeout(() => {
      logo.style.opacity = 1;
      logo.style.transform = 'scale(1)';
    }, 300);
    setTimeout(() => {
      logoText.style.opacity = 1;
    }, 800);
  });