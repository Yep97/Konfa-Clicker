export class MainButton {
    constructor() {
        this.valueOfPress = 1;
        this.upgradePrice = 500;
        this.counter = 0;
        this.counterValue = 20;
        this.summedUpCounterValue = 0;
    }

    pressButton() {
        return this.valueOfPress;
    }

    updateUpgradePrice() {
        this.upgradePrice *= 10;
        return this.upgradePrice;
    }

    buyUpgrade() {
        return this.counter++;
    }

    upgradeValueOfPress() {
        this.valueOfPress *= 2;
        return this.valueOfPress;
    }

    getUpgradePrice() {
        return this.upgradePrice;
    }

    getValueOfCounters() {
        this.summedUpCounterValue = 0;
        this.summedUpCounterValue = 0.1 * this.counter * this.counterValue * this.upgradePrice;
        return this.summedUpCounterValue;
    }
}