// 4. Polimorfizm

// Statyczna kontrola typów, dynamiczne typowanie, duck typing
// Interfejs = kontrakt, implementacja = realizacja kontrakta

class DrawableUIWidget {
    enable() { }
    draw() { }
}


class Checkbox extends DrawableUIWidget {
    enable() {
        console.log("Enable checkbox")
    }
    draw() {
        console.log("Draw checkbox")
    }
}


class Button extends DrawableUIWidget {
    enable() {
        console.log("Enable button")
    }
    draw() {
        console.log("Draw button")
    }
}


function drawWidget(item) {
    item.draw()
}

const c = new Checkbox()
const b = new Button()

widgets = [c, b]

for (const widget of widgets) {
    drawWidget(widget)
}