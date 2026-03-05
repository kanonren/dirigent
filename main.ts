input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("sTART")
    basic.showIcon(IconNames.Heart)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showString("Stop")
    basic.showIcon(IconNames.No)
})
radio.setGroup(42)
basic.showString("d")
basic.forever(function () {
	
})
