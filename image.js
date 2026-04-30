// script.js
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg'
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const nextBtn = document.getElementById('next-btn');

function updateImage() {
  galleryImage.src = images[currentIndex];
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

updateImage(); // Initialize with the first image
