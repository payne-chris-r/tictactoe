'use strict';

$(document).ready(function(){


  $('#newGame').click(function(){
    if(gameOver === true)
    {
      startNewGame();
      displayNewGame();
    }
    else{
      if(confirm("There's a game being played, are you sure you want to start a new one?!?")){
        startNewGame();
        displayNewGame();
      }
    }
  });

  $('.square').click(function(){
    //if(this.id) is uneditable
    if(gameOver === false)
    {
      if(ticTacToe.board[this.id] === editable)
      {

        $(this).fadeTo('slow', 0.5);

        //change array of the index that was clicked on to value of player
        ticTacToe.board[this.id] = player;
        //change the DOM to display that change
        $(this).html(ticTacToe.board[this.id]);

        setIndexAndValue(this.id, player);
        //check for winner
        if(threeInARow(player))
        {
          showFinalBoard(player);

          updateScore(player);

          setIndexAndValue(this.id, player);
          setTimeout(function(){
            alert(player + " won!");}, 1000);
            gameOver = true;
            return true;
        }
        else
        {
          moves++;
          if(moves === 9)
          {
            alert("You motha fuckahs tied!");
            startNewGame();
            moves = 0;
          }
        }
        //switch player
        player = switchPlayer(player);
      }
      else
      {
        alert("You can't go there!");
      }
    //call setUneditable --> this.id);
    }
    else{
      alert("The game is over dude... Click [New Game]!");
    }
  });
});
