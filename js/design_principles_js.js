/* Gallery & indicator */
const items = document.querySelectorAll('.principle-box');
const indicators = document.querySelectorAll('.indicator');
// let currentIndex = 0;

// indicators.forEach((indicator, index) => {
//   indicator.addEventListener('click', () => {
//     document.querySelector('.principle-slide').style.transform = `translateX(-${index * 100}%)`;
//     indicators[currentIndex].classList.remove('active');
//     indicator.classList.add('active');
//     currentIndex = index;
//   });
// });

// indicators.forEach(indicator => {
//   indicator.addEventListener('click', function () {
//     let slideTo = this.getAttribute('data-slide-to');
//     let itemWidth = items[0].getBoundingClientRect().width;
//     document.querySelector('.principle-slide').style.transform = `translateX(-${itemWidth * slideTo}px)`;
    
//     document.querySelector('.principle-box.active').classList.remove('active');
//     items[slideTo].classList.add('active');
    
//     document.querySelector('.indicator.active').classList.remove('active');
//     this.classList.add('active');
//   });
// });

// let slider = document.getElementById('principle-gallery');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//     isDown = false;
// });

// slider.addEventListener('mouseup', () => {
//     isDown = false;
// });

// slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 3; // Scroll speed multiplier
//     slider.scrollLeft = scrollLeft - walk;
// });

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("principle-box"); // Updated class name
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove 'active' class from all dots
  }

  slides[slideIndex-1].style.display = "block"; // Show the current slide
  dots[slideIndex-1].className += " active"; // Add 'active' class to the current dot
}