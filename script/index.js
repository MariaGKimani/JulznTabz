const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('mouseenter', function() {
  carouselContainer.classList.add('hovered');
});

carouselContainer.addEventListener('mouseleave', function() {
  carouselContainer.classList.remove('hovered');
});
