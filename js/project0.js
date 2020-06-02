$(document).ready(function(){
//
let playerOne = 'X';
let playerTwo = '0';
let cells = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9']
];
let counter = 0;
let usedCells = [];

// THIS FUNCTiON IS FOR THE ANIMATION WHEN GAME STARTS //
  $('#button').on('click', function() {
    alert('Player 1 to go first');
    $('.side').css({opacity:1,visibility:'hidden'}).animate({opacity:0.2}, 2000);
    $('#game').css({opacity:0,visibility:'visible'}).animate({opacity:1.0}, 2000);
    })
//

// THIS IS OFR THE 0 AND X TURNS.
  $('.box').on('click', function (){
    let boxId = $(this).attr('id');
      let token = '';
      if (counter % 2 === 0) {
        token = playerOne;
      } else {
        token = playerTwo;
      }
     if (! usedCells.includes(boxId)) {
      $(this).append(token);// before appending - chck if in used cells
      usedCells.push(boxId);
      $('#button').text('Click Here to Restart');
      counter ++
  }
      console.log(usedCells);

    })


//
// const winningVertical
//
// const winningHorizontal
//
// const winningDiagonal

})


// check win conditions
// 3 functions - check horizontal / vertical / diagonal.
// which will be array in array.
// for loops will come around here as well.
//
// once there is a win condition
// end the game with new prompt = "Congrats .... " -- if player one, if player 2 wins
//
// if not win condition = draw.
// ---function that makes sure all cells are tagged.
// can be done with default value of -1.
//
// let cells = [
//   ['1', '2' '3'],
//   ['4', '5', '6'],
//   ['7', '8', '9']
// ];
//
// })
//
// for (var i = 0; i < cells.length; i++) {
//     for (var j = 0; j <cells[i].length; j++) {
//     }
// }
//
// cells[i][j]
