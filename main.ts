radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 7) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    }
    if (receivedNumber == 8) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("jos")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("yunh")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "kimr") {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        신호전송횟수 += 1
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("baesu")
})
let 신호전송횟수 = 0
radio.setGroup(1)
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showNumber(신호전송횟수)
})
