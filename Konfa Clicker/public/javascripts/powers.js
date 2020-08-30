export class powerUp {
    constructor(power, powerCost, powerUpgradeCost, powerCounter, powerPrice, powerValue, powerUpgradeValue, powerUpgradePrice, powerUpgrade) {
        this.power = document.getElementById(power);
        this.powerCost = document.getElementById(powerCost);
        this.powerUpgradeCost = document.getElementById(powerUpgradeCost);
        this.powerCounter = document.getElementById(powerCounter);
        this.powerPrice = powerPrice;
        this.powerValue = powerValue;
        this.powerUpgradeValue = powerUpgradeValue;
        this.powerUpgradePrice = powerUpgradePrice;
        this.powerUpgrade = document.getElementById(powerUpgrade);
        this.powerCost.innerHTML = this.powerPrice;
        this.powerUpgradeCost.innerHTML = this.powerUpgradePrice;
        this.powerCounter.innerHTML = 0;
    }
    
    powerClick (points, memeValue) {
        if (memeValue >= this.powerPrice) {
            this.power.style.opacity = '1';
            memeValue -= this.powerPrice;
            this.powerValue += 1;
            this.powerPrice += Math.round(Math.pow(this.powerPrice, 0.7));
            points.innerHTML = memeValue;
            this.powerCost.innerHTML = this.powerPrice;
            this.powerCounter.innerHTML++;

        } else {
            this.power.style.opacity = '0.5';
        }
    }

    powerUpgradeClick(memeValue) {
        if (memeValue >= this.powerUpgradePrice) {
            memeValue -= this.powerUpgradePrice;
            this.powerUpgradeValue = 2;
            this.powerUpgrade.disabled = true;
        }
    }

    opacityOfButtons(memeValue) {
        if (memeValue >= this.powerPrice) {
            this.power.style.opacity = '1';
        } else {
            this.power.style.opacity = '0.5';
        }
    }


}
