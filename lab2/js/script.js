let wins = 0;
let losses = 0;
let randomNumber;
let guessCount = 0;
document.querySelector("#resetBtn").style.display = "none";
//Event listener
document.querySelector("#guessButton").addEventListener("click", guess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

let userGuess = document.querySelector("#numberInput").value;
// value is only for input elements

initializeGame();


function guess(){
    let userGuess = document.querySelector("#numberInput").value;
    // alert(userGuess);
    // document.querySelector("#userGuesses").textContent += userGuess + " ";
    if (userGuess > 99 || userGuess < 1){
        alert("Guess a number between 1 and 99");
        return;
    }
    guessCount++;
    document.querySelector("#userGuesses").textContent += `${userGuess} `;

    // document.querySelector("#userGuesses").style.color = "red";

    if(userGuess > randomNumber){
        document.querySelector("#hint").style.color = "red";
        document.querySelector("#hint").textContent = `Too High`;
    }else if(userGuess < randomNumber){
        document.querySelector("#hint").style.color = "blue";
        document.querySelector("#hint").textContent = `Too Low`;
    }else if (guessCount<= 7){
        document.querySelector("#hint").textContent = `CONGRATS! Guessed the number in ${guessCount} tries`;
        wins++;
        endGame();
        return;
    }
    if(guessCount >= 7){
        document.querySelector("#hint").textContent = `You lost`;
        document.querySelector("#hint").style.color = "red";
        losses--;
        endGame();
    }
}

function initializeGame(){
    guessCount = 0;
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log(randomNumber);
    document.querySelector("#resetBtn").style.display = "none";
    document.querySelector("#guessButton").style.display = "inline";

    document.querySelector("#wins").textContent = `Wins: ${wins}`;
    document.querySelector("#losses").textContent = `Losses: ${losses}`;

    document.querySelector("#userGuesses").textContent = "";
}

function endGame(){
    document.querySelector("#guessButton").style.display = "none";
    document.querySelector("#resetBtn").style.display = "inline";
}