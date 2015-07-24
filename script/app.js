'use strict';

var ticTacToe = {
  board: ['','','','','','','','','']
  // move: 0;
  //   var something;
  //   return true;
  // };
};
//wrap these in the tictactoe object \/
var player = 'X';
var p1Score = 0;
var p2Score = 0;
var moves = 0;
var gameOver = false;
var editable = '';
var winners = [];

//UI
var updateScore = function(player){
  if(player === 'X')
  {
    $('#p1Score').html(++p1Score);
  }
  else {
    $('#p2Score').html(++p2Score);
  }
};

//This function should change the value of the inner html from the square number to X or O depending on the player
//API
var setIndexAndValue = function(index,player) {
  //set the index = index
  $('#index').val(index);
  //set the value = player
  $('#value').val(player);
};

//is there a more optimal way to do this?
//GE
var threeInARow = function(player) {
  //includes 0,0

  if(ticTacToe.board[0] === player)
  {
    if(ticTacToe.board[1] === player)
    {
      if(ticTacToe.board[2] === player)
      {
        console.log("X down the 1st column");
        winners = [0,1,2];
        return [0,1,2];
      }
    }
    else if(ticTacToe.board[3] === player)
    {
      if(ticTacToe.board[6] === player)
      {
        console.log("X down the 1st row");
        winners = [0,3,6];
        return [0,3,6];
      }
    }
    else if(ticTacToe.board[4] === player)
    {
      if(ticTacToe.board[8] === player)
      {
        console.log("X diag row");
        winners = [0,4,8];
        return player;
      }
    }
  }
  //includes 0,1
  if(ticTacToe.board[1] === player)
  {
    if(ticTacToe.board[4] === player)
    {
      if(ticTacToe.board[7] === player)
      {
        console.log("X down middle");
        winners = [1,4,7];
        return player;
      }
    }
  }
  //includes 0,2
  if(ticTacToe.board[2] === player)
  {
    if(ticTacToe.board[5] === player)
    {
      if(ticTacToe.board[8] === player)
      {
        console.log("X down 3rd row");
        winners = [2,5,8];
        return player;
      }
    }
    else if(ticTacToe.board[4] === player)
    {
      if(ticTacToe.board[6] === player)
      {
        console.log("X backwards diagonal");
        winners = [2,4,6];
        return player;
      }
    }
  }
  //includes 1,0
  if(ticTacToe.board[3] === player)
  {
    if(ticTacToe.board[4] === player)
    {
      if(ticTacToe.board[5] === player)
      {
        console.log("X across the middle row");
        winners = [3,4,5];
        return player;
      }
    }
  }
  //includes 2,0
  if(ticTacToe.board[6] === player)
  {
    if(ticTacToe.board[7] === player)
    {
      if(ticTacToe.board[8] === player)
      {
        console.log("X across the bottom row");
        winners = [6,7,8];
        return player;
      }
    }
  }

  // else if(ticTacToe.board[0][2] === player)
  // {
  //   if(ticTacToe.board[1][2] === player)
  //   {
  //     if(ticTacToe.board[2][2] === player)
  //     {
  //       return player;
  //     }
  //   }
  // }
};

//This function should run to determine which player's turn it is, and maybe when setting the square to a certain value
//GE
var switchPlayer = function(player) {
  if(player === 'O')
      {
        player = 'X';
      }
      else{
        player = 'O';
      }
  return player;
};

//UI
var showFinalBoard = function(player){
  for(var i = 0; i < ticTacToe.board.length; i++){
          if(ticTacToe.board[i] === '')
          {
            $('#' + i).fadeTo('fast', 0.5);
          }
        }
  for(var j = 0; j < winners.length; j++)
  {
    $('#' + winners[j]).fadeTo('fast', 1);
  }
};

//GE
var resetMoves = function(){
  moves = 0;
  player = 'X';
};

//this function will decide when the game is over, and should run after each player takes his/her turn.

//GE
var declareWinner = function (player){
  //declare winner
  if(
    //rows
    ticTacToe.board[0] === ticTacToe.board[1] === ticTacToe.board[2] ||
    ticTacToe.board[3] === ticTacToe.board[4] === ticTacToe.board[5] ||
    ticTacToe.board[6] === ticTacToe.board[7] === ticTacToe.board[8] ||
    //columns
    ticTacToe.board[0] === ticTacToe.board[3] === ticTacToe.board[6] ||
    ticTacToe.board[1] === ticTacToe.board[4] === ticTacToe.board[7] ||
    ticTacToe.board[2] === ticTacToe.board[5] === ticTacToe.board[8] ||
    //diags
    ticTacToe.board[0] === ticTacToe.board[4] === ticTacToe.board[8] ||
    ticTacToe.board[2] === ticTacToe.board[4] === ticTacToe.board[6]
    )
  return true;
};

//UI
var displayNewGame = function(){
  for(var i = 0; i < ticTacToe.board.length; i++){
    $('#' + i).html("-");
    $('#' + i).fadeTo('fast', 1);
  }
};

//GE
var startNewGame = function(){
  resetMoves();
  for(var i = 0; i < ticTacToe.board.length; i++){
    ticTacToe.board[i] = '';
  }
  gameOver = false;
};

var confirmNewGame = function(){
  if(confirm("There's a game being played, are you sure you want to start a new one?!?"))
    return true;
};
