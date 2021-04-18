// assigning variables
const heading = document.querySelector("h1");
const userLabel = document.querySelector(".user-label");
const compLabel = document.querySelector(".comp-label");
const winLose = document.querySelector(".winLose");
const compScoreBox = document.querySelector(".compScore");
const userScoreBox = document.querySelector(".userScore");
const choice = document.querySelectorAll(".choice");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let userScore = 0;
let compScore = 0;

heading.innerHTML = "Rock Paper Scissors";
userLabel.innerHTML = "You";
compLabel.innerHTML = "Comp";
winLose.innerHTML = "Make Your Move!";
compScoreBox.innerHTML = compScore;
userScoreBox.innerHTML = userScore;




// computer choice
const getCompChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const compChoice = choices[Math.floor(Math.random() * 3)];
    return compChoice;
}


// winning
const win = (user, computer) => {
    userScore++;
    userScoreBox.innerHTML = userScore;
    compLabel.innerHTML = computer;
    userLabel.innerHTML = user;
    userLabel.style.backgroundColor = "#56F85B";
    compLabel.style.backgroundColor = "#FF0000";
    winLose.innerHTML = `You  chose ${user} and computer chose ${computer}. You win!`;

    if(userScore == 10){
        alert("You win!")
        setTimeout(() => {
            location.reload();
        }, 800);
    }

    setTimeout(() => {
        userLabel.style.backgroundColor = "#fff";     
        compLabel.style.backgroundColor = "#fff";
        compLabel.innerHTML = "Comp";
        userLabel.innerHTML = "You";
    }, 900);
}


// losing
const lose = (user, computer) => {
    compScore++;
    compScoreBox.innerHTML = compScore;
    compLabel.innerHTML = computer;
    userLabel.innerHTML = user;
    compLabel.style.backgroundColor = "#56F85B";
    userLabel.style.backgroundColor = "#FF0000";
    winLose.innerHTML = `You  chose ${user} and computer chose ${computer}. You lose!`;

    if(compScore == 10){
        alert("You lose, better luck next time.");
        setTimeout(() => {
            location.reload();
        }, 800);
    }

    setTimeout(() => {
        userLabel.style.backgroundColor = "#fff";     
        compLabel.style.backgroundColor = "#fff";
        compLabel.innerHTML = "Comp";
        userLabel.innerHTML = "You";
    },900);
}

// tie
const tie = (user, computer) => {
    compLabel.innerHTML = computer;
    userLabel.innerHTML = user;
    compLabel.style.backgroundColor = "#1184E8";
    userLabel.style.backgroundColor = "#1184E8";
    winLose.innerHTML = `It was a draw! You both chose ${user}`;

    setTimeout(() => {
        userLabel.style.backgroundColor = "#fff";     
        compLabel.style.backgroundColor = "#fff";
        compLabel.innerHTML = "Comp";
        userLabel.innerHTML = "You";
    }, 900);
}

const startGame = (userMove) => {
    const compMove = getCompChoice();
console.log(userMove + compMove)
    switch(userMove +  compMove){
        case "PaperRock":
        case "RockScissors":
        case "ScissorsPaper":
            win(userMove,  compMove);
            break;

        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            lose(userMove, compMove);
            break;

        case "PaperPaper":
        case "RockRock":
        case "ScissorsScissors":
            tie(userMove, compMove);
            break;
        
    }
}



rock.addEventListener("click", () => startGame("Rock"));
paper.addEventListener("click", () => startGame("Paper"));
scissors.addEventListener("click", () => startGame("Scissors"));







