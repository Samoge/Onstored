var hamburger = document.querySelector(".hamburgermenu");
var showlinks = document.querySelector(".actionbuttons");
// var backdrop = document.querySelector('.backdrop')

function Addclass() {
  hamburger.classList.toggle("show");
  showlinks.classList.toggle("smoothmenushow");
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/Prev controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
  slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
  slides[slideIndex-1].style.display = "block";
}

ScrollReveal({
  reset: true,
  duration: 2000,
  distance: "40px",
});

ScrollReveal().reveal(".every", {
  delay: 150,
  origin: "bottom",
});
ScrollReveal().reveal(".everyfoot",{
  delay: 200,
  origin: "bottom",
});
ScrollReveal().reveal(".footer-ff",{
  delay: 1000,
  origin: "bottom",
});