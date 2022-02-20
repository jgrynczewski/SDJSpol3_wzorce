import logMessage from "./logger.js";

class Journal {
    constructor() {
        this.entries = []
        this.count = 0
    }

    addEntry(text) {
        this.entries.push(text)
        this.count++
        logMessage('Dodano nowy wpis')
    }

    removeEntry(idx) {
        this.entries.splice(idx, 1)
    }
}

const j = new Journal()
j.addEntry("I wake up!")
j.addEntry("Hello")