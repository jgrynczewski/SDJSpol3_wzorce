class IMachine {
    print() {
        throw Error("Not implemented error")
    }
    scan() {
        throw Error("Not implemented error")
    }
    fax() {
        throw Error("Not implemented error")
    }
}


class MultifunctionalPrinter extends IMachine {
    print() {
        console.log("Drukuję")
    }

    scan() {
        console.log("Skanuje")
    }

    fax() {
        console.log("Wysyłam faks")
    }
}

class OldFashionedPrinter extends IMachine {
    print() {
        console.log("Drukuję")
    }
    scan() {
        throw Error("Printer cannot scan")
    }
}


const myMachine = new MultifunctionalPrinter()
myMachine.print()
myMachine.scan()
myMachine.fax()

const myOldPrinter = new OldFashionedPrinter()
myOldPrinter.print()
