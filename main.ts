input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("START")
    basic.showIcon(IconNames.Heart)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showString("STOP")
    basic.showIcon(IconNames.No)
})
radio.setGroup(42)
basic.showString("d")
basic.forever(function () {
    let spielt_gerade = 0
    if (spielt_gerade) {
        radio.sendString("BEAT")
        basic.pause(500)
    }
})
