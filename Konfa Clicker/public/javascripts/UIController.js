export class UIController {
    constructor() {
        this.currencyHTML = document.getElementById("currencyHTML");
        this.gameWidnow = document.getElementById("gameWindow");
        this.startSection = document.getElementById("startSection");
        this.body = document.getElementById("body");

        this.mainButtonUpgradePrice = document.getElementById("mainButtonUpgradePrice");

        this.firstPowerPrice = document.getElementById("firstPowerPrice");
        this.firstPowerCounter = document.getElementById("firstPowerCounter");
        this.firstPowerUpgradePrice = document.getElementById("firstPowerUpgradePrice");
        this.secondPowerPrice = document.getElementById("secondPowerPrice");
        this.secondPowerCounter = document.getElementById("secondPowerCounter");
        this.secondPowerUpgradePrice = document.getElementById("secondPowerUpgradePrice");

        this.startGameListener = undefined;
        this.startButtonListener = undefined;
        this.mainButtonListener = undefined;
        this.mainButtonUpgradeListener = undefined;
        this.firstPowerButtonListener = undefined;
        this.firstPowerUpgradeButtonListener = undefined;
        this.secondPowerButtonListener = undefined;
        this.secondPowerUpgradeButtonListener = undefined;

        window.addEventListener("load", () => {
            this.startGameListener();
        });
        
        const startButton = document.getElementById("pressStart");
        startButton.addEventListener("click", () => {
            this.startButtonListener();
        });

        const mainButton = document.getElementById("mainButton");
        mainButton.addEventListener("click", () => {
            this.mainButtonListener();
        });

        this.mainButtonUpgrade = document.getElementById("mainButtonUpgrade");
        this.mainButtonUpgrade.addEventListener("click", () => {
            this.mainButtonUpgradeListener();
        });

        this.firstPowerUpgradeButton = document.getElementById("firstPowerUpgrade");
        this.firstPowerUpgradeButton.addEventListener("click", () => {
            this.firstPowerUpgradeButtonListener();
        });

        this.firstPowerButton = document.getElementById("firstPower");
        this.firstPowerButton.addEventListener("click", () => {
            this.firstPowerButtonListener();
        });

        this.secondPowerUpgradeButton = document.getElementById("secondPowerUpgrade");
        this.secondPowerUpgradeButton.addEventListener("click", () => {
            this.secondPowerUpgradeButtonListener();
        });

        this.secondPowerButton = document.getElementById("secondPower");
        this.secondPowerButton.addEventListener("click", () => {
            this.secondPowerButtonListener();
        });
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

    setMainButtonUpgradeListener(listener) {
        this.mainButtonUpgradeListener = listener;
    }

    setFirstPowerButtonListener(listener) {
        this.firstPowerButtonListener = listener;
    }

    setFirstPowerUpgradeButtonListener(listener) {
        this.firstPowerUpgradeButtonListener = listener;
    }

    setSecondPowerButtonListener(listener) {
        this.secondPowerButtonListener = listener;
    }

    setSecondPowerUpgradeButtonListener(listener) {
        this.secondPowerUpgradeButtonListener = listener;
    }

    displayPlayerWallet(currency) {
        this.currencyHTML.innerHTML = Math.round(currency);
    }

    opacityOfMainButtonUpgrade(currency, price) {
        if (currency >= price) {
            this.mainButtonUpgrade.disabled = false;
        } else {
            this.mainButtonUpgrade.disabled = true;
        }
    }

    opacityOfFirstPower(currency, price) {
        if (currency >= price) {
            this.firstPowerButton.disabled = false;
        } else {
            this.firstPowerButton.disabled = true;
        }
    }

    opacityOfFirstPowerUpgrade(currency, price) {
        if (currency >= price) {
            this.firstPowerUpgradeButton.disabled = false;
        } else {
            this.firstPowerUpgradeButton.disabled = true;
        }
    }

    opacityOfFirstPowerButtons(currency, price, upgradePrice) {
        this.opacityOfFirstPower(currency, price);
        this.opacityOfFirstPowerUpgrade(currency, upgradePrice);
    }

    opacityOfSecondPower(currency, price) {
        if (currency >= price) {
            this.secondPowerButton.disabled = false;
        } else {
            this.secondPowerButton.disabled = true;
        }
    }

    opacityOfSecondPowerUpgrade(currency, price) {
        if (currency >= price) {
            this.secondPowerUpgradeButton.disabled = false;
        } else {
            this.secondPowerUpgradeButton.disabled = true;
        }
    }

    opacityOfSecondPowerButtons(currency, price, upgradePrice) {
        this.opacityOfSecondPower(currency, price);
        this.opacityOfSecondPowerUpgrade(currency, upgradePrice);
    }

    displayMainButtonUpgradePrice(upgradePrice) {
        this.mainButtonUpgradePrice.innerHTML = upgradePrice;
    }

    displayFirstPowerCounter(counter) {
        this.firstPowerCounter.innerHTML = counter;
    }

    displayFirstPowerPrice(price) {
        this.firstPowerPrice.innerHTML = price;
    }

    displayFirstPowerUpgradePrice(upgradePrice) {
        this.firstPowerUpgradePrice.innerHTML = upgradePrice;
    }

    displaySecondPowerCounter(counter) {
        this.secondPowerCounter.innerHTML = counter;
    }

    displaySecondPowerPrice(price) {
        this.secondPowerPrice.innerHTML = price;
    }

    displaySecondPowerUpgradePrice(upgradePrice) {
        this.secondPowerUpgradePrice.innerHTML = upgradePrice;
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

    hideTitle() {
        this.startSection.style.opacity = '0';
        setTimeout(function () {
            this.body.removeChild(this.startSection);
        }, 1000);
    }
}