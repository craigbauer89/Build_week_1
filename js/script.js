

let slideIndex = 1;
showSlides(slideIndex);

// Next
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
     /* if (n < 1) { slideIndex = slides.length } */ 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
     slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
 function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.addEventListener('scroll', reveal);

  function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 50;

      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }

  // NAV ACTIVE SCROLL

  const activeNav = document.querySelectorAll('.nav_link_active');
  const sec = document.querySelectorAll('.active_nav');

  function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    activeNav.forEach(ltx => ltx.classList.remove('active_scroll'));
    activeNav[len].classList.add('active_scroll');
  }

  activeMenu();
  window.addEventListener('scroll', activeMenu);

  //_________________________________________________