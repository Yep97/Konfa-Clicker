export class MainButton {
    constructor() {
        this.valueOfPress = 1;
        this.upgradePrice = 500;
        this.counter = 0;
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
}