const rockButton = document.querySelector('#rock-btn')
const paperButton = document.querySelector('#paper-btn')
const scissorsButton = document.querySelector('#scissors-btn')
const resultsDiv = document.createElement('div')
const score = document.createElement('p')
const result = document.createElement('p')
container.appendChild(resultsDiv)
resultsDiv.appendChild(score)
resultsDiv.appendChild(result)

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

        computerSelection = computerSelection.toLowerCase()

        if (playerSelection === 'rock' && computerSelection === 'rock') {
            result.textContent = 'It is a tie!'
        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
            result.textContent = 'It is a tie!'
        } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            result.textContent = 'It is a tie!'
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore = playerScore += 1
            result.textContent = 'You win!'
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore = playerScore += 1
            result.textContent = 'You win!'
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore = playerScore += 1
            result.textContent = 'You win!'
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore = computerScore += 1
            result.textContent = 'You lose.'
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore = computerScore += 1
            result.textContent = 'You lose.'
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore = computerScore += 1
            result.textContent = 'You lose.'
        }

        if (playerScore === 5 && computerScore < 5) {
            result.textContent = 'You win the round!'
        } else if (computerScore === 5 && playerScore < 5) {
            result.textContent = 'You have lost the round.'
        }
        
    }

    rockButton.addEventListener('click', (e) => {
        playerSelection = 'rock'
        playRound(playerSelection, computerPlay())
        score.textContent = `You: ${playerScore} Computer: ${computerScore}`
    })

    paperButton.addEventListener('click', (e) => {
        playerSelection = 'paper'
        playRound(playerSelection, computerPlay())
        score.textContent = `You: ${playerScore} Computer: ${computerScore}`
    })

    scissorsButton.addEventListener('click', (e) => {
        playerSelection = 'scissors'
        playRound(playerSelection, computerPlay()) 
        score.textContent = `You: ${playerScore} Computer: ${computerScore}`
    })
}

game()