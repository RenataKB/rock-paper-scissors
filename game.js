function getComputerChoice() {
    const listOfOptions = ['ROCK', 'PAPER', 'SCISSORS'];
    const indexChoice =  Math.floor(Math.random() * 3);
    return listOfOptions[indexChoice]
}

function isValidOption(option) {
    return (option == 'ROCK' || option == 'PAPER' || option == 'SCISSORS')
}

function getPlayerChoice() {
    while (true) {
        let playerChoice =  prompt('Choose: ROCK, PAPER or SCISSORS?').trim().toUpperCase();
        if (isValidOption(playerChoice)) {
            return playerChoice;
        } else {
            console.log('Invalid Option!');
        }
    };
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = `Tie! You both choose ${playerSelection}`
    } else {
        switch (playerSelection) {
            case 'ROCK':
                (computerSelection == 'SCISSORS')
                ? result = 'You Win! ROCK beats SCISSORS'
                : result = 'You Lose! PAPER beats ROCK'
                break
            case 'PAPER':
                (computerSelection == 'ROCK')
                ? result = 'You Win! PAPER beats ROCK'
                : result = 'You Lose! SCISSORS beats PAPER'
                break
            case 'SCISSORS':
                (computerSelection == 'PAPER')
                ? result = 'You Win! SCISSORS beats PAPER'
                : result = 'You Lose! ROCK beats SCISSORS'
                break
        }
    }
    return result;
}

function updateScore(result, score) {
    if (result.startsWith('You Win!')) {
        score.win += 1;
    } else if (result.startsWith('You Lose!')){
        score.lose += 1; 
    } else {
        score.tie += 1;
    }
    return score;
}

function displayResult(score) {
    const gameResult = (score.win > score.lose)
    ? 'You Win!'
    : (score.win < score.lose)
    ? 'You Lose!'
    : 'Tie!'
    console.table(score);
    alert(`Final score => You: ${score.win} x Computer: ${score.lose} - ${gameResult}`);

}

function game(numberOfRounds=5) {
    const score = { win: 0, lose: 0, tie: 0 };
    for (let round = 0; round < numberOfRounds; round++) {
        let roundResult = playRound(getPlayerChoice(), getComputerChoice());
        updateScore(roundResult, score);
        console.log(roundResult);
    }
    displayResult(score);
}

game();
