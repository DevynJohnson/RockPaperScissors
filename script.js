// How is Rock, Paper, Scissors played?
// User chooses Rock (R), Paper (P), or Scissors (S)
// Computer chooses R, P, or S
// Outcome conditions: Win, Lose, or Tie

// Win conditions:
// IF User chooses R, computer S
// IF User chooses P, computer R
// IF User chooses S, computer P

// Lose conditions:
// IF User chooses R, computer P
// IF User chooses P, computer S
// IF User chooses S, computer R

// Tie conditions:
// IF User chooses R, computer R
// IF User chooses P, computer P
// IF User chooses S, computer S

// IF Win
// Win score ++

// IF Loss
// Loss score ++

// IF Tie
// Tie score ++

// Display score

// Show how many times user has chosen R, P, or S

//Confirm to play again
// Score and choice tracking
let userWin = 0;
let userLoss = 0;
let userTie = 0;
let userRock = 0;
let userPaper = 0;
let userScissors = 0;



function checkResults(userChoice, computerChoice) {
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Win');
        userWin++;
        userRock++;
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log('Win');
        userWin++;
        userPaper++;
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        console.log('Win');
        userWin++;
        userScissors++;
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        console.log('Loss');
        userLoss++;
        userRock++;
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        console.log('Loss');
        userLoss++;
        userPaper++;
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        console.log('Loss');
        userLoss++;
        userScissors++;
    } else {
        console.log('Tie');
        userTie++;
        if (userChoice === 'rock') userRock++;
        else if (userChoice === 'paper') userPaper++;
        else if (userChoice === 'scissors') userScissors++;
    }
}

// This section has been commented out as user no longer types selection, but instead clicks an image
// function userEntry() { // Ask user for input, now selected by clicking an image - removed prompt as user no longer types selection
//     // const userPick = prompt('Type R, P, or S');
//     if (userPick === null || userPick === undefined) {
//         alert('Game Cancelled. Please type R, P or S to play.');
//         return null;
//     } else if (userPick !== 'R' && userPick !== 'P' && userPick !== 'S') {
//         alert('Invalid Selection. Please Type R, P, or S to play.');
//         return userEntry(); // Recursively ask again if invalid
//     } else {
//         return userPick;
//     }
// }

function computerEntry() { // Randomly generate computer choice
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);  // Fix the range here (0-2)
    return options[randomIndex];
}

function runGame() { // Main function to run the game
    // const userPick = userEntry();
    document.querySelector(".rpsContainer").style.display = "flex"; // Setting display to flex to show choices, as initial display set to none
    // if (userPick === null) return; // Exit if user canceled
    const computerPick = computerEntry();
    // console.log(`Computer chose ${computerPick}`); // Not showing computer choice to user, line has been commented out but will remain in code for debugging purposes
    window.computerPick = computerPick; // Store computer choice for later use
 } 
    
function userChoice(choice) {
    console.log(`userChoice called with choice: ${choice}`); // Debugging log
    document.querySelector(".rpsContainer").style.display = "none"; // Hiding choices after selection

    // Retrieve the computer's choice and proceed with the game
    const comptuerPick = window.computerPick; // Get stored computer choice
    console.log(`You chose: ${choice}, the computer chose: ${comptuerPick}`); // Logging choices for debugging

    checkResults(choice, comptuerPick); // Check the result to determine outcome
    updateScoreDisplay(); // Update the score display on the HTML page
    displayResults(choice, comptuerPick); // Display the result on HTML page
}

function displayResults(userChoice, computerChoice) { // Display the result of the game on DOM inside the div with id 'resultsMessage'
    const resultMessage = document.getElementById('resultsMessage');
    document.getElementById('resultsMessage').style.display = 'block'; // Display the results message, resultsMessage has initial display set to none
    
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        resultMessage.textContent = ` You chose ${userChoice} and the computer selected ${computerChoice}. You Win!`;
    } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
               (userChoice === 'paper' && computerChoice === 'scissors') ||
               (userChoice === 'scissors' && computerChoice === 'rock')) {
        resultMessage.textContent = `You chose ${userChoice} and the computer selected ${computerChoice}. You Lose!`;
    } else {
        resultMessage.textContent = `You both chose ${userChoice}. It's a tie! Try again!`;
    }
}

function updateScoreDisplay() { // Update the score display on DOM
    // Update User Scores
    document.querySelector('#userScores p:nth-child(1)').textContent = `Wins: ${userWin}`;
    document.querySelector('#userScores p:nth-child(2)').textContent = `Losses: ${userLoss}`;
    document.querySelector('#userScores p:nth-child(3)').textContent = `Ties: ${userTie}`;

    // Update User Choices
    document.querySelector('#userChoices p:nth-child(1)').textContent = `Rock: ${userRock}`;
    document.querySelector('#userChoices p:nth-child(2)').textContent = `Paper: ${userPaper}`;
    document.querySelector('#userChoices p:nth-child(3)').textContent = `Scissors: ${userScissors}`;
}