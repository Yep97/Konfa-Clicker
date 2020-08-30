import { powerUp } from './powers.js'

let pressStart = document.getElementById("pressStart");
let startSection = document.getElementById("startSection");
let body = document.getElementById("body");
let gameWidnow = document.getElementById("gameWindow");
let header = document.getElementById("header");
let mainButton = document.getElementById("mainButton");
let leftSide = document.getElementById("leftSide");
let points = document.getElementById("points");

//constructor(power, powerCost, powerUpgradeCost, powerCounter, powerPrice, powerValue, powerUpgradeValue, powerUpgradePrice, powerUpgrade)
let firstPower = new powerUp("firstPower", "firstPowerCost", "firstPowerUpgradeCost", "firstPowerCounter", 10, 0, 1, 500, "firstPowerUprade");

let memeValue = 0;
let clickValue = 1;
let timeCounter = 1;

showGame();

//Starting game button
pressStart.onclick = function () {
    startSection.style.opacity = '0';  // Fading the elements
    setTimeout(function () {
        body.removeChild(startSection);
    }, 1000);
    showGame();
}

function showGame() {
    if (gameWidnow.style.display === "none") {
        //        header.style.opacity = '1';
        gameWidnow.style.display = "block";
    } else {
        gameWidnow.style.display = "none";
    }
}

mainButton.onclick = function () {
    memeValue += clickValue;
    points.innerHTML = memeValue;
}



function timeLoop() {
    setTimeout(function () {
        //Meme Value Gain 
        points.innerHTML = memeValue;
        memeValue += firstPower.powerValue * firstPower.powerUpgradeValue;

        document.getElementById("firstPower").onclick = function () { firstPower.powerClick(points, memeValue) };

        document.getElementById("firstPowerUpgrade").onclick = function () { firstPower.powerUpgradeClick(memeValue) };


        firstPower.opacityOfButtons(memeValue);

        timeCounter++;
        if (timeCounter < Infinity) {
            timeLoop();
        }
    }, 1000)
}


window.onload = function start() {
    timeLoop();
}