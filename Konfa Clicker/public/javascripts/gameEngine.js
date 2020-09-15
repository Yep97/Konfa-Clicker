import { Power } from './power.js'
import { PlayerWallet } from './playerWallet.js'
import { MainButton } from './mainButton.js'
import { UIController } from './UIController.js'
    
export class GameEngine {
    constructor() {
        this.playerWallet = new PlayerWallet();
        this.firstPower = new Power(0.0025, 15, 100);
        this.secondPower = new Power(0.01, 100, 500);
        this.uiController = new UIController();
        this.mainButton = new MainButton();

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

        this.uiController.setStartGameListener(startGameLoadListener);
        this.uiController.setStartButtonListener(startButtonClickListener);
        this.uiController.setMainButtonListener(mainButtonClickListener);
        this.uiController.setMainButtonUpgradeListener(mainButtonUpgradeClickListener);
        this.uiController.setFirstPowerButtonListener(firstPowerButtonClickListener);
        this.uiController.setFirstPowerUpgradeButtonListener(firstPowerUpgradeButtonClickListener);
        this.uiController.setSecondPowerButtonListener(secondPowerButtonClickListener);
        this.uiController.setSecondPowerUpgradeButtonListener(secondPowerUpgradeButtonClickListener);
    }


    showMainButtonUpgradePrice() {
        const powerUpgradePrice = this.mainButton.getUpgradePrice();
        this.uiController.displayMainButtonUpgradePrice(powerUpgradePrice);
    }

    showPowersCounters() {
        const firstPowerCounter = this.firstPower.getPowerCounter();
        const secondPowerCounter = this.secondPower.getPowerCounter();
        this.uiController.displayFirstPowerCounter(firstPowerCounter);
        this.uiController.displaySecondPowerCounter(secondPowerCounter);
    }

    showPowersPrices() {
        const firstPowerPrice = this.firstPower.getPowerPrice();
        const secondPowerPrice = this.secondPower.getPowerPrice();
        this.uiController.displayFirstPowerPrice(firstPowerPrice);
        this.uiController.displaySecondPowerPrice(secondPowerPrice);
    }

    showPowersUpgradesPrices() {
        const firstPowerUpgradePrice = this.firstPower.getPowerUpgradePrice();
        const secondPowerUpgradePrice = this.secondPower.getPowerUpgradePrice();
        this.uiController.displayFirstPowerUpgradePrice(firstPowerUpgradePrice);
        this.uiController.displaySecondPowerUpgradePrice(secondPowerUpgradePrice);
    }

    gainMoneyFromPowers() {
        let firstPowerPoints = this.firstPower.getCalculatedPoints();
        let secondPowerPoints = this.secondPower.getCalculatedPoints();
        this.playerWallet.gainMoney(firstPowerPoints);
        this.playerWallet.gainMoney(secondPowerPoints);
    }

    setOpacity(currentCurrency) {
        const mainButtonUpgradePrice = this.mainButton.getUpgradePrice();
        const firstPowerPrice = this.firstPower.getPowerPrice();
        const firstPowerUpgradePrice = this.firstPower.getPowerUpgradePrice();
        const secondPowerPrice = this.secondPower.getPowerPrice();
        const secondPowerUpgradePrice = this.secondPower.getPowerUpgradePrice();

        this.uiController.opacityOfMainButtonUpgrade(currentCurrency, mainButtonUpgradePrice);
        this.uiController.opacityOfFirstPowerButtons(currentCurrency, firstPowerPrice, firstPowerUpgradePrice);
        this.uiController.opacityOfSecondPowerButtons(currentCurrency, secondPowerPrice, secondPowerUpgradePrice);
    }

    gameLoop() {
        setTimeout(() => {
            const currentCurrency = this.playerWallet.getCurrency();


            this.uiController.displayPlayerWallet(currentCurrency);

            this.setOpacity(currentCurrency);

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