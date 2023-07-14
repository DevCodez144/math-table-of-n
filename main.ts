let n = game.askForNumber("")
for (let index = 0; index <= 10; index++) {
    game.splash("" + n + " x " + index + " = " + n * index)
}
