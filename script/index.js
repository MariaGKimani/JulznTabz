
  const text = document.getElementById('fadeText');

    let opacity = 1;
    let direction = -1;

    function fadeText() {
      opacity += direction * 0.01;
      if (opacity < 0) {
        opacity = 0;
        direction = 1;
      } else if (opacity > 1) {
        opacity = 1;
        direction = -1;
      }
      requestAnimationFrame(fadeText);
    }

    fadeText();









let currentImageIndex = 0;
const images = document.querySelectorAll('.image');
const totalImages = images.length;

function showImage(index) {
  images.forEach((image) => {
    image.style.display = 'none';
  });
  images[index].style.display = 'block';
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= totalImages) {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
}

function previousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = totalImages - 1;
  }
  showImage(currentImageIndex);
}

document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.previous').addEventListener('click', previousImage);

    
    





