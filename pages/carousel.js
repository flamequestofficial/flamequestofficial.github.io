const container = document.querySelector('.rotation-container');
const images = container.querySelectorAll('img');
const imagesPerSet = 8;

let scrollSpeed = 2;
let scrollPosition = 0;
let firstSetWidth = 0;

// Wait for all images to load
let imagesLoaded = 0;
images.forEach(img => {
  if (img.complete) {
    imagesLoaded++;
  } else {
    img.addEventListener('load', () => {
      imagesLoaded++;
      if (imagesLoaded === images.length) startCarousel();
    });
  }
});

if (imagesLoaded === images.length) startCarousel(); // all already loaded

function startCarousel() {
  // Calculate exact width of first set
  for (let i = 0; i < imagesPerSet; i++) {
    firstSetWidth += images[i].getBoundingClientRect().width;
  }

  animateCarousel();
}

function animateCarousel() {
  scrollPosition += scrollSpeed;

  if (scrollPosition >= firstSetWidth) {
    scrollPosition = 0; // reset seamlessly
  }

  container.style.transform = `translateX(${-scrollPosition}px)`;
  requestAnimationFrame(animateCarousel);
}
