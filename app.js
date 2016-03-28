var playerOne = new Player();
var playerTwo = new Player();
var gameInProgress = true;

function Player () {
  this.progress = 0;
  this.score = 0;

  this.percentage = function () {
    return this.progress + '%';
  };
}

$(document).on('ready', function() {
  $(document).keydown(function(event) {
    if (gameInProgress === true) {
      switch (event.which) {
        case 77: { // M key
          if (playerOne.progress < 85) {
            playerOne.progress += 2;
            $('#playerOne').css( 'margin-left', playerOne.percentage() );
            checkForWinner();
          } break;
        }
        case 76: { // Z key
          if (playerTwo.progress < 85) {
            playerTwo.progress += 2;
            $('#playerTwo').css( 'margin-left', playerTwo.percentage() );
            checkForWinner();
          } break;
        }
      }
    }
  });

  function checkForWinner () {
    if (playerOne.progress === 86) {
      playerOne.score += 1;
      gameInProgress = false;
      $('#playerOneScore').html(playerOne.score);
    } else if (playerTwo.progress === 86) {
      playerTwo.score += 1;
      gameInProgress = false;
      $('#playerTwoScore').html(playerTwo.score);
    }
  }
  //start new game
  function newGame () {
    playerOne.progress = 0;
    playerTwo.progress = 0;
    gameInProgress = true;
    $('#playerOne').css( 'margin-left', '0%' );
    $('#playerTwo').css( 'margin-left', '0%' );
  }
  //new game on clikc
  $('#newGameButton').on('click', function (event) {
    newGame();
  });
  //resets game
  $('#resetGameButton').on('click', function (event) {
    newGame();
    playerOne.score = 0;
    playerTwo.score = 0;
    $('#playerOneScore').html('0');
    $('#playerTwoScore').html('0');
  });
});
