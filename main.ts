input.onButtonPressed(Button.A, function () {
    music.playTone(392, music.beat(BeatFraction.Half))
    encen_1()
    music.playTone(392, music.beat(BeatFraction.Half))
    encen_1()
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
})
function encen_1 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
basic.forever(function () {
	
})
