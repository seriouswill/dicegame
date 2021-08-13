const button = document.getElementById("roll")
const dice1 = document.getElementById("dice1")
const winText = document.getElementById("winText")
const score = document.getElementById("score1")
const oneplayer = document.getElementById("oneplayer")
const twoplayer = document.getElementById("twoplayer")
let p1score = 0
let p2score = 0


let img2 = document.createElement("img")
img2.src = "./images/dice1.png"
let player2p = document.createElement("p")
let score2 = document.createElement("p")
const player1p = document.getElementById("player1p")


twoplayer.addEventListener("click", () => {

    // image
    document.getElementById("diceBox").appendChild(img2);
    score2.innerHTML = 0
    player2p.innerHTML = "Player 2 Score:"
    document.getElementById("scoreBox").appendChild(player2p)
    document.getElementById("scoreBox").appendChild(score2)
    player1p.innerHTML = "Player 1 Score:"


})

oneplayer.addEventListener("click", () => {
    document.getElementById("diceBox").removeChild(img2);
    document.getElementById("scoreBox").removeChild(player2p)
    document.getElementById("scoreBox").removeChild(score2)
})


button.addEventListener("click", () => {
    const x = Math.floor(Math.random() * 6 + 1)
    let imgChoice = "./images/dice" + x + ".png"
    //2nd dice
    const y = Math.floor(Math.random() * 6 + 1)
    let imgChoice2 = "./images/dice" + y + ".png"
    dice1.src = imgChoice;
    img2.src = imgChoice2;
    if (x == 1) {
        winText.innerHTML = "Player ones loses!"
    } else {
        winText.innerHTML = "Try and score over 21 to win!"
    }
    // scoring
    if (x != 1) {
        
        p1score += x
        score.innerText = p1score

    } else  
    {
        score.innerText = 0;
    }

    if (y != 1) {
        p2score += y
        score2.innerText = p2score
    }
    // winning

    if (p1score >= 21) {
        winText.innerHTML = "Player One Wins!"
        p1score = 0
        winText.style.fontSize = "100px";

    } else {
        winText.style.fontSize = "150%";
    }

    if (p2score >= 21) {
        winText.innerHTML = "Player Two Wins!"
        p2score = 0
        winText.style.fontSize = "100px";

    } else {
        winText.style.fontSize = "150%";
    }
    
})
