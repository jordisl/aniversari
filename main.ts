input.onButtonPressed(Button.A, function () {
    music.playTone(392, music.beat(BeatFraction.Half))
    encen_1()
    music.playTone(392, music.beat(BeatFraction.Half))
    encen_1()
    music.playTone(440, music.beat(BeatFraction.Whole))
    encen_1()
    music.playTone(392, music.beat(BeatFraction.Whole))
    encen_1()
    music.playTone(523, music.beat(BeatFraction.Whole))
    encen_1()
    music.playTone(494, music.beat(BeatFraction.Double))
    encen_2()
})
function encen_1 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function encen_2 () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.B, function () {
    music.playTone(392, music.beat(BeatFraction.Half))
    encen_1()
    music.playTone(392, music.beat(BeatFraction.Half))
    encen_1()
    music.playTone(440, music.beat(BeatFraction.Whole))
    encen_1()
    music.playTone(392, music.beat(BeatFraction.Whole))
    encen_1()
    music.playTone(587, music.beat(BeatFraction.Whole))
    encen_1()
    music.playTone(523, music.beat(BeatFraction.Double))
    encen_2()
})
basic.forever(function () {
	
})
