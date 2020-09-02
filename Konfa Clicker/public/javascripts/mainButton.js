export class MainButton {
    constructor(valueOfPress) {
        this.valueOfPress = valueOfPress;
    }

    pressMainButton() {
        return this.valueOfPress;
    }

    upgradeMainButton() {           // PóŸniej wprowadziæ ulepszenie 
        return this.valueOfPress++;
    }
}