let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber)

function checkGuess() {
    let guessNumber = parseInt(userInput.value);
    console.log(guessNumber);
    if (guessNumber> randomNumber){
        gameResult.textContent ="Try Again, Too High"
        gameResult.style.backgroundColor= "#1e27c"
    }
    else if(guessNumber < randomNumber){
        gameResult.textContent ="Try Again, Too low"
        gameResult.style.backgroundColor= "#1e27c";
    }
    else  if(guessNumber ===randomNumber){
        gameResult.textContent ="You Won"
        gameResult.style.backgroundColor= "green"   
    }
    else{
        gameResult.textContent ="Plzzz provide valid number."
    gameResult.style.backgroundColor= "#1e217c";
    }
};