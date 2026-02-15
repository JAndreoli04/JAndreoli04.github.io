//Global variables
let randomNumber;
let attempts = 0;
let numGuessesLeft;

let wins=0;
let losses=0;

//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);


initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";
   document.querySelector("#guessBtn").style.display = "inline";

   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus();
   playerGuess.value = "";

   let feedback = document.querySelector("#feedback");
   feedback.textContent = "";

   let guesses = document.querySelector("#guesses");
   guesses.textContent = "";

    numGuessesLeft = 7;
    document.querySelector("#guessesLeft").textContent = "Guesses Remaining: 7";

    document.querySelector("#wins").textContent = `Wins: ${wins}`;
    document.querySelector("#losses").textContent = `Losses: ${losses}`;
}

function checkGuess(){
    let feedback = document.querySelector("#feedback");
    let guess = document.querySelector("#playerGuess").value;
    feedback.textContent = "";
    console.log("Player guess: " + guess);
    if(guess < 1 || guess > 99){
        feedback.textContent= "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    numGuessesLeft --;
    console.log("Attempts:" + attempts);
    feedback.style.color = "orange";
    if(guess == randomNumber){
        feedback.textContent = "You guessed it! You Won!";
        feedback.style.color = "darkgreen";
        wins++;
        gameOver();
    }else{
        document.querySelector("#guesses").textContent += guess + " ";
        if(attempts == 7){
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
            losses++;
            gameOver();
        } else if ( guess > randomNumber) {
            feedback.textContent = "Guess was high";
        }else{
            feedback.textContent = "Guess was low";
        }
        document.querySelector("#guessesLeft").textContent = "Guesses remaning: "+numGuessesLeft;
    }
}

function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none"; //hide guess button 
    resetBtn.style.display = "inline"; //display reset button
}