export class Power {
    constructor(baseValue, powerCounter, powerPrice, powerUpgradePrice) {
        this.baseValue = baseValue;
        this.powerCounter = powerCounter;
        this.powerPrice = powerPrice;
        this.powerUpgradePrice = powerUpgradePrice;
    }

    buyPower() {
        return this.powerCounter++;
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