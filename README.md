# TouchPiano

cokoino electronic

## TODO

- [ ] Add a reference for your blocks here
- [ ] Add "icon.png" image (300x200) in the root folder
- [ ] Add "- beta" to the GitHub project description if you are still iterating it.
- [ ] Turn on your automated build on https://travis-ci.org
- [ ] Use "pxt bump" to create a tagged release on GitHub
- [ ] Get your package reviewed and approved https://makecode.microbit.org/packages/approval

Read more at https://makecode.microbit.org/packages/build-your-own

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

##################
#Listening button

if (cokoinoTouchPiano.TP_Press(TP_PIANO.None)) {
	#event
}

#example
if (cokoinoTouchPiano.TP_Press(TP_PIANO.C)) {
    basic.showLeds(`
        . . # # .
        . # . . .
        . # . . .
        . # . . .
        . . # # .
        `)
}

##################
#Play Music

#example:
cokoinoJoyStick.PlayMusic(262, music.beat(BeatFraction.Whole))


##################
#Show rgb led

cokoinoTouchPiano.TP_ShowRGB(
0,
0,
0,
0
)

There are four ways to control the color:
	cokoinoTouchPiano.TP_SetColor(RGB_COLOR.RED),
	cokoinoTouchPiano.TP_SetRGB(0, 0, 0),
	neopixel.colors(NeoPixelColors.Red),
	neopixel.rgb(255, 255, 255)
	
#example:
cokoinoTouchPiano.TP_ShowRGB(
cokoinoTouchPiano.TP_SetColor(RGB_COLOR.RED),
cokoinoTouchPiano.TP_SetRGB(0, 0, 0),
neopixel.colors(NeoPixelColors.Red),
neopixel.rgb(255, 255, 255)
)

##################
#You can use all the above methods to put together a program, or you can use this default method

cokoinoTouchPiano.TP_PlayPiano()

#example:
basic.forever(() => {
    cokoinoTouchPiano.TP_PlayPiano()
})
