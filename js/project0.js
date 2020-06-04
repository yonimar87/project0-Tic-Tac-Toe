$(document).ready(function() {
  // al the variables i have
  let playerOne = `<img class='avatar1' id="xDefault" src="X.jpg" alt="X">`
  let playerTwo = `<img class='avatar2' id="circleDefault" src="O.png" alt="0">`
  let counter = 0;
  let playerOneWins = 0;
  let playerTwoWins = 0;
  let draws = 0;
  let usedCells = [];
  let inputVal = ''
  let inputVal2 = ''
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

  const refreshGame = function (){
    $('.box').empty();
    usedCells = [];
    counter = 0;
    playerOneChoices = [];
    playerTwoChoices = [];
  }

  const getInputValue = function() {
    inputVal2 = $("#player2Name").val();
    inputVal = document.getElementById("player1Name").value;
    $('#leftWins').html(inputVal);
    $('#rightWins').html(inputVal2);
  }

  // THIS FUNCTiON IS FOR THE ANIMATION WHEN GAME STARTS //
  const initialiseGame = function() {
    getInputValue();
    alert(`${inputVal} goes first`);

    $('.side').css({
      opacity: 1,
      visibility: 'hidden'
    }).animate({
      opacity: 0.9
    }, 2000);

    $('.inputs').css({
      opacity: 1,
      visibility: 'hidden'
    }).animate({
      opacity: 0.9
    }, 2000);
    refreshGame()

    $('#mariotheme')[0].play();

    $('#game, .duringGame').css({
      opacity: 0,
      visibility: 'visible'
    }).animate({
      opacity: 1.0
    }, 2000);

    $('#gamesDrawn').css({
      opacity: 0,
      visibility: 'visible'
    }).animate({
      opacity: 1.0
    }, 2000);

    $('.startButton').text('Click Here to Restart the round');
  }

  $('.startButton').on('click', initialiseGame)
  //

  //should i have two functions for start and restart. Dividing the above?
  //means I can have less popups.

  // PRETTY MUCH ENTIRE GAME.

  //this is to make sure that the image i choose is then added to my sides for when the game is played
  const imagePicker1 = function() {
    playerOne = this.outerHTML
    // $(playerOne).toggleClass('.selectedAvatar');
  }

  const imagePicker2 = function() {
    playerTwo = this.outerHTML
    // $(playerTwo).toggleClass('.selectedAvatar');
  }

  $('.avatar1').on('click', imagePicker1);
  $('.avatar2').on('click', imagePicker2);

  //THE BELOW IS FOR THE TURN BASE X OR O
  $('.box').on('click', function() {
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
    $(this).append(token); // before appending - chck if in used cells
    usedCells.push(boxId);
    counter++


    // THE BELOW IS CHECKING IF SUBSET ARRAY IS FUNCTION TO BE USED IN WINNING COMBO FUNCTION
    const checkArraysSubset = function(array1, subsetArray) {
      console.log(array1);
      console.log(subsetArray);
      return subsetArray.every(val => array1.includes(val));
    }

    //WINNING COMBO CHECKS IF ARRAY OF PLAYERS1/2 HAS SAME ARRAY AS SUBSETS OF CHECKARRAYSUBSET FUNCTION
    const winningCombo = function() {
      for (var i = 0; i < playerWinCombo.length; i++) {
        if (checkArraysSubset(playerOneChoices, playerWinCombo[i])) {
          playerOneWins++;
          tallyScores()
          return;
        } else if (checkArraysSubset(playerTwoChoices, playerWinCombo[i])) {
          playerTwoWins++;
          tallyScores()
          return;
        }
      }
      if (usedCells.length === 9) {
        draws++;
        refreshGame()
        return 'Its a draw!';
      }
      return 'no results yet';
    };




    // CALLING WINNING COMBO - PROVIDING THE WINNING LINES/ALERTS
    const result = winningCombo()
    if (result !== 'no results yet') {
      //IS THERE A WAY TO HIGHLIGHT THE ARRAY THAT HAS WON THE GAME?
      // setTimeout(function(){ alert(result); }, 200);
      console.log(playerOneWins, playerTwoWins, draws);
      // $('#gamesDrawn').text(`Draws: ${draws}`);
      $('#leftWins').html(`${playerOne}<br/> ${inputVal} <br/> Wins: <br/> ${playerOneWins}`)
      $('#rightWins').html(`${playerTwo}<br/> ${inputVal2} <br/> Wins: <br/>${playerTwoWins}`)
      $('#gamesDrawn').html(`Draws: ${draws}`)

    }

  })

//function for tallying the scores.
  const tallyScores = function() {
    if (playerOneWins === 5) {
      playerOneWins = 0;
      playerTwoWins = 0;
      draws = 0;
      alert(`congratulations ${inputVal}, you are the first to 5 wins!!!`)
    } else if (playerTwoWins === 5) {
      playerOneWins = 0;
      playerTwoWins = 0;
      draws = 0;
      alert(`Congratulations ${inputVal2}, you are the first to 5 wins!!!`)

    }
    refreshGame();
  }

})

//tomorrow - set up the winning Div
//potentially local storage
// when avatar is clicked - background
