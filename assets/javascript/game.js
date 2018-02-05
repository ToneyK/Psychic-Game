var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessesSoFar = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
document.onkeyup = function (event) {
	var humanGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	guessesSoFar.push(humanGuess);
	if (humanGuess == computerGuess) {
		wins++;
		alert('You Won!');
		guessesLeft = 5;
		guessesSoFar.length = 0;
	}
	else if (guessesLeft == 0) {
		losses++;
		alert('You lost. Try again.');
		guessesLeft = 5;
		guessesSoFar.length = 0;
	}
	else if (humanGuess !== computerGuess) {
		guessesLeft--;
	}

	var html = "<h1>The Psychic Game</h1>" +
		"<p>Guess what letter I'm thinking of!</p>" +
		"<p>Wins: " +
		wins +
		"</p>" +
		"<p>Losses: " +
		losses +
		"</p>" +
		"<p>Guesses Left: " +
		guessesLeft +
		"</p>" +
		"<p>Your Guesses so far: " +
		guessesSoFar +
		"</p>"
		;

	document.querySelector('#gameContent').innerHTML = html;
}