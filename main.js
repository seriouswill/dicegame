const button = document.getElementById("roll")
const dice1 = document.getElementById("dice1")
const winText = document.getElementById("winText")
const score = document.getElementById("score")
let p1score = 0



button.addEventListener("click", () => {
    const x = Math.floor(Math.random() * 6 + 1)
    let imgChoice = "./images/dice" + x + ".png"
    dice1.src = imgChoice;
    if (x == 1) {
        winText.innerHTML = "You lose!"
    } else {
        winText.innerHTML = "Try and score over 21 to win!"
    }

    // scoring

    if (x != 1) {
        
        p1score += x
        score.innerHTML = p1score

    } else {
        score.innerText = 0;
    }

    // winning

    if (p1score >= 21) {
        winText.innerHTML = "You win!"
        p1score = 0
        winText.style.fontSize = "100px";

    }
})
