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
        this.startGameListener = undefined;

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

        window.addEventListener('load', function() {
            startGameListener();
        })
    }

    setStartGameListener(listener) {
        this.startGameListener = listener;
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

    opacityOfFirstPower(currency, price) {
        if (currency >= price) {
            this.firstPowerButton.style.opacity = '1';
        } else {
            this.firstPowerButton.style.opacity = '0.5';
        }
    }

    opacityOfFirstPowerUpgrade(currency, price) {
        if (currency >= price) {
            this.firstPowerUpgradeButton.style.opacity = '1';
        } else {
            this.firstPowerUpgradeButton.style.opacity = '0.5';
        }
    }

    opacityOfFirstPowerButtons(currency, price, upgradePrice) {
        opacityOfFirstPower(currency, price);
        opacityOfFirstUpgradePower(currency, upgradePrice);
    }

    displayFirstPowerCounter(counter) {
        document.getElementById(this.firstPowerCounter).innerHTML = counter;
    }

    displayFirstPowerPrice(price) {
        document.getElementById(this.firstPowerPrice).innerHTML = price;
    }

    displayFirstPowerUpgradePrice(upgradePrice) {
        document.getElementById(this.firstPowerUpgradePrice).innerHTML = upgradePrice;
    }

    showGame() {
        if (this.gameWidnow.style.display === "none") {
            this.gameWidnow.style.display = "block";
        } else {
            this.gameWidnow.style.display = "none";
        }
    }

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