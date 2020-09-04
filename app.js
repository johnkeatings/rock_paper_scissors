const computerPlay = () => {
    let min = 1
    let max = 4
    let randomNum = Math.floor(Math.random() * (max - min) + min);

    if (randomNum === 1) {
        return 'Rock'
    } else if (randomNum === 2) {
        return 'Paper'
    } else if (randomNum === 3) {
        return 'Scissors'
    }   
}

const game = () => {

    let playerScore = 0
    let computerScore = 0

    const playRound = (playerSelection, computerSelection) => {

        playerSelection = playerSelection.toLowerCase()
        computerSelection = computerSelection.toLowerCase()


        if (playerSelection === 'rock' && computerSelection === 'rock') {
            return 'It is a tie!'
        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
            return 'It is a tie!'
        } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return 'It is a tie!'
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore = playerScore += 1
            return 'You win!'
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore = playerScore += 1
            return 'You win!'
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore = playerScore += 1
            return 'You win!'
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore = computerScore += 1
            return 'You lose.'
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore = computerScore += 1
            return 'You lose.'
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore = computerScore += 1
            return 'You lose.'
        }
    }

    const message = 'Type rock, paper, or scissors'

    console.log(playRound(prompt(message), computerPlay()))
    console.log(playRound(prompt(message), computerPlay()))
    console.log(playRound(prompt(message), computerPlay()))
    console.log(playRound(prompt(message), computerPlay()))
    console.log(playRound(prompt(message), computerPlay()))
    console.log(`Score \n User: ${playerScore} \n Computer: ${computerScore}`)

    if (playerScore > computerScore) {
        result = 'You win the round!'
    } else if (computerScore > playerScore) {
        result = 'You have lost the round.'
    } else {
        result = 'You have tied the round!'
    }
    console.log(result)
}

game()

