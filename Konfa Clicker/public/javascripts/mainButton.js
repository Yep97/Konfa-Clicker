export class MainButton {
    constructor(valueOfPress) {
        this.valueOfPress = valueOfPress;
    }

    pressMainButton() {
        return this.valueOfPress;
    }

    upgradeMainButton() {           // P�niej wprowadzi� ulepszenie 
        return this.valueOfPress++;
    }
}