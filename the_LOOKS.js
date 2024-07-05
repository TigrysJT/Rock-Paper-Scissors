const rockChoice = document.querySelector('#rockBTN')
rockChoice.addEventListener("click", function() {
    playRound("rock", getComputerChoice)
    updateScore();
    
});
const scissorsChoice = document.querySelector('#scissorsBTN')
scissorsChoice.addEventListener("click", function(){
    playRound("scissors", getComputerChoice)
    updateScore();
    
});
const paperChoice = document.querySelector('#paperBTN')
paperChoice.addEventListener("click", function(){
    playRound("paper", getComputerChoice)
    updateScore();
});

const div = document.querySelector("#container");
div.classList.add("div")
div.textContent = "im am a little teapot, short and stout, here is my ____ and here is my ____ i dont remember ;("
div.setAttribute("style", "background-color: red; color: blue;")

const h_records = document.querySelector("#playerScore");

const pc_records = document.querySelector("#pcScore"); 
