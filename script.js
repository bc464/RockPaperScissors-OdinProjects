const choices = ["paper", "rock", "scissors"];
let playerScore = 0;
let computerScore = 0;
let tie = 0;
let gameBoxes = document.querySelectorAll(".game-box");
let paperImg = "images/paper-2.png";
let rockImg = "images/rock-1.png";
let scissorsImg = "images/scissors-3.png";
let computerChoose = document.querySelector(".computer-choice");
let playerChoice = document.querySelector(".player-choice");
let result = document.querySelector(".result");
let playerScoreContent = document.querySelector(".playerScore");
let computerScoreContent = document.querySelector(".computerScore");
let tieContent = document.querySelector(".tie");
let resetBtn = document.querySelector(".reset-btn");

// COMPUTER CHOICE FUNCTION

function getComputerChoice() {
	
	const random = Math.floor(Math.random()* choices.length );
	let computerChoice = choices[random];
}

// CLICKING ON PAPER,ROCK,SCISSORS

gameBoxes.forEach((gameBox) => { 
	gameBox.addEventListener("click", playRound)});

// MAIN FUNCTION PLAYRound FUNCTION
			
function playRound(playerSelection, computerSelection) {
	playerChoice.textContent = " ";
	computerChoose.textContent = " ";
	const random = Math.floor(Math.random()* choices.length );	
	playerImg = document.createElement("img");
	playerSelection = this.id;
// ADDING IMAGE TO ID
	if (playerSelection === "rock") {
			playerImg.src = rockImg;
				playerImg.style.width = "100%"; 
				playerChoice.append(playerImg)
			} if (playerSelection === "paper") {
				
				playerImg.src = paperImg;
				playerImg.style.width = "100%"; 
				playerChoice.append(playerImg)
			} if (playerSelection === "scissors") {
				
				playerImg.src = scissorsImg;
				playerImg.style.width = "100%"; 
				playerChoice.append(playerImg)
			} 
 //COMPUTER CHOICE AND IMAGE TO CHOICE 
			
	let computerChoice = choices[random];
	computerSelection = computerChoice;
	computerImg = document.createElement("img");
			
			if (computerSelection === "rock") {
				
				computerImg.src = rockImg;
				computerImg.style.width = "100%";
				computerChoose.append(computerImg)
			} if (computerSelection === "paper") {
				
				computerImg.src = paperImg;
				computerImg.style.width = "100%";
				computerChoose.append(computerImg)
			} if (computerSelection === "scissors") {
				
				computerImg.src = scissorsImg;
				computerImg.style.width = "100%";
				computerChoose.append(computerImg)
			} 
// MAIN LOGIC 
	
	if (playerSelection === "rock" && computerSelection === "rock" ||playerSelection === "paper" && computerSelection === "paper"|| playerSelection === "scissors" && computerSelection === "scissors") {
				tie ++;
				result.textContent = `Its a tie. ${playerSelection} ties ${computerSelection}`;
				
				tieContent.textContent = tie;
		} else if (playerSelection === "rock" && computerSelection === "paper") {
				computerScore ++;
				
				result.textContent =  `You lose! ${computerSelection} beats ${playerSelection}`;
				computerScoreContent.textContent = computerScore;
				
		} else if (playerSelection === "rock" && computerSelection === "scissors") {
				playerScore ++;
				
				result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
				playerScoreContent.textContent = playerScore;
				
			
		} else if (playerSelection === "paper" && computerSelection === "rock") {
				playerScore ++;
				
				result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
				playerScoreContent.textContent = playerScore;
				

		} else if (playerSelection === "paper" && computerSelection === "scissors") {
				computerScore ++;
				
				result.textContent =  `You lose! ${computerSelection} beats ${playerSelection}`;
				computerScoreContent.textContent = computerScore;
				
			
	   } else if (playerSelection === "scissors" && computerSelection === "rock") {
				computerScore++;
				result.textContent =  `You lose! ${computerSelection} beats ${playerSelection}`;
				computerScoreContent.textContent = computerScore;
				
		} else {
				playerScore ++;
				
				result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
				playerScoreContent.textContent = playerScore;
				
			}
		};
// RESET BUTTON CLICK FUNCTION
resetBtn.addEventListener("click", function(e) {
	e.preventDefault();

	playerChoice.textContent = " ";
	computerChoose.textContent = " ";
	result.textContent = " ";
	playerScoreContent.textContent = "";
	computerScoreContent.textContent = "";
	tieContent.textContent = "";
	playerScore = 0;
	computerScore = 0;
	tie = 0;
});