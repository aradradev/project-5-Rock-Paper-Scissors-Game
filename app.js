const computerScore = document.getElementById('computer-id')
const userScore = document.getElementById('user-id')
const rowsIcon = document.querySelector('.rows-icon')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
const computerDetail = document.querySelector('.computer-detail')
const userDetail = document.querySelector('.user-detail')
const winnerDetail = document.querySelector('.winner-detail')

let userWins = 0;
let compWins = 0;

function playRound(userChoice) {
    const choices = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[random]
    // const userChoice = getUserChoice()

    if (userChoice === computerChoice) {
        winnerDetail.innerHTML = "Tie game";
    } else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        winnerDetail.innerHTML = "You win!";
        userWins += 1;
        userScore.innerHTML = userWins;
    } else {
        winnerDetail.innerHTML = "Computer wins!";
        compWins += 1;
        computerScore.innerHTML = compWins;
    }

    
}

for (let i = 10; i >= 1; i--){
   
    if (userWins === compWins) {
      winnerDetail.innerHTML = "The game is a tie";
    } else {
      const winner = userWins > compWins ? "You" : "Computer";
      winnerDetail.innerHTML = winner + " wins the game!";
    }
    resetGame()
}

function resetGame() {
  // reset the scores to 0
  userWins = 0;
  compWins = 0;
  userScore.innerHTML = userWins;
  computerScore.innerHTML = compWins;

  // clear the winner message
  winnerDetail.innerHTML = "";
}

// function getUserChoice() {
//   // This function gets the user's choice, which you can implement
//   // based on the UI of the webpage

// }

rock.addEventListener('click', function(e) {
    e.preventDefault();
    playRound("rock");
})

paper.addEventListener('click', (e) => {
    e.preventDefault();
    playRound("paper");
})

scissor.addEventListener('click', (e) => {
    e.preventDefault();
    playRound("scissor");
})