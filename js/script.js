const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  const offset = -currentIndex * (itemWidth + 20);
  carousel.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

updateCarousel();

setInterval(nextSlide, 6000);
