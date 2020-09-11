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
            uiController.hideTitle();
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
            //gameLoop();
        };

        this.uiController.setStartGameListener(startGameLoadListener);
        this.uiController.setStartButtonListener(startButtonClickListener);
        this.uiController.setMainButtonListener(mainButtonClickListener);
        this.uiController.setFirstPowerButtonListener(firstPowerButtonClickListener);
        this.uiController.setFirstPowerUpgradeButtonListener(firstPowerUpgradeButtonClickListener);
    }

    showFirstPowerCounter() {
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
            //const currentCurrency = playerWallet.getCurrentCurrency();
            const currentCurrency = playerWallet.getCurrency();

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