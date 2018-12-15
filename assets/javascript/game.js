//javascript//

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;

theGame();

function theGame() {

	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;
		
	checkIfCorrect();

function checkIfCorrect() {

		document.onkeyup = function(event) {

  var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
      
			if (event.keyCode < 65 || event.keyCode > 90) {
				alert("error");

		} else if (yourGuess.indexOf(userChoice) >=0) {
        alert("duplicate"); 
      	} else if (userChoice === computerChoice) {
				wins = wins + 1;
				document.getElementById("wins").innerHTML = wins;

				resetGame();

			} else {
				guessesLeft = guessesLeft - 1;
				
				document.getElementById("guessesLeft").innerHTML = guessesLeft; 
				yourGuess.push(userChoice);

				document.getElementById("yourGuesses").innerHTML = yourGuess;

				noGuessesLeft();
			}
		}
	}

	function resetGame() {
		guessesLeft = 9;
		yourGuess = [];
		document.getElementById("guessesLeft").innerHTML = guessesLeft;  
		document.getElementById("yourGuesses").innerHTML = yourGuess; 
		theGame(); 

	}

	function noGuessesLeft() {
    if (guessesLeft === 0) 
    {
			losses = losses + 1
			document.getElementById("losses").innerHTML = losses;

			resetGame();

		} else {
			checkIfCorrect();
		}

	}

}

