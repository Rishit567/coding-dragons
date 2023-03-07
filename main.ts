input.onButtonPressed(Button.A, function () {
    basic.showString("DANGER")
    basic.showString("" + (images.createImage(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)))
})
control.inBackground(function () {
    microshield.Stepper(microshield.Steppers.STEP1, 25, microshield.stepUnit.Degrees)
    music.playTone(262, music.beat(BeatFraction.Breve))
    basic.showNumber(input.compassHeading())
})
