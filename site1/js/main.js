function openMenu() {
  var menu = document.getElementById('menu');
  var menuWindow = document.getElementById('menuWindow');
  menu.classList.remove('menu');
  menu.classList.add('clear');
  menuWindow.classList.remove('clear');
  menuWindow.classList.add('menuWindow');
}

function closeMenu() {
  var menu = document.getElementById('menu');
  var menuWindow = document.getElementById('menuWindow');
  menu.classList.add('menu');
  menu.classList.remove('clear');
  menuWindow.classList.add('clear');
  menuWindow.classList.remove('menuWindow');
}

function checkForm(elem) {
  var name = elem.name;
  var email = elem.email;
  var subject = elem.subject;
  var comname = elem.comname;
  var message = elem.message;

  if (name.value == "" || email.value == "" || subject.value == "" || comname.value == "") {
    if (name.value == "") {
      name.placeholder = "Please, enter your name.";
      name.classList.add('redPlaceholder');
    }

    if (email.value == "") {
      email.placeholder = "Please, enter your E-mail.";
      email.classList.add('redPlaceholder');
    }

    if (subject.value == "") {
      subject.placeholder = "Please, enter your subject.";
      subject.classList.add('redPlaceholder');
    }

    if (comname.value == "") {
      comname.placeholder = "Please, enter your company name.";
      comname.classList.add('redPlaceholder');
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

$('.servicesScroll').on('click', function() {
  $('html, body').animate({scrollTop:$('.services').offset().top+"px"},{duration:1E3});
});

$('.aboutScroll').on('click', function() {
  $('html, body').animate({scrollTop:$('.about').offset().top+"px"},{duration:1E3});
});

$('.worksScroll').on('click', function() {
  $('html, body').animate({scrollTop:$('.works').offset().top+"px"},{duration:1E3});
});

$('.blogScroll').on('click', function() {
  $('html, body').animate({scrollTop:$('.blog').offset().top+"px"},{duration:1E3});
});

$('.clientsScroll').on('click', function() {
  $('html, body').animate({scrollTop:$('.clients').offset().top+"px"},{duration:1E3});
});

$('.contactScroll').on('click', function() {
  $('html, body').animate({scrollTop:$('.contact').offset().top+"px"},{duration:1E3});
});
