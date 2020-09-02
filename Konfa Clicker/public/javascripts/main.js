import { Power } from './power.js'
import { PlayerWallet } from './playerWallet.js'
import { MainButton } from './mainButton.js'
import { UIController } from './UIController.js'

class Main {
    constructor() {
        this.playerWallet = new PlayerWallet(0);
        this.firstPower = new Power(0.1, 0, 10, 500);
        this.uiController = new UIController();
        this.mainButton = new MainButton(1);

        let timeCounter = 1;

        //let mainButtonButton = uiController.getMainButton();
        //let firstPowerButton = uiController.getFirstPowerButton();
        //let firstPowerUpgradeButton = uiController.getFirstPowerUpgradeButton();

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

        function displaySelectedPowerCounter(selectedPower, counterId) {
            const powerCounter = selectedPower.getPowerCounter();
            uiController.displayPowerCounter(powerCounter, counterId);
        }

        function displaySelectedPowerPrice(selectedPower, priceId) {
            const powerPrice = selectedPower.getPowerPrice();
            uiController.displayPowerPrice(powerPrice, priceId);
        }

        function displaySelectedPowerUpgradePrice(selectedPower, priceId) {
            const powerUpgradePrice = selectedPower.getPowerUpgradePrice();
            uiController.displayPowerPrice(powerUpgradePrice, priceId);
        }
        /*
        function chceckOpacityOfSelectedPower(selectedPower, currentCurrency, button) {
            const powerPrice = selectedPower.getPowerPrice();
            uiController.opacityOfButtons(currentCurrency, powerPrice, button);
        }
    
        function chceckOpacityOfSelectedPowerUpgrade(selectedPower, currentCurrency, button) {
            const powerUpgradePrice = selectedPower.getPowerUpgradePrice();
            uiController.opacityOfButtons(currentCurrency, powerUpgradePrice, button);
        }
        */

        function gainMoneyFromSelectedPower(selectedPower) {
            let powerPoints = selectedPower.getCalculatedPoints();
            playerWallet.gainMoney(powerPoints);
        }

        uiController.setStartButtonListener(startButtonClickListener);
        uiController.showGame();


        function timeLoop() {
            setTimeout(function () {
                const currentCurrency = playerWallet.currentCurrency();

                uiController.displayPlayerWallet(currentCurrency);

                /*
                chceckOpacityOfSelectedPower(firstPower, currentCurrency, firstPowerButton);
                chceckOpacityOfSelectedPowerUpgrade(firstPower, currentCurrency, firstPowerUpgradeButton);
                */


                displaySelectedPowerCounter(firstPower, "firstPowerCounter");
                displaySelectedPowerPrice(firstPower, "firstPowerPrice");
                displaySelectedPowerUpgradePrice(firstPower, "firstPowerUpgradePrice");

                gainMoneyFromSelectedPower(firstPower);


                uiController.setMainButtonListener(mainButtonClickListener);
                uiController.setFirstPowerButtonListener(firstPowerButtonClickListener);
                uiController.setFirstPowerUpgradeButtonListener(firstPowerUpgradeButtonClickListener);

                timeCounter++;
                if (timeCounter < Infinity) {
                    timeLoop();
                }
            }, 100)
        }


        window.onload = function start() {
            timeLoop();
        }
    }
}