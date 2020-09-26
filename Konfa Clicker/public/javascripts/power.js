export class Power {
    constructor(baseValue, powerPrice, powerUpgradePrice, counterValue) {
        this.baseValue = baseValue;
        this.powerPrice = powerPrice;
        this.powerUpgradePrice = powerUpgradePrice;
        this.counterValue = counterValue;

        this.counterUpgradeValue = 6 * this.counterValue;
        this.powerCounter = 0;
        this.powerUpgradeCounter = 0;
        this.summedUpCounterValue = 0;
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

    getPowerUpgradeCounter() {
        return this.powerUpgradeCounter;
    }

    getValueOfCounters() {
        this.summedUpCounterValue = 0;
        this.summedUpCounterValue = 0.1 * (this.powerCounter * this.counterValue + this.powerUpgradeCounter * this.counterUpgradeValue) * this.powerPrice;
        return this.summedUpCounterValue;
    }



}