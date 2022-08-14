const choices = ["paper", "rock", "scissors"];
const random = parseInt(Math.floor(Math.random() * 3));
const computerChoice = choices[random];
let playerScore = 0;
let computerScore = 0;
let tie = 0;
console.log(choices)
console.log(random)
console.log(computerChoice)
let paper = choices[0];
let rock = choices[1];
let scissors = choices[2];

function getComputerChoice() {
	return choices[random];
}
console.log(`The Computer choice was: ${getComputerChoice()}`);

function playRound(playerSelection, computerSelection) {
	console.log("playerScore: " + playerScore);
	console.log("ComputerScore: "+computerScore);
	computerSelection = computerChoice;
	
	playerSelection = prompt("Please choice: rock,paper,scissors").toLowerCase();
	getComputerChoice();
	console.log("playerSelection: " + playerSelection);
	if (playerSelection === "rock" && computerSelection === "rock") {
		tie ++;
		console.log( `It's a tie. ${playerSelection} ties ${computerSelection}`);
		console.log("playerScore: "+playerScore);
		console.log("ComputerScore: "+computerScore)
		console.log("Tie: " +tie);
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		computerScore ++;
		
		console.log( `You lose! ${computerSelection} beats ${playerSelection}`);
		console.log("ComputerScore: " +computerScore);
		console.log("playerScore: " + playerScore)
		console.log("Tie: " +tie);
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		playerScore ++;
		
		console.log(`You win! ${playerSelection} beats ${computerSelection}`);
		console.log("playerScore: " + playerScore);
		console.log("ComputerScore: " + computerScore);
		console.log("Tie: " +tie);
	} else if (playerSelection === "paper" && computerSelection === "paper") {
		tie ++;
		console.log( `It's a tie. ${playerSelection} ties ${computerSelection}`);
		console.log("playerScore: "+playerScore);
		console.log("ComputerScore: "+computerScore)
		console.log("Tie: " +tie);
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		playerScore ++;
		
		console.log(`You win! ${playerSelection} beats ${computerSelection}`);
		console.log("playerScore: " + playerScore);
		console.log("ComputerScore: " + computerScore);
		console.log("Tie: " +tie);

	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		computerScore ++;
		
		console.log( `You lose! ${computerSelection} beats ${playerSelection}`);
		console.log("ComputerScore: " +computerScore);
		console.log("playerScore: " + playerScore)
		console.log("Tie: " +tie);
	} else if (playerSelection === "scissors" && computerSelection === "scissors") {
		tie ++;
		console.log( `It's a tie. ${playerSelection} ties ${computerSelection}`);
		console.log("playerScore: "+playerScore);
		console.log("ComputerScore: "+computerScore)
		console.log("Tie" +tie);
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		computerScore++;
		console.log( `You lose! ${computerSelection} beats ${playerSelection}`);
		console.log("ComputerScore: " +computerScore);
		console.log("playerScore: " + playerScore)
		console.log("Tie: " +tie);
	} else {
		playerScore ++;
		
		console.log(`You win! ${playerSelection} beats ${computerSelection}`);
		console.log("playerScore: " + playerScore);
		console.log("ComputerScore: " + computerScore);
		console.log("Tie: " +tie);
	}


}

function game() {
	for (let i = 0; i < 5; i++) {
		playRound();
	}
}

game();
