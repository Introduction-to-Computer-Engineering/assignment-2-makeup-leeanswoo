input.onGesture(Gesture.Shake, function () {
    led.enable(false)
})
input.onButtonPressed(Button.AB, function () {
    led.enable(true)
})
let Player_1 = 0
let Player_2 = 0
basic.forever(function () {
    basic.pause(1000)
    basic.pause(Math.randomRange(0, 5000))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.pause(500)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("Player 1")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        Player_1 += 1
        basic.showNumber(Player_1)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("Player 2!")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        Player_2 += 1
        basic.showNumber(Player_2)
    }
    basic.pause(1000)
    basic.clearScreen()
})
