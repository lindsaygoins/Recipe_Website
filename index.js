//Working with the DOM: https://eecs.oregonstate.edu/ecampus-video/CS290/core-content/js-html/dom-nodes.html

document.addEventListener('DOMContentLoaded', signUp);

//Asynchronous requests: https://eecs.oregonstate.edu/ecampus-video/CS290/core-content/ajax-forms/async-requests.html
function signUp(){
    document.getElementById('signUp').addEventListener('click', function(event){
        var request = new XMLHttpRequest();
        
        var payload = { name:null,
                        email:null};
        payload.name = document.getElementById('name').value;
        payload.email = document.getElementById('email').value;
        
        request.open('POST', 'https://httpbin.org/post', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(payload));
        
        request.addEventListener('load', function(){
            if(request.status >= 200 && request.status < 400){
              var response = JSON.parse(request.responseText);
              
              // .textContent: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
              document.getElementById("output").textContent = "Thanks for subscribing, " + response.json.name + "!"

            } else {
              console.log("Error: " + request.statusText);
            }});
        event.preventDefault();
    })
}

// Making the carousel: https://www.w3schools.com/howto/howto_js_slideshow.asp
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
  
  // Change picture every 3 seconds
  setTimeout(showSlides, 3000);
} 
  
  
  


