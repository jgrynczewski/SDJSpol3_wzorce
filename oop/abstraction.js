// 2. Abstrakcja

class MailService {
    #connect() { console.log("Connect") }
    #authenticate() { console.log("Authenticate") }
    #sendMail() { console.log("Send mail") }
    #disconnect() { console.log("Disconnect") }

    sendMail() {
        this.#connect()
        this.#authenticate()
        this.#sendMail()
        this.#disconnect()
    }
}

const m = new MailService()
m.sendMail()