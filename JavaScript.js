// Create variables for computerChoice, userChoice og winner.
let computerChoice; 
let userChoice;
let winner;

// Get computer choice and store it in computerChoice.
function getComputerChoice() {
	let randomInteger = (Math.floor(Math.random() * 3) + 1); // get random number between 0 and 2,9999, convert to integer between 1 and 3 and store in randomInteger.

	// convert randomInteger to strings and store in computerChoice
	if ( randomInteger === 1 ) {
		computerChoice = "rock";
	} else if ( randomInteger === 2 ) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}
	return computerChoice;
} // return the string from the function.

// TEST function
getComputerChoice();
console.log(computerChoice);

// Get user choice and store it in userChoice.
// 	Declare variable userInput.
// 	Prompt user for choice.
// 	Store input in userInput.
// 	Make lowercase and store in userChoice.
// 	Validate that choice is either rock, paper or scissors.
// 	If not, print error.
// 	Else return userChoice.
// Draw the winner.
// Print userChoice.
// Print computerChoice.
// Announce the winner.
