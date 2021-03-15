var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
};

function nextSlide() {
  showSlides(slideIndex += 1);
};

function previousSlide() {
  showSlides(slideIndex -= 1);
};

function showSlides(n) {
  var slides = document.getElementsByClassName('slider__content');
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

  slides[slideActive].style.display = 'block';
};

$('.servicesScroll').on('click', function() {
  $('html, body').animate({scrollTop:$('.about').offset().top+"px"},{duration:1E3});
});

$('.worksScroll').on('click', function() {
  $('html, body').animate({scrollTop:$('.works').offset().top+"px"},{duration:1E3});
});

$('.referencesScroll').on('click', function() {
  $('html, body').animate({scrollTop:$('.references').offset().top+"px"},{duration:1E3});
});

$('.contactScroll').on('click', function() {
  $('html, body').animate({scrollTop:$('.contact').offset().top+"px"},{duration:1E3});
});

function checkForm(elem) {
  var name = elem.name;
  var email = elem.email;
  var message = elem.message;

  if (name.value == "" || email.value == "" || message.value == "") {
    if (name.value == "") {
      name.placeholder = "Please, enter your name.";
      name.classList.add('redPlaceholder');
    }

    if (email.value == "") {
      email.placeholder = "Please, enter your E-mail.";
      email.classList.add('redPlaceholder');
    }

    if (message.value == "") {
      message.placeholder = "Please, enter your message.";
      message.classList.add('redPlaceholder');
    }

    return false
  }

  else if (email.value != "") {

  }

  else {
    return true
  }
}
