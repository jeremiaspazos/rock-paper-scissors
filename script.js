
let playerSelection = ""
let computerCount = 0
let playerCount = 0
function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
    }
  }
function playRound (playerSelection){
    const computerChoice = getRandomChoice();
    document.getElementById("result-machine").innerHTML = computerChoice
        if(computerChoice === playerSelection){
            document.getElementById("winner").innerHTML = "Tie"
} else if((computerChoice === "Rock" && playerSelection === "Scissors") || (computerChoice ==="Paper" && playerSelection === "Rock") || (computerChoice==="Scissors" && playerSelection==="Paper")){
    document.getElementById("winner").innerHTML = "You lose!"
 return computerCount += 1  
} else {
    document.getElementById("winner").innerHTML = "You win!"
   return playerCount+=1
}

}


 document.getElementById("rock").addEventListener("click", () => {
        playerSelection = "Rock", 
        document.getElementById("result-human").innerHTML = playerSelection,
        playRound(playerSelection);
 })
 document.getElementById("scissors").addEventListener("click", () => {
    playerSelection = "Scissors", 
    document.getElementById("result-human").innerHTML = playerSelection,
    playRound(playerSelection);
 
})
document.getElementById("paper").addEventListener("click", () => {
    playerSelection = "Paper", 
    document.getElementById("result-human").innerHTML = playerSelection,
    playRound(playerSelection);
})

