'use strict';

var newBoard = ['','','','','','','','',''];

var ticTacToe = {
  board: ['','','','','','','','','']
  // move: 0;
  //   var something;
  //   return true;
  // };
};

var player1 = 'X';
var player2 = 'O';

//I think this will be handled by a 'click' event handler, but if I was going to use a prompt/entry field I would do it this way.
var getInput = function(input) {

  return input;
};

//This function should change the value of the inner html from the square number to X or O depending on the player (maybe using setPlayer()??)
var changeValue = function(index,player) {
  var newValue = '';
  ticTacToe.board[index,player] = player;
  return newValue;
};

// ticTacToe.board[2][0] = player;
// ticTacToe.board[2][1] = player;
// ticTacToe.board[2][2] = player;


// console.log(ticTacToe.board[0]);
// console.log(ticTacToe.board[1]);
// console.log(ticTacToe.board[2]);

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
  }
  //includes 1,0
  if(ticTacToe.board[1][0] === player)
  {
    if(ticTacToe.board[1][1] === player)
    {
      if(ticTacToe.board[1][2] === player)
      {
        console.log("X across the middle row");
        return player;
      }
    }
  }
  //includes 2,0
  if(ticTacToe.board[2][0] === player)
  {
    console.log("You got here.");
    if(ticTacToe.board[2][1] === player)
    {
      if(ticTacToe.board[2][2] === player)
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

console.log("Winner is " + threeInARow(player1));

//This function should run to determine which player's turn it is, and maybe when setting the square to a certain value
var setPlayer = function() {
  var player = '';
  return player;
};

//this function needs to run after a square has been played in to make sure no one else can play in that square again.
var setUneditable = function() {
  var square = '';
  return square;
};

var setInput

//this function will decide when the game is over, and should run after each player takes his/her turn.
var declareWinner = function (){
  var winner = '';

  return winner;
};

