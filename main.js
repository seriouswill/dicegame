const button = document.getElementById("roll")
const reset = document.getElementById("reset")
const dice1 = document.getElementById("dice1")
const winText = document.getElementById("winText")
const score = document.getElementById("score1")
const oneplayer = document.getElementById("oneplayer")
const twoplayer = document.getElementById("twoplayer")
const diceSound = new Audio("/sounds/diceRoll.wav")
const wooHoo = new Audio("/sounds/woo-hoo.wav")
const draw = new Audio("/sounds/draw.mp3")
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
    diceSound.play()
    //2nd dice
    const y = Math.floor(Math.random() * 6 + 1)
    let imgChoice2 = "./images/dice" + y + ".png"
    dice1.src = imgChoice;
    img2.src = imgChoice2;
    // if (x == 1) {
    //     winText.innerHTML = "Player ones loses!"
    // } else {
    //     winText.innerHTML = "Try and score over 21 to win!"
    // }
    // scoring
    winText.innerHTML = "Try to score over 21!"
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
    // losing
    if (x == 1) {
        winText.innerHTML = "Player one loses"
        p1score = 0
        
    }
    if (y == 1) {
        winText.innerHTML = "Player two loses"
        p2score = 0

    }
    // winning
    if (p2score >= 21 && p1score >= 21) {
        winText.innerHTML = "It's a draw!!"
        draw.play();
        p1score = 0
        p2score = 0
        winText.style.fontSize = "100px";
    }
    if (p1score >= 21) {
        winText.innerHTML = "Player One Wins!"
        wooHoo.play();
        p1score = 0
        p2score = 0
        winText.style.fontSize = "100px";

    } else {
        winText.style.fontSize = "150%";
    }

    if (p2score >= 21) {
        winText.innerHTML = "Player Two Wins!"
        wooHoo.play();
        p2score = 0
        p1score = 0
        winText.style.fontSize = "100px";

    } else {
        winText.style.fontSize = "150%";
    }
    
})

reset.addEventListener("click", () => {
    score.innerHTML = 0
    score2.innerHTML = 0
    img2.src = "./images/dice1.png"
    dice1.src = "./images/dice1.png"
    winText.innerHTML = "Try to score over 21!"
    winText.style.fontSize = "150%";
})