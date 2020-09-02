export class PlayerWallet {
    constructor(currency) {
        this.currency = currency;
    }

    hasEnoughMoney(price) {
        if (this.currency >= price)
            return true;
        else
            return false;
    }

    gainMoney(additonalMoney) {
        this.currency += additonalMoney; 
        return this.currency;
    }

    takeMoney(price) {
        this.currency -= price;
        return this.currency;
    }

    currentCurrency() {
        return this.currency;
    }
}