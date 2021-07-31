var index = 0;
showSlides(index);

function changeSlide(n) {
  showSlides(index += n);
}

function showSlides(currSlide) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  
  if (currSlide >= slides.length) {
      index = 0;
  }

  if (currSlide < 0) {
      index = slides.length - 1
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[index].style.display = "block";
  dots[index].className += " active";
} 
  
  
  


