let wins = 0;
let losses = 0;

function getUserChoice(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    updateScore(result);
    displayResult(result, userChoice, computerChoice);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function updateScore(result) {
    if (result === "You win!") {
        wins++;
    } else if (result === "You lose!") {
        losses++;
    }

    document.getElementById('winCount').innerText = wins;
    document.getElementById('lossCount').innerText = losses;
}

function displayResult(result, userChoice, computerChoice) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>${result}</p>
        <p>Your choice: ${userChoice}</p>
        <p>Computer's choice: ${computerChoice}</p>
    `;
}

document.getElementById('rock').addEventListener('click', function () {
    getUserChoice('rock');
});

document.getElementById('paper').addEventListener('click', function () {
    getUserChoice('paper');
});

document.getElementById('scissors').addEventListener('click', function () {
    getUserChoice('scissors');
});
