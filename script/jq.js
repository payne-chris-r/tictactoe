'use strict';


$(document).ready(function(){
  var player = 'X';

  alert("Player is " + player + "!");

$('.square').click(function(){
  //if(this.id) is uneditable
    if(ticTacToe.board[this.id] === '')
    {
      $(this).fadeTo('slow', 0.5);

      //change array of the index that was clicked on to value of player
      ticTacToe.board[this.id] = player;
      //change the DOM to display that change
      $(this).html(ticTacToe.board[this.id]);

      //check for winner
      if(threeInARow(player))
      {
        for(var i = 0; i < ticTacToe.board.length; i++){
          if(ticTacToe.board[i] === '')
          {
            $('#' + i).fadeTo('slow', 0.5);
            $('#' + i).html("--");
          }
        }

        setTimeout(function(){
        alert(player + " won!");}, 500);
        return true;
        //clear board
        //ticTacToe.board = newBoard;
      }
      //switch player
      if(player === 'O')
      {
        player = 'X';
      }
      else{
        player = 'O';
      }
    }
    else{
      alert("Don't tread on me!");
    }
    //call setUneditable --> this.id);
});

});



// $('square').ready(function(){

// };

// $('#square').click(function(){
//   $(this).fadeTo('slow', 0.5);
// });

