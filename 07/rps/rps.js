/* Assumptions

    1. Prompt user for input
    2. Get computers choice which is random
    3. Compares computer input with users
    4. Give feedback to user
    5. Asks user if they want to continue or end the game

*/

function rockPaperScissorsGame() {
    console.log("⚡️Starting Rock Paper Scissors Game...");

    const userChoicePrompt = prompt("Enter your choice (rock, paper, scissors)");
    const userChoice = userChoicePrompt.toLowerCase();

    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        default:
            computerChoice = "scissors";
    }

    console.log("User picked", userChoice);
    console.log("Computer picked", computerChoice);

    if (
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("The User won");
    } else if (userChoice === computerChoice) {
        console.log("The game is a Tie");
    } else if (
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log("The Computer won");
    } else {
        console.log("Kindly check user input as the system did not understand it");
    }

    const playAgainPrompt = prompt("Would you like to go again? (yes/no)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if (playAgain === "yes") {
        rockPaperScissorsGame();
    } else {
        console.log("Thanks for playing! See you again next time");
    }
}

// Start This Game



function playGuessingGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let numberOfTries = 0;

    let userGuess;
    console.log("Welcome to the number guessing game");
    console.log("Try to guess a number between 1 - 10");

    do {
        userGuess = Number(prompt("Enter your guess"));
        numberOfTries++;
        if (userGuess == randomNumber) break;
        else if (userGuess > randomNumber) console.log("Number is too high, try again");
        else if (userGuess < randomNumber) console.log("Number is too low, try again");
        else console.log("Invalid input");
    } while (userGuess !== randomNumber);

    console.log(`You got the number in ${numberOfTries} tries`);

    const retryPrompt = prompt("Would you like to go again? (yes/no)");
    const userAnswerToRetry = retryPrompt ? retryPrompt.toLowerCase() : "no"

    if (userAnswerToRetry === "yes") playGuessingGame();
}

playGuessingGame();