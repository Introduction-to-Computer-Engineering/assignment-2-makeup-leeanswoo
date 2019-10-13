input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Player_1)
    basic.showNumber(Player_2)
    if (Player_1 > Player_2) {
        basic.showString("Player 1 is winning")                 //This allows the microbit to show the players each score and notify who is winning the game currently 
    } else if (Player_1 == Player_2) {
        basic.showString("Tied")
    } else {
        basic.showString("Player 2 is winning")
    }
})

let Player_2 = 0
let Player_1 = 0                                                //Global variables of each players score at the start of the game. 
Player_1 = 0
Player_2 = 0
basic.forever(function () {
    basic.pause(1000)
    basic.pause(Math.randomRange(0, 5000))                        //This will pick a random time between 1 and 5 seconds to show the image letting players know when to clikc their button
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
            . # . . .                                                               //If "a" is pressed before it will notify the player by showing a string and an arrow pointing at "a"
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
