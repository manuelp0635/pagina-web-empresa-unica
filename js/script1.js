  const slider = document.querySelector('.slider');
  const videos = document.querySelectorAll('.slider video');
  let index = 0;

  function playVideo() {
    videos.forEach((video, i) => {
      if (i === index) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  function nextVideo() {
    index = (index + 1) % videos.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
    playVideo();
  }

  videos.forEach((video) => {
    video.addEventListener('ended', nextVideo);
  });

  // Automatically move to the next video after a fixed interval
  setInterval(() => {
    nextVideo();
  }, 10000); // Adjust the interval (10 seconds here) as needed

  // Initialize
  playVideo();
