// Function to roll a single die and return a random number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to roll all 5 dice and display their values
function rollDice() {
    const diceContainer = document.getElementById('dice-container');
    diceContainer.innerHTML = ''; // Clear the dice container

    for (let i = 0; i < 5; i++) {
        const dieValue = rollDie();
        const dieElement = document.createElement('div');
        dieElement.classList.add('dice');
        dieElement.textContent = dieValue;
        diceContainer.appendChild(dieElement);
    }
}

// Event listener for the "Roll Dice" button
document.getElementById('roll-button').addEventListener('click', rollDice);

