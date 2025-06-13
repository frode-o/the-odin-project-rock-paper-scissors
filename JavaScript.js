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
// getComputerChoice();
// console.log(computerChoice);

// Get user choice and store it in userChoice.
function getUserChoice() {
    userChoice = prompt("Please select 'rock', 'paper', or 'scissors'");  // 	Prompt user for choice. Store input in userInput.
    userChoice = userChoice.toLowerCase();  // 	Make lowercase and store in userChoice.
    return userChoice;
}
// getUserChoice();
// console.log(userChoice);


// playRound(computerChoice, userChoice);
// console.log(winner); // Announce the winner.
// console.log("Your score is: " + userScore); // Print userScore
// console.log("Computer score is: " + computerScore); // Print computerScore

function playGame() {

    let userScore = 0;
    let computerScore = 0;

    // Draw the winner in a round 
    function playRound(computerChoice, userChoice) {
      if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")) {
        userScore += 1;  // Increment users score
        winner = "You win! " + userChoice + " " + "beats " + computerChoice + ".";  // Announce player as winner
        } else if ((computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "rock")) {
        computerScore += 1;  // Increment computers score
        winner = "You lose! " + computerChoice + " " + "beats " + userChoice + ".";  // Announce computer as winner
        } else {
        winner = "It\'s a boring draw! You both selected: " + userChoice;
        } // Announce draw
      return userScore, computerScore, winner;
    }
    // Play round 1
    getUserChoice();
    getComputerChoice();
    playRound(computerChoice, userChoice);
    console.log(winner);
    console.log("Your score: " + userScore + ". Computer score: " + computerScore + ".");

    // Play round 2
    getUserChoice();
    getComputerChoice();
    playRound(computerChoice, userChoice);
    console.log(winner);
    console.log("Your score: " + userScore + ". Computer score: " + computerScore + ".");

    // Play round 3
    getUserChoice();
    getComputerChoice();
    playRound(computerChoice, userChoice);
    console.log(winner);
    console.log("Your score: " + userScore + ". Computer score: " + computerScore + ".");

    // Play round 4
    getUserChoice();
    getComputerChoice();
    playRound(computerChoice, userChoice);
    console.log(winner);
    console.log("Your score: " + userScore + ". Computer score: " + computerScore + ".");

    // Play round 5
    getUserChoice();
    getComputerChoice();
    playRound(computerChoice, userChoice);
    console.log(winner);
    console.log("Your score: " + userScore + ". Computer score: " + computerScore + ".");

    return userScore, computerScore;
}
playGame();
