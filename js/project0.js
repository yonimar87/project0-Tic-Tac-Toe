$(document).ready(function(){
// al the variables i have
let playerOne = 'X';
//so for player counter - on player win condition x++
let playerTwo = '0';
let counter = 0;
let usedCells = [];
const playerOneChoices = [];
const playerTwoChoices = [];
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
  $('#button').on('click', function() {
    alert('Player 1 to go first');
    $('.side').css({opacity:1,visibility:'hidden'}).animate({opacity:0.9}, 2000);
    $('.box').empty(usedCells);
    $('#game, .duringGame').css({opacity:0,visibility:'visible'}).animate({opacity:1.0}, 2000);
    // $('duringGame').css({position:'absolute', bottom: '50em' })
  })
//

// THIS IS OFR THE 0 AND X TURNS.
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

     // if (! usedCells.includes(boxId)) { //Yoni to review why this is not needed.
      $(this).append(token);// before appending - chck if in used cells
      usedCells.push(boxId);
      $('#button').text('Click Here to Restart');
      counter ++
  // }
      // console.log(usedCells);
      // console.log(playerOneChoices, 'player 1');
      // console.log(playerTwoChoices, 'player 2');
      let result = winningCombo()
        if (result !== 'no results yet') {
          setTimeout(function(){ alert(result); }, 500);
          setTimeout(function(){ location.reload(); }, 2000);
      }
    })


const checkArraysSubset = function (array1, subsetArray) {
  console.log(array1);
  console.log(subsetArray, 'anything');
  return subsetArray.every(val => array1.includes(val));
}


const winningCombo = function () {
  for (var i = 0; i < playerWinCombo.length; i++) {
      if (checkArraysSubset(playerOneChoices, playerWinCombo[i])) {
          return 'Player 1 Wins';
      } else if (checkArraysSubset(playerTwoChoices, playerWinCombo[i])) {
          return 'Player 2 Wins';
      }
    }  if (usedCells.length === 9) {
      return 'its a draw!';
    } return 'no results yet';
  };
})

//how to get moves back to 0? Could use map + change html to '' using jquery
//local storage for win counter?
// divs for animation wins - can use fadeout function
// with each finish - i want to add to the player 1 or play 2 total.
// going to provide avatars - --- avatar 1 and avatar 2.
// do more css make it look nice.
