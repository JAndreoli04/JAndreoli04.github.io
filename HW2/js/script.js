let deck = ["A",2,3,4,5,6,7,8,9,10, "J", "Q", "K"];
let generatedDeck = [];
let wins = 0;
let losses = 0;
let ties = 0;
let dealerCard1;
let dealerCard2;
let dealerTotal ;
let userCard1;
let userCard2;
let userTotal;
document.querySelector("#restartBtn").addEventListener("click", initalizeGame);
document.querySelector("#standBtn").addEventListener("click", endDelearTurn);
document.querySelector("#hitBtn").addEventListener("click", hit);
initalizeGame();
function generateDeck(){
    let index =0;
    for(let i of deck){
        for(let x=0; x<4; x++){
            generatedDeck[index] =i;
            index++;
        }
    }
    generatedDeck = _.shuffle(generatedDeck);
}
function initalizeGame(){
    document.querySelector("#restartBtn").style.display = "none";
    document.querySelector("#hitBtn").style.display = "none";
    document.querySelector("#standBtn").style.display = "none";
    document.querySelector("#results").style.display = "none";
    let userTotalText = document.querySelector("#userTotal");
    let userCardText = document.querySelector("#userCards");
    userCardText.textContent = "Your cards: "
    userTotalText.textContent = `Your total: 0`;
    generateDeck();
    console.log(generatedDeck);
    dealerCard1 = generatedDeck.pop();
    dealerCard2 = generatedDeck.pop();
    dealerTotal = calcScore(dealerCard1, dealerTotal) + calcScore(dealerCard2, dealerTotal);
    document.querySelector("#dealerOutput").textContent = `Dealer cards: ${dealerCard1}`;
    setTimeout( () => { document.querySelector("#dealerOutput").textContent = `Dealer cards: ${dealerCard1} , *`;}, 500);
    let dealerInitalTotal = calcScore(dealerCard1, dealerTotal);
    document.querySelector("#dealerTotal").textContent = `Dealer total: ${dealerInitalTotal}`;
    userCard1 = generatedDeck.pop();
    userCard2 = generatedDeck.pop();
    setTimeout( () => {userCardText.textContent = `Your cards: ${userCard1}`}, 1000);
    setTimeout( () => {userCardText.textContent = `Your cards: ${userCard1} , ${userCard2}`}, 1500);
    userTotal = calcScore(userCard1, userTotal);
    userTotal += calcScore(userCard2, userTotal);
    setTimeout( () => {userTotalText.textContent = `Your total: ${userTotal}`}, 1500);
    setTimeout(() => {
        let blackJack = checkDealForBlackJack(userCard1, userCard2, dealerCard1, dealerCard2)
        if (!blackJack){showOptions()}
    }, 2000);
}
function endGame(){
    document.querySelector("#restartBtn").style.display = "inline";
    document.querySelector("#hitBtn").style.display = "none";
    document.querySelector("#standBtn").style.display = "none";
    document.querySelector("#results").style.display = "inline";
    document.querySelector("#gamecount").textContent = `Wins: ${wins} | Ties: ${ties} | Losses: ${losses}`;
}
function endDelearTurn(){
    let dealerOutput = document.querySelector("#dealerOutput");
    dealerOutput.textContent = `Dealer cards: ${dealerCard1} , ${dealerCard2}`;
    while(dealerTotal < 17){
        let nextCard = generatedDeck.pop();
        dealerOutput.textContent += ` , ${nextCard}`;
        dealerTotal += calcScore(nextCard, dealerTotal);
    }
    document.querySelector("#dealerTotal").textContent = `Dealer total: ${dealerTotal}`;
    if(dealerTotal > 21){
        wins++;
        document.querySelector("#results").textContent = `You win!`;
        endGame();
    }else{
        decideWinner();
    }
}
function decideWinner(){
    let resultOutput = document.querySelector("#results");
    if(dealerTotal == userTotal){
        resultOutput.textContent = `Tie game`;
        ties++;
    }else if(userTotal>dealerTotal){
        wins++;
        resultOutput.textContent = `You win!`;
    }else{
        losses++;
        resultOutput.textContent = `Sorry you lose!`
    }
    endGame();
}
function showOptions(){
    document.querySelector("#hitBtn").style.display = "inline";
    document.querySelector("#standBtn").style.display = "inline";
}
function hit(){
    let nextCard = generatedDeck.pop();
    userTotal += calcScore(nextCard, userTotal);
    document.querySelector("#userCards").textContent += ` , ${nextCard}`;
    document.querySelector("#userTotal").textContent = `Your total: ${userTotal}`;
    if(userTotal > 21){
        losses++;
        document.querySelector("#results").textContent = `Sorry you lose!`;
        endGame();
    }
}
function calcScore(card, score){
    if( card == "J" || card == "Q" || card == "K"){
        return 10;
    }else if( card == "A"){
        if(score < 11){
            return 11;
        }else{
            return 1;
        }
    }else{
        return card;
    }
}
function checkBlackJack(card1, card2){
    if((card1 == "A" && card2 == "J") || (card1 == "A" && card2 == "Q") || (card1 == "A" && card2 == "K") || (card1 == "A" && card2 == 10)){
        return true;
    }else if ((card2 == "A" && card1 == "J") || (card2== "A" && card1 == "Q") || (card2 == "A" && card1 == "K" || (card2 == "A" && card1 == 10))){
        return true;
    }
    return false;
}
function checkDealForBlackJack(userC1, userC2, dealerC1, dealerC2){
    let output = document.querySelector("#results");
    let dealerOutput = document.querySelector("#dealerOutput");
    let userTotal = document.querySelector("#userTotal");
    if(checkBlackJack(userC1, userC2) && checkBlackJack(dealerC1, dealerC2)){
        output.textContent = `Tie game`;
        ties++;
        dealerOutput.textContent = `Dealer cards: ${dealerC1} , ${dealerC2}`;
        userTotal.textContent = `Your total: 21`;
        endGame();
        return true;
    }else if(checkBlackJack(userC1, userC2)){
        output.textContent = 'BLACK JACK! You win!';
        userTotal.textContent = `Your total: 21`;
        wins++;
        endGame();
        return true;
    }else if(checkBlackJack(dealerC1, dealerC2)){
        output.textContent = "Dealer Black Jack. You lose";
        dealerOutput.textContent = `Dealer cards: ${dealerC1} , ${dealerC2}`;
        losses++;
        endGame();
        return true;
    }
    return false;
}