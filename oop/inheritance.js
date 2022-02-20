class UIWidget {
    enable() { console.log("Enable") }
}

class TextButton extends UIWidget { }

const t = new TextButton()
t.enable()