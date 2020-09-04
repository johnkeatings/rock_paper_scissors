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

const playRound = (playerSelection, computerSelection) => {
    // player makes selection typing in the desired play
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    // compare the answer to the randomly generated computer play and return outcome message
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It is a tie!'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It is a tie!'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It is a tie!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose.'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose.'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose.'
    }
}

console.log(playRound('Rock', computerPlay()))
