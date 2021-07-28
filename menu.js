//Events: https://eecs.oregonstate.edu/ecampus-video/CS290/core-content/js-html/simple-events.html
//Working with the DOM: https://eecs.oregonstate.edu/ecampus-video/CS290/core-content/js-html/dom-nodes.html

//Using window.location.href to link to subpages: https://www.developintelligence.com/blog/2016/04/javascript-redirect-how-to-redirect-a-web-page-with-javascript/

var home = document.getElementById('homeLink');
var chili = document.getElementById('chiliLink');
var alfredo = document.getElementById('alfredoLink');
var cookie = document.getElementById('cookieLink');

document.addEventListener('DOMContentLoaded', clickHome);

function clickHome() {
  home.addEventListener('click', function() {
    window.location.href='index.html';
})};

document.addEventListener('DOMContentLoaded', clickChili);

function clickChili() {
  chili.addEventListener('click', function() {
    window.location.href='chili.html';
})};

document.addEventListener('DOMContentLoaded', clickAlfredo);

function clickAlfredo() {
  alfredo.addEventListener('click', function() {
    window.location.href='alfredo.html';
})};

document.addEventListener('DOMContentLoaded', clickCookie);

function clickCookie() {
  cookie.addEventListener('click', function() {
    window.location.href='cookies.html';
})};
