var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var pics = document.getElementsByClassName("pics");

  // Keep all pictures from displaying at once
  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }

  // Go back to the first picture
  if (slideIndex >= pics.length) {
    slideIndex = 0;
  }

  // Display the picture and increment the index to the next picture
  pics[slideIndex].style.display = "block";
  slideIndex++;
  
  // Change picture every 5 seconds
  setTimeout(showSlides, 5000);
} 
  
  
  


