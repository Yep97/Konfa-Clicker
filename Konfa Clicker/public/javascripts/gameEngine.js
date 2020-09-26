import { Power } from './power.js'
import { PlayerWallet } from './playerWallet.js'
import { MainButton } from './mainButton.js'
import { UIController } from './UIController.js'
import { PopUp } from './popUp.js'
    
export class GameEngine {
    constructor() {
        this.playerWallet = new PlayerWallet();
        this.firstPower = new Power(0.0025, 15, 100, 5);
        this.secondPower = new Power(0.01, 100, 500, 15);
        this.thirdPower = new Power(0.1, 500, 2500, 45);
        this.uiController = new UIController();
        this.mainButton = new MainButton();
        this.popUp = new PopUp();

        this.timeCounter = 1;

        const startGameLoadListener = () => {
            this.uiController.showGame();
            this.gameLoop();
        };

        const startButtonClickListener = () => {
            this.uiController.hideTitle();
            this.uiController.showGame();
        };

        const mainButtonClickListener = () => {
            const valueOfPress = this.mainButton.pressButton();
            this.playerWallet.gainMoney(valueOfPress);
        };

        const mainButtonUpgradeClickListener = () => {
            const upgradePrice = this.mainButton.getUpgradePrice();
            if (this.playerWallet.hasEnoughMoney(upgradePrice)) {
                this.playerWallet.takeMoney(upgradePrice);
                this.mainButton.buyUpgrade();
                this.mainButton.upgradeValueOfPress();
                this.mainButton.updateUpgradePrice();
            }
        };

        const firstPowerButtonClickListener = () => {
            const powerPrice = this.firstPower.getPowerPrice();
            if (this.playerWallet.hasEnoughMoney(powerPrice)) {
                this.playerWallet.takeMoney(powerPrice);
                this.firstPower.buyPower();
                this.firstPower.updatePowerPrice();
            }
        };

        const firstPowerUpgradeButtonClickListener = () => {
            const powerUpgradePrice = this.firstPower.getPowerUpgradePrice();
            if (this.playerWallet.hasEnoughMoney(powerUpgradePrice)) {
                this.playerWallet.takeMoney(powerUpgradePrice);
                this.firstPower.buyPowerUpgrade();
                this.firstPower.upgradePower();
                this.firstPower.updatePowerUpgradePrice();
            }
        };

        const secondPowerButtonClickListener = () => {
            const powerPrice = this.secondPower.getPowerPrice();
            if (this.playerWallet.hasEnoughMoney(powerPrice)) {
                this.playerWallet.takeMoney(powerPrice);
                this.secondPower.buyPower();
                this.secondPower.updatePowerPrice();
            }
        };

        const secondPowerUpgradeButtonClickListener = () => {
            const powerUpgradePrice = this.secondPower.getPowerUpgradePrice();
            if (this.playerWallet.hasEnoughMoney(powerUpgradePrice)) {
                this.playerWallet.takeMoney(powerUpgradePrice);
                this.secondPower.buyPowerUpgrade();
                this.secondPower.upgradePower();
                this.secondPower.updatePowerUpgradePrice();
            }
        };

        const thirdPowerButtonClickListener = () => {
            const powerPrice = this.thirdPower.getPowerPrice();
            if (this.playerWallet.hasEnoughMoney(powerPrice)) {
                this.playerWallet.takeMoney(powerPrice);
                this.thirdPower.buyPower();
                this.thirdPower.updatePowerPrice();
            }
        };

        const thirdPowerUpgradeButtonClickListener = () => {
            const powerUpgradePrice = this.thirdPower.getPowerUpgradePrice();
            if (this.playerWallet.hasEnoughMoney(powerUpgradePrice)) {
                this.playerWallet.takeMoney(powerUpgradePrice);
                this.thirdPower.buyPowerUpgrade();
                this.thirdPower.upgradePower();
                this.thirdPower.updatePowerUpgradePrice();
            }
        };


        const popUpButtonClickListener = () => {
            const eventDurationTimer = this.popUp.getEventDurationTimer();
            const mainButtonCounterValue = this.mainButton.getValueOfCounters();
            const firstPowerCounterValue = this.firstPower.getValueOfCounters();
            const secondPowerCounterValue = this.secondPower.getValueOfCounters();
            const thirdPowerCounterValue = this.thirdPower.getValueOfCounters();

            this.playerWallet.gainMoney(1);
            this.playerWallet.gainMoney(mainButtonCounterValue);
            this.playerWallet.gainMoney(firstPowerCounterValue);
            this.playerWallet.gainMoney(secondPowerCounterValue);
            this.playerWallet.gainMoney(thirdPowerCounterValue);

            this.popUp.resetEventDurationCounter(eventDurationTimer);
            this.popUp.resetPreparingEventCounter();
            this.hidePopUp();
        };

        this.uiController.setStartGameListener(startGameLoadListener);
        this.uiController.setStartButtonListener(startButtonClickListener);
        this.uiController.setPopUpButtonListener(popUpButtonClickListener);
        this.uiController.setMainButtonListener(mainButtonClickListener);
        this.uiController.setMainButtonUpgradeListener(mainButtonUpgradeClickListener);
        this.uiController.setFirstPowerButtonListener(firstPowerButtonClickListener);
        this.uiController.setFirstPowerUpgradeButtonListener(firstPowerUpgradeButtonClickListener);
        this.uiController.setSecondPowerButtonListener(secondPowerButtonClickListener);
        this.uiController.setSecondPowerUpgradeButtonListener(secondPowerUpgradeButtonClickListener);
        this.uiController.setThirdPowerButtonListener(thirdPowerButtonClickListener);
        this.uiController.setThirdPowerUpgradeButtonListener(thirdPowerUpgradeButtonClickListener);
    }

    showPopUp() {
        const preparingEventCounter = this.popUp.getPreparingEventCounter();
        const preparingEventTimer = this.popUp.getPreparingEventTimer();
        const eventDurationCounter = this.popUp.getEventDurationCounter();
        const eventDurationTimer = this.popUp.getEventDurationTimer();
        if (preparingEventCounter === preparingEventTimer) {
            this.uiController.setPopUpPosition();
            this.uiController.enablePopUp();
            this.uiController.showPopUpOnScreen();
        } else if (preparingEventCounter > preparingEventTimer && eventDurationCounter > 0) {
            this.uiController.rotatePopUpOnScreen();
            this.popUp.decreseEventDurationCounter();
        } else if (eventDurationCounter === 0) {
            this.popUp.resetPreparingEventCounter();
            this.popUp.resetEventDurationCounter(eventDurationTimer);
        }
        else
            this.hidePopUp();
    }

    hidePopUp() {
        this.uiController.disablePopUp();
        this.uiController.hidePopUpOnScreen();
    }

    showMainButtonUpgradePrice() {
        const powerUpgradePrice = this.mainButton.getUpgradePrice();
        this.uiController.displayMainButtonUpgradePrice(powerUpgradePrice);
    }

    showPowersCounters() {
        const firstPowerCounter = this.firstPower.getPowerCounter();
        const secondPowerCounter = this.secondPower.getPowerCounter();
        const thirdPowerCounter = this.thirdPower.getPowerCounter();
        this.uiController.displayFirstPowerCounter(firstPowerCounter);
        this.uiController.displaySecondPowerCounter(secondPowerCounter);
        this.uiController.displayThirdPowerCounter(thirdPowerCounter);
    }

    showPowersPrices() {
        const firstPowerPrice = this.firstPower.getPowerPrice();
        const secondPowerPrice = this.secondPower.getPowerPrice();
        const thirdPowerPrice = this.thirdPower.getPowerPrice();
        this.uiController.displayFirstPowerPrice(firstPowerPrice);
        this.uiController.displaySecondPowerPrice(secondPowerPrice);
        this.uiController.displayThirdPowerPrice(thirdPowerPrice);
    }

    showPowersUpgradesPrices() {
        const firstPowerUpgradePrice = this.firstPower.getPowerUpgradePrice();
        const secondPowerUpgradePrice = this.secondPower.getPowerUpgradePrice();
        const thirdPowerUpgradePrice = this.thirdPower.getPowerUpgradePrice();
        this.uiController.displayFirstPowerUpgradePrice(firstPowerUpgradePrice);
        this.uiController.displaySecondPowerUpgradePrice(secondPowerUpgradePrice);
        this.uiController.displayThirdPowerUpgradePrice(thirdPowerUpgradePrice);
    }

    gainMoneyFromPowers() {
        let firstPowerPoints = this.firstPower.getCalculatedPoints();
        let secondPowerPoints = this.secondPower.getCalculatedPoints();
        let thirdPowerPoints = this.thirdPower.getCalculatedPoints();
        this.playerWallet.gainMoney(firstPowerPoints);
        this.playerWallet.gainMoney(secondPowerPoints);
        this.playerWallet.gainMoney(thirdPowerPoints);
    }

    setOpacity(currentCurrency) {
        const mainButtonUpgradePrice = this.mainButton.getUpgradePrice();
        const firstPowerPrice = this.firstPower.getPowerPrice();
        const firstPowerUpgradePrice = this.firstPower.getPowerUpgradePrice();
        const secondPowerPrice = this.secondPower.getPowerPrice();
        const secondPowerUpgradePrice = this.secondPower.getPowerUpgradePrice();
        const thirdPowerPrice = this.thirdPower.getPowerPrice();
        const thirdPowerUpgradePrice = this.thirdPower.getPowerUpgradePrice();


        this.uiController.opacityOfMainButtonUpgrade(currentCurrency, mainButtonUpgradePrice);
        this.uiController.opacityOfFirstPowerButtons(currentCurrency, firstPowerPrice, firstPowerUpgradePrice);
        this.uiController.opacityOfSecondPowerButtons(currentCurrency, secondPowerPrice, secondPowerUpgradePrice);
        this.uiController.opacityOfThirdPowerButtons(currentCurrency, thirdPowerPrice, thirdPowerUpgradePrice);
    }

    gameLoop() {
        setTimeout(() => {
            const currentCurrency = this.playerWallet.getCurrency();

            this.uiController.displayPlayerWallet(currentCurrency);

            this.setOpacity(currentCurrency);

            this.popUp.incresePreparingEventCounter();
            this.showPopUp();

            this.showMainButtonUpgradePrice();
            this.showPowersCounters();
            this.showPowersPrices();
            this.showPowersUpgradesPrices();

            this.gainMoneyFromPowers();

            this.timeCounter++;
            if (this.timeCounter < Infinity) {
                this.gameLoop();
            }
        }, 100);
    }
}