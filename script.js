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
let userWin = 0;
let userLoss = 0;
let userTie = 0;
let userRock = 0;
let userPaper = 0;
let userScissors = 0;

function checkResults(userChoice, computerChoice) {
    // if (userChoice ==='R') {
    //     userRock++;
    // } else if (userChoice ==='P') {
    //     userPaper++;
    // } else if (userChoice ==='S') {
    //     userScissors++;
     if (userChoice ==='R' && computerChoice ==='S') {
        console.log('Win');
        userWin++;
        userRock++;
    } else if (userChoice ==='P' && computerChoice ==='R') {
        console.log('Win');
        userWin++;
        userPaper++;
    } else if (userChoice ==='S' && computerChoice ==='P') {
        console.log('Win');
        userWin++;
        userScissors++;
    } else if (userChoice ==='R' && computerChoice ==='P') {
        console.log('Loss');
        userLoss++;
        userRock++;
    } else if (userChoice ==='P' && computerChoice ==='S') {
        console.log('Loss');
        userLoss++;
        userPaper++;
    } else if (userChoice ==='S' && computerChoice ==='R') {
        console.log('Loss');
        userLoss++;
        userScissors++;
    // } else if (userChoice === computerChoice) {
    //     userTie++;
    // }

    } else if (userChoice ==='R' && computerChoice ==='R') {
        console.log('Win');
        userTie++;
        userRock++;
    } else if (userChoice ==='P' && computerChoice ==='P') {
        console.log('Win');
        userTie++;
        userPaper++;
    } else if (userChoice ==='S' && computerChoice ==='S') {
        console.log('Win');
        userTie++;
        userScissors++;
}
}
   
    

function userEntry() {
    const userPick = prompt('Type R, P, or S')
    if (userPick === null || undefined) {
        alert('Game Cancelled. Please type R, P or S to play.')
    } else if (userPick !== 'R' && userPick !== 'P' && userPick !== 'S') {
        alert('Invalid Selection. Please Type R, P, or S to play.');
        return userEntry(); // Ask again if invalid
    } else {
        return userPick;
    }
}

    function computerEntry() {
        const options = ['R', 'P', 'S'];
        const randomIndex = Math.floor(Math.random() * 2);
        const randomSelection = options[randomIndex];
        return randomSelection;
    }

    function runGame() {
        const userPick = userEntry();
        const computerPick = computerEntry();
        console.log('Game on!');
        console.log(`You chose ${userPick}, the computer chose ${computerPick}`);
        console.log(`You have chosen rock ${userRock} times, paper ${userPaper} times, and scissors ${userScissors} times.`);
        console.log(`You have won ${userWin} times, lost ${userLoss} times, and tied ${userTie} times.`);
        // checkResults(userPick, computerPick);
    }


    // runGame();
    

    function displayResults () {
        if (userChoice ==='R' && computerChoice ==='S'|| (userChoice ==='P' && computerChoice==='R' || (userChoice ==='S' && computerChoice ==='P'))) {
            alert('You Win! Congratulations!')
        } else if (userChoice ==='R' && computerChoice ==='P'|| (userChoice ==='P' && computerChoice==='S' || (userChoice ==='S' && computerChoice ==='R'))) {
            alert('You Lose! Better Luck Next Time.')
        } else {
            alert("It's a tie! Try again!")
        } 
    }

    // displayResults ();




