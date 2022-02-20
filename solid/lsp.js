// L - Liskov substitution principle

class Bird {
    fly() {
        console.log("I can fly")
    }
}


class Duck extends Bird {
    quack() {
        console.log("I can quack")
    }
}

class Penguin extends Bird {
    fly() {
        throw Error("Cannot fly")
    }
    swim() {
        console.log("I can swim")
    }
}

function makeBirdFly(bird) {
    bird.fly()
}

const duck = new Duck()
const penguin = new Penguin()

const birds = [duck, penguin]

for (const bird of birds) {
    makeBirdFly(bird)
}