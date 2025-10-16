document.addEventListener("DOMContentLoaded", function() {
  const text = document.querySelector('.fade-in-text');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.4 });
  observer.observe(text);
});