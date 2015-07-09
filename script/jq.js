'use strict';


$(document).ready(function(){
  var player = 'X';
  var gameOver = false;

$('.square').click(function(){
  //if(this.id) is uneditable
    if(gameOver === false)
    {
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
        showFinalBoard(player);
        // for(var i = 0; i < ticTacToe.board.length; i++){
        //   if(ticTacToe.board[i] === '')
        //   {
        //     $('#' + i).fadeTo('slow', 0.5);
        //     $('#' + i).html("--");
        //   }
        //   else if(ticTacToe.board[i] === player)
        //     $('#' + i).fadeTo('fast', 1);
        // }
        updateScore(player);
        setTimeout(function(){
        alert(player + " won!");}, 1000);

        gameOver = true;
        return true;

        //clear board
        //ticTacToe.board = newBoard;
      }
      //switch player
      player = switchPlayer(player);
    }
    else{
      alert("You can't go there!");
    }
    //call setUneditable --> this.id);
    }
});

});



// $('square').ready(function(){

// };

// $('#square').click(function(){
//   $(this).fadeTo('slow', 0.5);
// });

