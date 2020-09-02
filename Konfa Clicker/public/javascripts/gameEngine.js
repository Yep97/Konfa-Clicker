import { Power } from './power.js'
import { PlayerWallet } from './playerWallet.js'
import { MainButton } from './mainButton.js'
import { UIController } from './UIController.js'
    
export class GameEngine {
    constructor() {
        this.playerWallet = new PlayerWallet(0);
        this.firstPower = new Power(0.1, 0, 10, 500);
        this.uiController = new UIController();
        this.mainButton = new MainButton(1);

        this.timeCounter = 1;

        const startButtonClickListener = () => {
            startSection.style.opacity = '0';
            setTimeout(function () {
                body.removeChild(startSection);
            }, 1000);
            uiController.showGame();
        };

        const mainButtonClickListener = () => {
            const valueOfPress = mainButton.pressMainButton();
            playerWallet.gainMoney(valueOfPress);
        };

        const firstPowerButtonClickListener = () => {
            const powerPrice = firstPower.getPowerPrice();
            if (playerWallet.hasEnoughMoney(powerPrice)) {
                playerWallet.takeMoney(powerPrice);
                firstPower.buyPower();
                firstPower.updatePowerPrice();
            }
        };

        const firstPowerUpgradeButtonClickListener = () => {
            const powerUpgradePrice = firstPower.getPowerUpgradePrice();
            if (playerWallet.hasEnoughMoney(powerUpgradePrice)) {
                playerWallet.takeMoney(powerUpgradePrice);
                firstPower.upgradePower();
            }
        };

        const startGameLoadListener = () => {
            uiController.showGame();
            timeLoop();
        }

        uiController.setStartGameListener(startGameLoadListener);
        uiController.setStartButtonListener(startButtonClickListener);
        uiController.setMainButtonListener(mainButtonClickListener);
        uiController.setFirstPowerButtonListener(firstPowerButtonClickListener);
        uiController.setFirstPowerUpgradeButtonListener(firstPowerUpgradeButtonClickListener);
    }

    showeFirstPowerCounter() {
        const powerCounter = firstPower.getPowerCounter();
        uiController.displayFirstPowerCounter(powerCounter);
    }

    showFirstPowerPrice() {
        const powerPrice = firstPower.getPowerPrice();
        uiController.displayFirstPowerPrice(powerPrice);
    }

    showFirstPowerUpgradePrice() {
        const powerUpgradePrice = firstPower.getPowerUpgradePrice();
        uiController.displayFirstPowerUpgradePrice(powerUpgradePrice);
    }

    gainMoneyFromSelectedPower(selectedPower) {
        let powerPoints = selectedPower.getCalculatedPoints();
        playerWallet.gainMoney(powerPoints);
    }

    setOpacityOfFirstPower(currentCurrency) {
        const powerPrice = firstPower.getPowerPrice();
        const powerUpgradePrice = firstPower.getPowerUpgradePrice();
        uiController.opacityOfFirstPowerButtons(currentCurrency, powerPrice, powerUpgradePrice);
    }

    gameLoop() {
        setTimeout(function () {
            const currentCurrency = playerWallet.currentCurrency();

            uiController.displayPlayerWallet(currentCurrency);

            setOpacityOfSelectedPower(currentCurrency);

            showFirstPowerCounter();
            showFirstPowerPrice();
            showFirstPowerUpgradePrice();

            gainMoneyFromSelectedPower(firstPower);

            timeCounter++;
            if (timeCounter < Infinity) {
                gameLoop();
            }
        }, 100)
    }
}