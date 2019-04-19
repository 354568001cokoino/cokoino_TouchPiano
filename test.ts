cokoinoTouchPiano.TP_ShowRGB(
cokoinoTouchPiano.TP_SetRGB(158, 119, 150),
cokoinoTouchPiano.TP_SetColor(RGB_COLOR.GREEN),
2643,
22197
)
cokoinoTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Whole))
cokoinoTouchPiano.TP_PlayMusic(294, music.beat(BeatFraction.Whole))
cokoinoTouchPiano.TP_PlayMusic(330, music.beat(BeatFraction.Whole))
cokoinoTouchPiano.TP_PlayMusic(349, music.beat(BeatFraction.Whole))
cokoinoTouchPiano.TP_PlayMusic(392, music.beat(BeatFraction.Whole))
cokoinoTouchPiano.TP_PlayMusic(440, music.beat(BeatFraction.Whole))
cokoinoTouchPiano.TP_PlayMusic(494, music.beat(BeatFraction.Whole))
basic.forever(function () {
    cokoinoTouchPiano.TP_PlayPiano()
})
