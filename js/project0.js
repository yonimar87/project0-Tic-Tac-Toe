$(document).ready(function(){
// al the variables i have
let playerOne = 'X';
let playerTwo = '0';
let counter = 0;
let playerOneWins = 0;
let playerTwoWins = 0;
let draws = 0;
let usedCells = [];
let playerOneChoices = [];
let playerTwoChoices = [];
const playerWinCombo = [
  ['00', '01', '02'],
  ['03', '04', '05'],
  ['06', '07', '08'],
  ['00', '03', '06'],
  ['01', '04', '07'],
  ['02', '05', '08'],
  ['00', '04', '08'],
  ['02', '04', '06']
]

// THIS FUNCTiON IS FOR THE ANIMATION WHEN GAME STARTS //
const initialiseGame = function () {
  alert('Player 1 to go first');
  $('.side').css({opacity:1,visibility:'hidden'}).animate({opacity:0.9}, 2000);
  $('.box').empty();
  usedCells = [];
  counter = 0;
  playerOneChoices = [];
  playerTwoChoices = [];
  $('#game, .duringGame').css({opacity:0,visibility:'visible'}).animate({opacity:1.0}, 2000);
  $('#gamesDrawn').css({opacity:0,visibility:'visible'}).animate({opacity:1.0}, 2000);
  $('.startButton').text('Click Here to Restart the round');
}

$('.startButton').on('click', initialiseGame)
//

//should i have two functions for start and restart. Dividing the above?
//means I can have less popups.

// PRETTY MUCH ENTIRE GAME.

//THE BELOW IS FOR THE TURN BASE X OR O
  $('.box').on('click', function (){
    let boxId = $(this).attr('id');
    if (usedCells.includes(boxId)) {
      return;
    }
      let token = '';
      if (counter % 2 === 0) {
        token = playerOne;
        event.target.style.color = "olive";
        playerOneChoices.push(boxId);

      } else {
        token = playerTwo;
        event.target.style.color = "red";
        playerTwoChoices.push(boxId);
      }

     // if (! usedCells.includes(boxId)) { //  review why this is not needed.
      $(this).append(token);// before appending - chck if in used cells
      usedCells.push(boxId);
      counter ++

// THE BELOW IS CHECKING IF SUBSET ARRAY IS FUNCTION TO BE USED IN WINNING COMBO FUNCTION
    const checkArraysSubset = function (array1, subsetArray) {
      console.log(array1);
      console.log(subsetArray);
      return subsetArray.every(val => array1.includes(val));
    }

//WINNING COMBO CHECKS IF ARRAY OF PLAYERS1/2 HAS SAME ARRAY AS SUBSETS OF CHECKARRAYSUBSET FUNCTION
    const winningCombo = function () {
      for (var i = 0; i < playerWinCombo.length; i++) {
          if (checkArraysSubset(playerOneChoices, playerWinCombo[i])) {
              playerOneWins++;
              tallyScores()
              return 'Player 1 Wins';
          } else if (checkArraysSubset(playerTwoChoices, playerWinCombo[i])) {
              playerTwoWins++;
              tallyScores()
              return 'Player 2 Wins';
          }
          }  if (usedCells.length === 9) {
          draws++;
          $('.box').empty();
          usedCells = [];
          counter = 0;
          playerOneChoices = [];
          playerTwoChoices = [];
          return 'Its a draw!';
        }  return 'no results yet';
      };

// CALLING WINNING COMBO - PROVIDING THE WINNING LINES/ALERTS
    const result = winningCombo()
        if (result !== 'no results yet') {
          //IS THERE A WAY TO HIGHLIGHT THE ARRAY THAT HAS WON THE GAME?
          // setTimeout(function(){ alert(result); }, 200);
          console.log(playerOneWins, playerTwoWins, draws);
          // $('#gamesDrawn').text(`Draws: ${draws}`);
          $('#leftWins').html(`Player 1 Wins: <br/> ${playerOneWins}`)
          $('#rightWins').html(`Player 2 Wins: <br/>${playerTwoWins}`)
          $('#gamesDrawn').html(`Draws: ${draws}`)

      }

})

    const tallyScores = function (){
      if (playerOneWins === 5) {
          playerOneWins = 0;
          playerTwoWins = 0;
          draws = 0;
          alert('congratulations Player 1, you are the first to 5 wins!!!')
      } else if (playerTwoWins === 5) {
          playerOneWins = 0;
          playerTwoWins = 0;
          draws = 0;
          alert('Congratulations Player 2, you are the first to 5 wins!!!')

      }   $('.box').empty();
        usedCells = [];
        counter = 0;
        playerOneChoices = [];
        playerTwoChoices = [];
    }



})

// going to provide avatars - --- avatar 1 and avatar 2.
