const score = { win: 0, lose: 0, tie: 0 };
const buttons = document.querySelectorAll('button');
const results = document.querySelector('div.results');

function getComputerChoice() {
    const listOfOptions = ['ROCK', 'PAPER', 'SCISSORS'];
    const indexChoice =  Math.floor(Math.random() * 3);
    return listOfOptions[indexChoice]
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

function getResult(result) {
    if (result.startsWith('You Win!')) {
        return 'win';
    } else if (result.startsWith('You Lose!')){
        return 'lose';
    } else {
        return 'tie'
    }
}


function displayResult(result, statusResult) {
    const gameResult = document.createElement('p')
    gameResult.textContent = result;
    switch(statusResult) {
        case 'win':
            gameResult.style.color = 'blue'
            break;
        case 'lose':
            gameResult.style.color = 'red'
            break;
    }
    results.appendChild(gameResult);
}

function displayFinalResult() {
    const finalResult = document.createElement('p')
    finalResult.style.fontWeight = 'bold'
    finalResult.textContent = `FINAL SCORE: You [${score.win}] x Computer [${score.lose}] x Tie [${score.tie}]`;
    results.appendChild(finalResult);
}

function updateScore(statusResult) {
    switch(statusResult) {
        case 'win':
            score.win += 1
            break;
        case 'lose':
            score.lose += 1
            break;
        case 'tie':
            score.tie += 1
            break;
    }
    if (score.win == 5 || score.lose == 5) {
        endGame();
    }
    return score;
}

function disableButtons() {
    buttons.forEach((button) => {
        button.setAttribute('disabled', 'disabled');
    });
}

function endGame() {
    disableButtons();
    displayFinalResult();
}

buttons.forEach((button) => {
    const playerChoice = button.id.toUpperCase();
    button.addEventListener('click', () => {
        const result = playRound(playerChoice, getComputerChoice());
        const statusResult = getResult(result)
        displayResult(result, statusResult);
        updateScore(statusResult);
    });
});
