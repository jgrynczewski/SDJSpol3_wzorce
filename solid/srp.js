// S - Single Responsible Principle (SRP)
// Zasada jednej odpowiedzialności

class Journal {
    constructor() {
        this.entries = []
        this.count = 0
    }

    addEntry(text) {
        this.entries.push(text)
        this.count++
        this.logMessage('Dodano nowy wpis')
    }

    removeEntry(idx) {
        this.entries.splice(idx, 1)
    }

    logMessage(msg) {
        console.log(msg)
    }
}

const j = new Journal()
j.addEntry("I wake up!")
j.addEntry("Hello")