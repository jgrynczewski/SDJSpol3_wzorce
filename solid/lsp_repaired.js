// L - Liskov substitution principle

class FlyingBird {
    fly() {
        console.log("I can fly")
    }
}

class SwimmingBird {
    fly() {
        console.log("I can swim")
    }
}


class Duck extends FlyingBird {
    quack() {
        console.log("I can quack")
    }
}

class Penguin extends SwimmingBird {
    swim() {
        console.log("I can swim")
    }
}

function makeBirdFly(bird) {
    bird.fly()
}

function makeBirdSwim(bird) {
    bird.swim()
}

const duck = new Duck()
const penguin = new Penguin()

makeBirdFly(duck)
makeBirdSwim(penguin)
