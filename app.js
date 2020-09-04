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

console.log(computerPlay())



