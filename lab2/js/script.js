//Event listener
document.querySelector("#guessButton").addEventListener("click", guess);
let userGuess = document.querySelector("#numberInput").value;
// value is only for input elements

//Global variable
let randomNumber = Math.floor(Math.random() * 99) + 1;
console.log(randomNumber);

let guessCount = 0;

function guess(){
    let userGuess = document.querySelector("#numberInput").value;
    // alert(userGuess);
    // document.querySelector("#userGuesses").textContent += userGuess + " ";
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
        document.querySelector("#hint").textContent = `CONGRATS! Guessed in less than 7 tries.`;
    }else{
        document.querySelector("#hint").textContent = `Guessed Correct!`;
    }
}