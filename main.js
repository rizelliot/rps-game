let computerChoice = '';
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber) {
        case 1:
            computerChoice =  'rock';
            break;
            case 2:
                computerChoice = 'paper';
                break;
                case 3:
                    computerChoice = 'scissors';
                    break
    }
    return computerChoice;
}


function getPlayerChoice() {
    playerChoice = prompt('Enter your option!').toLowerCase();
    return playerChoice;
    
}


function playMatch() {
    getPlayerChoice()
    getComputerChoice()
    

    if (playerChoice == computerChoice) {
        alert("it's a tie!")
        
    }  else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        alert("you win, scissors beat paper!")
        playerScore = playerScore + 1;
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        alert("you lost, paper lose to scissors!")
        computerScore = computerScore + 1;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        alert("you win, paper beat rock!")
        playerScore = playerScore + 1;
    } 
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        alert("you lost, rock lose to paper!")
        computerScore = computerScore + 1;
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        alert("you win, rock beat scissors!")
        playerScore = playerScore + 1;
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        
        alert("you lost, scissors lose to rock!")
        computerScore = computerScore + 1;
    }
    
    
    
}


function game() {
    for (let i = 0; i < 5; i++) {
     playMatch()
    }
    if (playerScore == computerScore) {
        console.log(`GAME OVER! It\'s a tie! ${playerScore} to ${computerScore}!`)
    } else if (playerScore > computerScore) {
        console.log(`GAME OVER! You win ${playerScore} to ${computerScore}!`);
    } else {
        console.log(`GAME OVER! You lose ${computerScore} to ${playerScore}!`)
    }


}



game();

