'use strict';

var ticTacToe = {
  board: ['','','','','','','','','']
  // move: 0;
  //   var something;
  //   return true;
  // };
};

var player = 'X';
var p1Score = 0;
var p2Score = 0;
var moves = 0;

var updateScore = function(player){
  if(player === 'X')
  {
    $('#p1Score').html(++p1Score);
  }
  else {
    $('#p2Score').html(++p2Score);
  }
};

//This function should change the value of the inner html from the square number to X or O depending on the player (maybe using setPlayer()??)
var setIndexAndValue = function(index,player) {
  //set the index = index
  $('#index').val(index);
  //set the value = player
  $('#value').val(player);
};

var threeInARow = function(player) {
  //includes 0,0
  if(ticTacToe.board[0] === player)
  {
    if(ticTacToe.board[1] === player)
    {
      if(ticTacToe.board[2] === player)
      {
        console.log("X down the 1st column");
        return player;
      }
    }
    else if(ticTacToe.board[3] === player)
    {
      if(ticTacToe.board[6] === player)
      {
        console.log("X down the 1st row");
        return player;
      }
    }
    else if(ticTacToe.board[4] === player)
    {
      if(ticTacToe.board[8] === player)
      {
        console.log("X diag row");
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
        return player;
      }
    }
    else if(ticTacToe.board[4] === player)
    {
      if(ticTacToe.board[6] === player)
      {
        console.log("X backwards diagonal");
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

var showFinalBoard = function(player){
  for(var i = 0; i < ticTacToe.board.length; i++){
          if(ticTacToe.board[i] === '')
          {
            $('#' + i).fadeTo('slow', 0.5);
            $('#' + i).html("--");
            ticTacToe.board[i] = "--";
          }
          else if(ticTacToe.board[i] === player)
            $('#' + i).fadeTo('fast', 1);
        }
};

var resetMoves = function(){
  moves = 0;
};

//this function will decide when the game is over, and should run after each player takes his/her turn.
var declareWinner = function (){
  var winner = '';

  return winner;
};

var startNewGame = function(){

  console.log(ticTacToe.board);
  for(var i = 0; i < ticTacToe.board.length; i++)
  {
    ticTacToe.board[i] = '';
    $('#' + i).html("-");
    $('#' + i).fadeTo('fast', 1);
  }
  console.log(ticTacToe.board);
};
