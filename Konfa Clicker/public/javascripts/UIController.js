export class UIController {
    constructor() {
        this.currencyHTML = document.getElementById("currencyHTML");
        this.gameWidnow = document.getElementById("gameWindow");
        this.startSection = document.getElementById("startSection");
        this.body = document.getElementById("body");


        this.mainButtonListener = undefined;
        this.firstPowerButtonListener = undefined;
        this.firstPowerUpgradeButtonListener = undefined;
        this.startButtonListener = undefined;

        
        
        this.firstPowerPrice = document.getElementById("firstPowerPrice");
        this.firstPowerCounter = document.getElementById("firstPowerCounter");
        this.firstPowerUpgradePrice = document.getElementById("firstPowerUpgradePrice");

        const firstPowerUpgradeButton = document.getElementById("firstPowerUpgrade");
        firstPowerUpgradeButton.addEventListener('click', function () {
            firstPowerUpgradeButtonListener();
        })

        const firstPowerButton = document.getElementById("firstPower");
        firstPowerButton.addEventListener('click', function () {
            firstPowerButtonListener();
        })

        const mainButton = document.getElementById("mainButton");
        mainButton.addEventListener('click', function () {
            mainButtonListener();
        })

        const startButton = document.getElementById("pressStart");
        startButton.addEventListener('click', function () {
            startButtonListener();
        })
    }

    setStartButtonListener(listener) {
        this.startButtonListener = listener;
    }

    setMainButtonListener(listener) {
        this.mainButtonListener = listener;
    }

    setFirstPowerButtonListener(listener) {
        this.firstPowerButton = listener;
    }

    setFirstPowerUpgradeButtonListener(listener) {
        this.firstPowerUpgradeButton = listener;
    }

    displayPlayerWallet(currency) {
        this.currencyHTML.innerHTML = Math.round(currency);
    }

    opacityOfButtons(currency, price, button) {
        if (currency >= price) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0.5';
        }
    }

    displayPowerCounter(counter, counterId) {
        document.getElementById(counterId).innerHTML = counter;
    }

    displayPowerPrice(price, priceId) {
        document.getElementById(priceId).innerHTML = price;
    }

    showGame() {
        if (this.gameWidnow.style.display === "none") {
            this.gameWidnow.style.display = "block";
        } else {
            this.gameWidnow.style.display = "none";
        }
    }

    //getMainButton() {
    //    return mainButton;
    //}
/*
    getFirstPowerButton() {
        return firstPowerButton;
    }

    getFirstPowerUpgradeButton() {
        return firstPowerUpgradeButton;
    }
*/
    getFirstPowerCounter() {
        return this.firstPowerCounter;
    }

    getFirstPowerPrice() {
        return this.firstPowerPrice;
    }

    getFirstPowerUpgradePrice() {
        return this.firstPowerUpgradePrice;
    }
}