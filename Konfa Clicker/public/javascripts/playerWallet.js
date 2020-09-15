export class PlayerWallet {
    constructor() {
        this.currency = 0;
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

    getCurrency() {
        return this.currency;
    }
}