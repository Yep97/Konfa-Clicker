export class Power {
    constructor(baseValue, powerPrice, powerUpgradePrice) {
        this.baseValue = baseValue;
        this.powerCounter = 0;
        this.powerPrice = powerPrice;
        this.powerUpgradePrice = powerUpgradePrice;
        this.powerUpgradeCounter = 0;
    }

    buyPower() {
        return this.powerCounter++;
    }

    buyPowerUpgrade() {
        return this.powerUpgradeCounter++;
    }

    getPowerCounter() {
        return this.powerCounter;
    }

    updatePowerPrice() {
        if (this.powerCounter === 0)
            return this.powerPrice;
        else {
            this.powerPrice += Math.round(Math.pow(this.powerPrice, 0.7));
            return this.powerPrice;
        }
    }

    updatePowerUpgradePrice() {
        if (this.powerUpgradeCounter === 0)
            return this.powerUpgradePrice;
        else {
            this.powerUpgradePrice *= 5;
            return this.powerPrice;
        }
    }

    getPowerPrice() {
        return this.powerPrice;
    }

    upgradePower() {
        this.baseValue *= 2;
        return this.baseValue;
    }

    getPowerUpgradePrice() {
        return this.powerUpgradePrice;
    }

    getPowerPoints() {
        return this.baseValue;
    }

    getCalculatedPoints() {
        return this.baseValue * this.powerCounter;
    }
}