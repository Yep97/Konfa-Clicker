let pressStart = document.getElementById("pressStart");
let startSection = document.getElementById("startSection");
let body = document.getElementById("body");
let gameWidnow = document.getElementById("gameWindow");
let header = document.getElementById("header");
let mainButton = document.getElementById("mainButton");
let leftSide = document.getElementById("leftSide");
let points = document.getElementById("points");
let firstPower = document.getElementById("firstPower");
let firstPowerCost = document.getElementById("firstPowerCost");
let firstPowerUpgradeCost = document.getElementById("firstPowerUpgradeCost");
let firstPowerCounter = document.getElementById("firstPowerCounter");

let memeValue = 10;
let clickValue = 1;
let firstPowerPrice = 10;
let timeCounter = 1;
let firstPowerValue = 0;
let firstPowerUpgrade = 1;
let firstPowerUpgradePrice = 500;


//firstPowerValue.value = firstPowerPrice;
firstPowerCost.innerHTML = firstPowerPrice;
firstPowerUpgradeCost.innerHTML = firstPowerUpgradePrice;
firstPowerCounter.innerHTML = 0;

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
    opacityOfButtons();
}

firstPower.onclick = function () {
    if (memeValue >= firstPowerPrice) {
        firstPower.style.opacity = '1';
        memeValue -= firstPowerPrice;
        firstPowerValue += 1;
        firstPowerPrice += Math.round(Math.pow(firstPowerPrice, 0.7));
        points.innerHTML = memeValue;
        firstPowerCost.innerHTML = firstPowerPrice;
        firstPowerCounter.innerHTML++;
        
    } else {
        firstPower.style.opacity = '0.5';
    }
}

pawel.onclick = function () {
    if (memeValue >= firstPowerUpgradePrice) {
        memeValue -= firstPowerUpgradePrice;
        firstPowerUpgrade = 2;
        pawel.disabled = true;
    }
}

function opacityOfButtons() {
    if (memeValue >= firstPowerPrice) {
        firstPower.style.opacity = '1';
    } else {
        firstPower.style.opacity = '0.5';      
    }
}

function timeLoop() {
    setTimeout(function () {
        //Meme Value Gain 
        points.innerHTML = memeValue;
        memeValue += firstPowerValue * firstPowerUpgrade;
        
        opacityOfButtons();


        timeCounter++;
        if (timeCounter < Infinity) {
            timeLoop();
        }
    }, 1000)
}


window.onload = function start() {

    timeLoop();
}