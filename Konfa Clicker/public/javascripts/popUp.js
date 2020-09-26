export class PopUp {
    constructor() {
        this.preparingEventCounter = 0;
        this.preparingEventTimer = 1200;
        this.eventDurationCounter = 500;
        this.eventDurationTimer = 500;
    }

    incresePreparingEventCounter() {
        this.preparingEventCounter++;
        return this.preparingEventCounter;
    }

    resetPreparingEventCounter() {
        this.preparingEventCounter = 0;
        return this.preparingEventCounter;
    }

    decreseEventDurationCounter() {
        this.eventDurationCounter--;
        return this.eventDurationCounter;
    }

    resetEventDurationCounter(timer) {
        this.eventDurationCounter = timer;
        return this.eventDurationCounter;
    }

    getPreparingEventCounter() {
        return this.preparingEventCounter;
    }

    getPreparingEventTimer() {
        return this.preparingEventTimer;
    }

    getEventDurationCounter() {
        return this.eventDurationCounter;
    }

    getEventDurationTimer() {
        return this.eventDurationTimer;
    }
}