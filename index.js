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


var prev = document.getElementById('prevButton');
var next = document.getElementById('nextButton');


prev.addEventListener('click', function() {
    clickButton(-1)
})
next.addEventListener('click', function() {
    clickButton(1)
})

//Making a carousel: https://www.w3schools.com/howto/howto_js_slideshow.asp
var index = 0;
carousel(index);

function clickButton(num) {
  carousel(index += num);
}

function carousel(num) {
  var pics = document.getElementsByClassName("pics");
  if(num > pics.length - 1){
    index = 0;
  }
  if(num <= 0) {
    index = pics.length - 1;
  }
  var i = 0
  while(i < pics.length) {
    pics[i].style.display = "none";
    i++;
  }
  
  index++;
  if (index > pics.length - 1) {
    index = 0;
  }

  pics[index].style.display = "block";
  setTimeout(carousel, 4000);
}

  
  
  


