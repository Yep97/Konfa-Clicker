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
        this.thirdPowerPrice = document.getElementById("thirdPowerPrice");
        this.thirdPowerCounter = document.getElementById("thirdPowerCounter");
        this.thirdPowerUpgradePrice = document.getElementById("thirdPowerUpgradePrice");

        this.startGameListener = undefined;
        this.startButtonListener = undefined;
        this.popUpButtonListener = undefined;
        this.mainButtonListener = undefined;
        this.mainButtonUpgradeListener = undefined;
        this.firstPowerButtonListener = undefined;
        this.firstPowerUpgradeButtonListener = undefined;
        this.secondPowerButtonListener = undefined;
        this.secondPowerUpgradeButtonListener = undefined;
        this.thirdPowerButtonListener = undefined;
        this.thirdPowerUpgradeButtonListener = undefined;

        window.addEventListener("load", () => {
            this.startGameListener();
        });
        
        const startButton = document.getElementById("pressStart");
        startButton.addEventListener("click", () => {
            this.startButtonListener();
        });

        this.popUpButton = document.getElementById("popUp");
        this.popUpButton.addEventListener("click", () => {
            this.popUpButtonListener();
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

        this.thirdPowerUpgradeButton = document.getElementById("thirdPowerUpgrade");
        this.thirdPowerUpgradeButton.addEventListener("click", () => {
            this.thirdPowerUpgradeButtonListener();
        });

        this.thirdPowerButton = document.getElementById("thirdPower");
        this.thirdPowerButton.addEventListener("click", () => {
            this.thirdPowerButtonListener();
        });
    }
    
    setStartGameListener(listener) {
        this.startGameListener = listener;
    }
    
    setStartButtonListener(listener) {
        this.startButtonListener = listener;
    }

    setPopUpButtonListener(listener) {
        this.popUpButtonListener = listener;
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

    setThirdPowerButtonListener(listener) {
        this.thirdPowerButtonListener = listener;
    }

    setThirdPowerUpgradeButtonListener(listener) {
        this.thirdPowerUpgradeButtonListener = listener;
    }

    setPopUpPosition() {
        this.widthOfPage = screen.width;
        this.heightOfPage = screen.height;
        this.widthOfPopUp = 150;
        this.heightOfPopUp = 150;
        this.popUpButton.style.left = Math.round(Math.random() * (this.widthOfPage - this.widthOfPopUp)) + "px";
        this.popUpButton.style.top = Math.round(Math.random() * (this.heightOfPage - this.heightOfPopUp)) + "px";
    }

    showPopUpOnScreen() {
        this.popUpButton.style.width = "150px";
        this.popUpButton.style.height = "150px";
        this.popUpButton.style.opacity = '1';
    }

    hidePopUpOnScreen() {
        this.popUpButton.style.width = "0px";
        this.popUpButton.style.height = "0px";
        this.popUpButton.style.opacity = '0';
    }

    rotatePopUpOnScreen() {
        this.popUpButton.style.transform += "rotate(3deg)";
    }

    enablePopUp() {
        this.popUpButton.disabled = false;
    }

    disablePopUp() {
        this.popUpButton.disabled = true;
    }

    displayPlayerWallet(currency) {
        this.currencyHTML.innerHTML = Math.round(currency);
    }

    opacityOfMainButtonUpgrade(currency, price) {
        if (currency >= price) {
            this.mainButtonUpgrade.disabled = false;
            this.mainButtonUpgrade.style.cursor = "pointer";
        } else {
            this.mainButtonUpgrade.disabled = true;
            this.mainButtonUpgrade.style.cursor = "default";
        }
    }

    opacityOfFirstPower(currency, price) {
        if (currency >= price) {
            this.firstPowerButton.disabled = false;
            this.firstPowerButton.style.cursor = "pointer";
        } else {
            this.firstPowerButton.disabled = true;
            this.firstPowerButton.style.cursor = "default";
        }
    }

    opacityOfFirstPowerUpgrade(currency, price) {
        if (currency >= price) {
            this.firstPowerUpgradeButton.disabled = false;
            this.firstPowerUpgradeButton.style.cursor = "pointer";
        } else {
            this.firstPowerUpgradeButton.disabled = true;
            this.firstPowerUpgradeButton.style.cursor = "default";
        }
    }

    opacityOfFirstPowerButtons(currency, price, upgradePrice) {
        this.opacityOfFirstPower(currency, price);
        this.opacityOfFirstPowerUpgrade(currency, upgradePrice);
    }

    opacityOfSecondPower(currency, price) {
        if (currency >= price) {
            this.secondPowerButton.disabled = false;
            this.secondPowerButton.style.cursor = "pointer";
        } else {
            this.secondPowerButton.disabled = true;
            this.secondPowerButton.style.cursor = "default";
        }
    }

    opacityOfSecondPowerUpgrade(currency, price) {
        if (currency >= price) {
            this.secondPowerUpgradeButton.disabled = false;
            this.secondPowerUpgradeButton.style.cursor = "pointer";
        } else {
            this.secondPowerUpgradeButton.disabled = true;
            this.secondPowerUpgradeButton.style.cursor = "default";
        }
    }

    opacityOfSecondPowerButtons(currency, price, upgradePrice) {
        this.opacityOfSecondPower(currency, price);
        this.opacityOfSecondPowerUpgrade(currency, upgradePrice);
    }

    opacityOfThirdPower(currency, price) {
        if (currency >= price) {
            this.thirdPowerButton.disabled = false;
            this.thirdPowerButton.style.cursor = "pointer";
        } else {
            this.thirdPowerButton.disabled = true;
            this.thirdPowerButton.style.cursor = "default";
        }
    }

    opacityOfThirdPowerUpgrade(currency, price) {
        if (currency >= price) {
            this.thirdPowerUpgradeButton.disabled = false;
            this.thirdPowerUpgradeButton.style.cursor = "pointer";
        } else {
            this.thirdPowerUpgradeButton.disabled = true;
            this.thirdPowerUpgradeButton.style.cursor = "default";
        }
    }

    opacityOfThirdPowerButtons(currency, price, upgradePrice) {
        this.opacityOfThirdPower(currency, price);
        this.opacityOfThirdPowerUpgrade(currency, upgradePrice);
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

    displayThirdPowerCounter(counter) {
        this.thirdPowerCounter.innerHTML = counter;
    }

    displayThirdPowerPrice(price) {
        this.thirdPowerPrice.innerHTML = price;
    }

    displayThirdPowerUpgradePrice(upgradePrice) {
        this.thirdPowerUpgradePrice.innerHTML = upgradePrice;
    }


    showGame() {
        if (this.gameWidnow.style.display === "none") {
            this.gameWidnow.style.display = "block";
        } else {
            this.gameWidnow.style.display = "none";
        }
    }

    hideTitle() {
        this.startSection.style.opacity = '0';
        setTimeout(function () {
            this.body.removeChild(this.startSection);
        }, 1000);
    }
}