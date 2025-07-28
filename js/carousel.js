/* Script seccion de testimonios */

      const track = document.getElementById('carouselTrack');
      const items = track.querySelectorAll('.testimonial');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      let currentIndex = 0;

      function updateCarousel() {
        items.forEach((item, index) => {
          item.classList.toggle('active', index === currentIndex);
        });
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
      });

      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
      });

      updateCarousel(); // inicializar