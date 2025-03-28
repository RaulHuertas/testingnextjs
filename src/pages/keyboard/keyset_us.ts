import { KeyDisplayFunction,BasicKeyStroke,MultimediaKeyStroke,MultimediaKey,HoldTap } from "./core";   



export const keyset_us : Array<KeyDisplayFunction> = [

    //Basic keycodes
    new BasicKeyStroke("NO","","","NO"),
    new BasicKeyStroke("TRANSPARENT","","","TRNS"),
    new BasicKeyStroke("A","","","A"),
    new BasicKeyStroke("Q","","@","Q"),
    new BasicKeyStroke("E","","€","E"),
    //Multimedia keycodes
    new MultimediaKeyStroke(MultimediaKey.AUDIO_MUTE),
    new MultimediaKeyStroke(MultimediaKey.AUDIO_VOL_DOWN),
    new MultimediaKeyStroke(MultimediaKey.AUDIO_VOL_UP),
    new MultimediaKeyStroke(MultimediaKey.MEDIA_PLAY_PAUSE),
    new MultimediaKeyStroke(MultimediaKey.MEDIA_STOP),
    new MultimediaKeyStroke(MultimediaKey.MEDIA_PREV_TRACK),
    new MultimediaKeyStroke(MultimediaKey.MEDIA_NEXT_TRACK),
    new MultimediaKeyStroke(MultimediaKey.MEDIA_FAST_FORWARD),
    new MultimediaKeyStroke(MultimediaKey.MEDIA_REWIND),
    new MultimediaKeyStroke(MultimediaKey.BRIGHTNESS_UP),
    new MultimediaKeyStroke(MultimediaKey.BRIGHTNESS_DOWN)

    
]