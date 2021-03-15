var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  var slides = document.getElementsByClassName('slider__item');
  var dots = document.getElementsByClassName('sliderDots__item');
  var slideActive = slideIndex - 1;

  if (n >= slides.length) {
    slideIndex = 0
  };

  if (n < 1) {
      slideIndex = slides.length
  };

  for (var s of slides) {
      s.style.display = 'none';
  };

  for (var d of dots) {
      d.classList.remove('activeDot');
  };

  slides[slideActive].style.display = 'block';
  dots[slideActive].classList.add('activeDot');
};
