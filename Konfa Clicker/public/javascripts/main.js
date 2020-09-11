import { GameEngine } from './gameEngine.js'


class Main {
    constructor() {
        this.gameEngine = new GameEngine();
    }

    startGame() {
        this.gameEngine.gameLoop();
    }
}

const main = new Main();
main.startGame();
