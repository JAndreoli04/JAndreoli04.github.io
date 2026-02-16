document.querySelector("button").addEventListener("click", checkQuestions);

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
    // alert(`${userChoice}`);
    checkQ1();
    checkQ2();
    checkQ3();
    checkQ4();
    checkQ5(); 

    document.querySelector("#score").textContent = `score ${count}`;
}

function checkQ1(){
    let userChoice = document.querySelector("input[name=q1]:checked").value;
    if(userChoice == "purple"){
        document.querySelector("#q1Text").style.color = "green";
        count += 20;
    }else{
        document.querySelector("#q1Text").style.color = "red";
    }
}

function checkQ2(){
    let userChoice = document.querySelector("#q2Input").value;
    if(userChoice == "spell"){
        document.querySelector("#q2Text").style.color = "green";
        count += 20;
    }else{
        document.querySelector("#q2Text").style.color = "red";
    }
}

function checkQ3(){
    let userChoice = document.querySelector("#dropdown").value;
    if(userChoice == "false"){
        document.querySelector("#q3Text").style.color = "green";
        count += 20;
    }else{
        document.querySelector("#q3Text").style.color = "red";
    }
}
function checkQ4(){
    let userChoice = document.querySelector("#numberInput").value;
    // console.log(userChoice);
    if(userChoice == 3)
    {
        document.querySelector("#q4Text").style.color = "green";
        count += 20;
    }
    else{
        document.querySelector("#q4Text").style.color = "red";
    }
}
function checkQ5()
{
    let userChoice1 = document.querySelector("#chbxorg").value;
    let userChoice2 = document.querySelector("#chbxble").value;
    let userChoice3 = document.querySelector("#chbxyllw").value;
    let userChoice4 = document.querySelector("#chbxsun").value;
    // if(userChoice1 == "true" ){
    //     document.querySelector("#q5Text").style.color = "red";
    // }
    // console.log(document.getElementById("#chxorg"));
    console.log(userChoice4);
    console.log(userChoice3);
    console.log(userChoice2);

    console.log(document.querySelector("chxorg").checked)
    console.log(document.getElementById("chxble").checked)


    if(!document.getElementById("chxorg").checked && document.getElementById("chxble").checked && document.getElementById("chxyllw").checked && !document.getElementById("chxsun").checked){
        document.querySelector("#q5Text").style.color = "green";
        count += 20;
    }else{
        document.querySelector("#q5Text").style.color = "red";
    }
}
