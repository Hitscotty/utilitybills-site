
$(document).ready(function() {

 $('#footer67').click(function () {
  window.location.href="index.html";
 });

 $('pi').hover(function(){
 $('section').css("background-color", "red", "z-index", "1000");
},
 function(){
  $('html').css("background-color", "none");
 });

 });
