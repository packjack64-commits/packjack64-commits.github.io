// Grab the image and the text
const mainImage = document.getElementById('mainImage');
const description = document.querySelector('.description');

// 10 slides: edit the alt and text for each one
const slides = [
  { src: 'images/img1.jpg',  alt: 'Describe image 1',  text: 'shapes.' },
  { src: 'images/img2.jpg',  alt: 'Describe image 2',  text: 'Apple foot.' },
  { src: 'images/img3.jpg',  alt: 'Describe image 3',  text: 'windy Dog.' },
  { src: 'images/img4.jpg',  alt: 'Describe image 4',  text: 'chaotic doodles.' },
  { src: 'images/img5.jpg',  alt: 'Describe image 5',  text: 'Fake face.' },
  { src: 'images/img6.jpg',  alt: 'Describe image 6',  text: 'Finger fight.' },
  { src: 'images/img7.jpg',  alt: 'Describe image 7',  text: 'daylight.' },
  { src: 'images/img8.jpg',  alt: 'Describe image 8',  text: 'global warming.' },
  { src: 'images/img9.jpg',  alt: 'Describe image 9',  text: 'chaotic doodle 2.' },
  { src: 'images/img10.jpg', alt: 'Describe image 10', text: 'chaotic doodle 3.' }
];

let currentIndex = 0;

// Preload images
slides.forEach(({ src }) => {
  const i = new Image();
  i.src = src;
});

// Show a slide (image + text)
function showSlide(index) {
  const slide = slides[index];
  mainImage.src = slide.src;
  mainImage.alt = slide.alt;
  description.textContent = slide.text;
}

// Advance on click
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Start on slide 1, click image to advance
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);