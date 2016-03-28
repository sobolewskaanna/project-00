var p1Progress = 0;
var p2Progress = 0;
var p1Percentage = 0;
var p2Percentage = 0;
var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var gameInProgress = true;

$(document).on('ready', function() {
  $(document).keydown(function(event) {
    if (gameInProgress === true) {
      switch (event.which) {
        case 37: { // left arrow key
          if (p1Progress < 85) {
            p1Progress += 2;
            p1Percentage = p1Progress + '%';
            $('#playerOne').css( 'margin-left', p1Percentage );
            checkForWinner();
          } break;
        }
        case 90: {
          if (p2Progress < 85) {
            p2Progress += 2;
            p2Percentage = p2Progress + '%';
            $('#playerTwo').css( 'margin-left', p2Percentage );
            checkForWinner();
          } break;
        }
      }
    }
  });

  function checkForWinner () {
    if (p1Progress === 86) {
      scorePlayerOne += 1;
      gameInProgress = false;
      $('#playerOneScore').html(scorePlayerOne);
    } else if (p2Progress === 86) {
      scorePlayerTwo += 1;
      gameInProgress = false;
      $('#playerTwoScore').html(scorePlayerTwo);
    }
  }

  function newGame () {
    p1Progress = 0;
    p2Progress = 0;
    gameInProgress = true;
    $('#playerOne').css( 'margin-left', '0%' );
    $('#playerTwo').css( 'margin-left', '0%' );
  }
  //new game
  $('#newGameButton').on('click', function (event) {
    newGame();
  });
  //resets game
  $('#resetGameButton').on('click', function (event) {
    newGame();
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    $('#playerOneScore').html('0');
    $('#playerTwoScore').html('0');
  });
});
