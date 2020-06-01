$(document).ready(function () {

let $player1 = $('.firstPlayer')
let $player2 = $('.secondPlayer')
let cells = [
  ['1', '2' '3'],
  ['4', '5', '6'],
  ['7', '8', '9']
];

$('#button').on('click', function() {
    alert('Player 1 to go first');
    $('#game').css('visibility','visible')
  })

  //player one goes first
  const player1Choice = function() {
    for (var i = 0; i < cells.length; i++) {
      for (var j = 0; j < cells.length; j++) {
        cells[i][j]
      }
      console.log(cells[i][j]);
    }
  }
})

//
// set the default avatars for both
// start button work
// whateer is clicked is what comes up.
//         every turn = change between players
//
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
