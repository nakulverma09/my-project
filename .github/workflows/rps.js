let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".item");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
let result = document.querySelector(".result h2");

const getComputerChoice = () =>{
    let choice = ["rock","paper","scissor"];
    let index = Math.floor(Math.random() * 3);
    console.log(`computer choice is ${choice[index]}`);
    return choice[index];
}

const show_result = (userWin) =>{
    if(userWin){
        userscore++;
        user.innerHTML=`${userscore}`;
        result.innerHTML = "You Win";
        result.style.backgroundColor = "green";
    }
    else{
        compscore++;
        comp.innerHTML = `${compscore}`
        result.innerHTML = "Computer Win";
        result.style.backgroundColor = "Red";
    }
}

const drawgame = () =>{
    result.innerHTML = "Game Draw";
    result.style.backgroundColor = "Grey";
}

const playGame = (userchoice) =>{
    //generate computer choices
    const compChoices = getComputerChoice();
    let userWin = true;

    if(userchoice === compChoices){ //draw game condition
        drawgame();
    }
    else{
        
    if(userchoice === "rock"){
        userWin = (compChoices === "paper") ? false : true;
    }
    else if(userchoice === "scissor"){
        userWin = (compChoices === "rock") ? false : true;
    }
    else{
        userWin = (compChoices === "scissor") ? false : true;
    }

    show_result(userWin);
}
    
}

choices.forEach((item)=>{
    item.addEventListener("click",()=>{
        const userchoice = item.getAttribute("id");
        console.log(`user choices is ${userchoice}`);
        playGame(userchoice);
    })
});

