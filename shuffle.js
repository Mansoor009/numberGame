
// const displayNum = document.querySelectorAll(".diceNum")


// let W = 0;
// let L = 0;
let mPoint1 = document.querySelector(".mPoint1")
let mPoint2 = document.querySelector(".mPoint2")

let diceScore = () => {
    let imgs = ["one.png", "two.png", "three.png", "number-4.png", "five.png", "six.png"];
    let result = document.querySelector(".result");
    let randomIndex = Math.floor(Math.random() * imgs.length);
    let diced = imgs[randomIndex];
    let randomIndex2 = Math.floor(Math.random() * imgs.length);
    let diced2 = imgs[randomIndex2];
    document.querySelector("#img1").src = `${diced}`;
    document.querySelector("#img2").src = `${diced2}`;
    mPoint1 = `${randomIndex + 1}`;
    mPoint2 = `${randomIndex2 + 1}`;
    console.log(mPoint1)
    console.log(mPoint2)
    if (mPoint1 > mPoint2) {
        result.innerText = `Player 2 WON`;
    }
    else if (mPoint1 === mPoint2) {
        result.innerText = `Its a DRAW`;
    }
    else {
        result.innerText = `Player 1 WON`;
    }
}