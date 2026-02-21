let gameCount = parseInt(localStorage.getItem('quizAttempts')) || 0;


document.querySelector("button").addEventListener("click", checkQuestions);
document.querySelector("#quizAttempts").textContent = `Quiz Attempts: ${gameCount}`;

let count = 0;
shuffleQ1Choices();
function shuffleQ1Choices() {
    let q1Choices = ["purple", "yellow", "white", "red"];
    q1Choices = _.shuffle(q1Choices);
    console.log(q1Choices);

    for (let i of q1Choices) {



        let radioElement = document.createElement("input");

        radioElement.type = "radio";
        radioElement.name = "q1";
        radioElement.value = i;


        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.append(radioElement);

        document.querySelector("#q1ChoicesDiv").append(labelElement);

        console.log(labelElement);
    }
}


function checkQuestions() {
    try {
        checkQ1();
        checkQ2();
        checkQ3();
        checkQ4();
        checkQ5();
    } catch (err) {
        alert(`Error: ${err}, MAKE SURE YOU ANSWER ALL QUESTIONS`)
    }

    document.querySelector("#score").textContent = `score ${count}`;
    if (count >= 80) {
        document.querySelector("#congratMssg").textContent = "Congrats score is 80 or above!"
    }
    gameCount++;
    localStorage.setItem('quizAttempts', gameCount.toString());
    document.querySelector("#quizAttempts").textContent = `Quiz Attempts: ${gameCount}`;
}

function checkQ1() {
    let img = document.querySelector("#q1Img");
    let userChoice = document.querySelector("input[name=q1]:checked").value;
    if (userChoice == "purple") {
        document.querySelector("#q1Text").style.color = "green";
        count += 20;
        img.src = "img/happy-yellow-oval-face-emoji-giving-two-thumbs-up-isolated-on-transparent-background-free-png.webp";
    } else {
        document.querySelector("#q1Text").style.color = "red";
        img.src = "img/45fd181a5f88fa680c99ea4fd97cd891.webp";
    }
    img.width = 60;
    img.height = 40;
}

function checkQ2() {
    let img = document.querySelector("#q2Img");
    let userChoice = document.querySelector("#q2Input").value;
    if (userChoice == "spell") {
        document.querySelector("#q2Text").style.color = "green";
        count += 20;
        img.src = "img/happy-yellow-oval-face-emoji-giving-two-thumbs-up-isolated-on-transparent-background-free-png.webp";

    } else {
        document.querySelector("#q2Text").style.color = "red";
        img.src = "img/45fd181a5f88fa680c99ea4fd97cd891.webp";
    }
    img.width = 60;
    img.height = 40;
}

function checkQ3() {
    let img = document.querySelector("#q3Img");
    let userChoice = document.querySelector("#dropdown").value;
    if (userChoice == "true") {
        document.querySelector("#q3Text").style.color = "green";
        count += 20;
        img.src = "img/happy-yellow-oval-face-emoji-giving-two-thumbs-up-isolated-on-transparent-background-free-png.webp";
    } else {
        document.querySelector("#q3Text").style.color = "red";
        img.src = "img/45fd181a5f88fa680c99ea4fd97cd891.webp";
    }
    img.width = 60;
    img.height = 40;
}
function checkQ4() {
    let img = document.querySelector("#q4Img");
    let userChoice = document.querySelector("#numberInput").value;
    // console.log(userChoice);
    if (userChoice == 3) {
        document.querySelector("#q4Text").style.color = "green";
        count += 20;
        img.src = "img/happy-yellow-oval-face-emoji-giving-two-thumbs-up-isolated-on-transparent-background-free-png.webp";
    }
    else {
        document.querySelector("#q4Text").style.color = "red";
        img.src = "img/45fd181a5f88fa680c99ea4fd97cd891.webp";
    }
    img.width = 60;
    img.height = 40;
}
function checkQ5() {
    let userChoice1 = document.querySelector("#chbxorg").checked;
    let userChoice2 = document.querySelector("#chbxble").checked;
    let userChoice3 = document.querySelector("#chbxyllw").checked;
    let userChoice4 = document.querySelector("#chbxsun").checked;
    let img = document.querySelector("#q5Img");

    if ((userChoice2 && userChoice3) && !(userChoice1 && userChoice4)) {
        document.querySelector("#q5Text").style.color = "green";
        count += 20;
        img.src = "img/happy-yellow-oval-face-emoji-giving-two-thumbs-up-isolated-on-transparent-background-free-png.webp";
    } else {
        img.src = "img/45fd181a5f88fa680c99ea4fd97cd891.webp";
        document.querySelector("#q5Text").style.color = "red";
    }
    img.width = 60;
    img.height = 40;
}
