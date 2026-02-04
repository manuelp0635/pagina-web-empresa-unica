
  const slider = document.querySelector('.slider');
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const radios = document.querySelectorAll('input[name="t"]');

  let index = 1;
  let interval;
  let startX = 0;
  let currentTranslate = 0;
  let isDragging = false;

  // 🔁 Clonar slides para infinito real
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  slidesContainer.appendChild(firstClone);
  slidesContainer.insertBefore(lastClone, slides[0]);

  const allSlides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth;

  slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

  // 🎯 Auto slider
  function startAutoSlide() {
    interval = setInterval(() => {
      moveToSlide(index + 1);
    }, 5000);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  function moveToSlide(newIndex) {
    slidesContainer.style.transition = 'transform 0.6s ease-in-out';
    index = newIndex;
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

    updateDots();
  }

  function updateDots() {
    radios.forEach(r => r.checked = false);
    if (index === 0) radios[radios.length - 1].checked = true;
    else if (index === slides.length + 1) radios[0].checked = true;
    else radios[index - 1].checked = true;
  }

  slidesContainer.addEventListener('transitionend', () => {
    if (index === 0) {
      slidesContainer.style.transition = 'none';
      index = slides.length;
      slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    if (index === slides.length + 1) {
      slidesContainer.style.transition = 'none';
      index = 1;
      slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  });

  // 📱 SWIPE
  slidesContainer.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoSlide();
  });

  slidesContainer.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    slidesContainer.style.transform = `translateX(${(-slideWidth * index) + diff}px)`;
  });

  slidesContainer.addEventListener('touchend', e => {
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff > 80) moveToSlide(index - 1);
    else if (diff < -80) moveToSlide(index + 1);
    else moveToSlide(index);

    startAutoSlide();
  });

  // 🖱️ Pausa al hover
  slider.addEventListener('mouseenter', stopAutoSlide);
  slider.addEventListener('mouseleave', startAutoSlide);

  // 🔘 Click en dots
  radios.forEach((radio, i) => {
    radio.addEventListener('click', () => {
      moveToSlide(i + 1);
    });
  });

  startAutoSlide();

// JavaScript – Automático + Swipe + Modal + Métricas
const track = document.querySelector('.carousel-track');
track.innerHTML += track.innerHTML; // infinito real

// MODAL
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');

document.querySelectorAll('.proyecto-card').forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = card.querySelector('img').src;
    modalTitle.textContent = card.querySelector('p').textContent;

    // 📊 Métrica por categoría
    const categoria = card.dataset.categoria;
    console.log('Click categoría:', categoria);

    // Aquí puedes enviar a GA / Firebase
    // analytics.logEvent('click_proyecto', { categoria });
  });
});

document.querySelector('.close').onclick = () => modal.style.display = 'none';

// SWIPE MOBILE
let startX = 0;
track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
track.addEventListener('touchmove', e => {
  const moveX = e.touches[0].clientX;
  track.scrollLeft += startX - moveX;
  startX = moveX;
});
