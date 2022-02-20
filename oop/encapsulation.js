// enkapsulacja, heremetyzacja, kapsułkowanie

// v1 - bez kontroli
// class Account {
//     constructor(balance) {
//         this.balance = balance
//     }
// }

// const a = new Account(100)
// console.log(a.balance)
// a.balance = 250
// console.log(a.balance)
// a.balance = -350
// console.log(a.balance)
// a.balance = "abc"
// console.log(a.balance)

// v2 - settery, gettery, modyfiaktory dostępu
// modyfikatory dostępy
// składowa publiczna (public)
// składowa chroniona _ (protected)
// składowa prywatna # (private)

// class Account {
//     constructor(balance) {
//         this.#balance = balance
//     }
//     // getter (mutator)
//     getBalance() {
//         return this.#balance
//     }

//     // setter (accessor)
//     setBalance(newBalance) {
//         if (isNaN(newBalance)) {
//             console.log("Błąd. Podano nieprawidłową wartość")
//         } else if (newBalance < 0) {
//             console.log("Błąd. Kwota mniejsza od zera")
//         } else {
//             this.#balance = newBalance
//         }
//     }
// }

// const a = new Account(100)
// console.log(a.getBalance())
// a.setBalance(250)
// console.log(a.getBalance())
// a.setBalance(-350)
// console.log(a.getBalance())
// a.setBalance("abc")
// console.log(a.getBalance())

// v3 - properties
class Account {
    #balance

    constructor(balance) {
        this.#balance = balance
    }
    // getter (mutator)
    get balance() {
        return this.#balance
    }

    // setter (accessor)
    set balance(newBalance) {
        if (isNaN(newBalance)) {
            console.log("Błąd. Podano nieprawidłową wartość")
        } else if (newBalance < 0) {
            console.log("Błąd. Kwota mniejsza od zera")
        } else {
            this.#balance = newBalance
        }
    }
}

const a = new Account(100)
console.log(a.balance)
a.balance = 250
console.log(a.balance)
a.balance = -350
console.log(a.balance)
a.balance = "abc"
console.log(a.balance)
