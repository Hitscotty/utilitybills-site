
$(document).ready(function() {


 $('.overlay').click(function(){
  $('.wrapper').toggleClass('wrapper-trans');
  $('object').toggleClass('');

 });

function transitionState(){
 window.location = "transition.html";
}

function contentState(){
 window.location = "content.html";
}

 });
