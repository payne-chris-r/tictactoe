'use strict';

$(document).ready(function(){
  alert("hell!");
});


$('.square').click(function(){
    $(this).fadeTo('slow', 0.5);
    $(this).html('X');
});



// $('square').ready(function(){

// };

// $('#square').click(function(){
//   $(this).fadeTo('slow', 0.5);
// });

