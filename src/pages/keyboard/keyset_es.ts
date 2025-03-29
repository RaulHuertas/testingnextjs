import { KeySet, KeyDisplayFunction,BasicKeyStroke,MultimediaKeyStroke,MultimediaKey,HoldTap } from "./core";   



export const keyset_es = new KeySet("es")
//Main keycodes
keyset_es.add(new BasicKeyStroke("NO","","","NO"))
keyset_es.add(new BasicKeyStroke("TRANSPARENT","","","TRNS"))
kesyset_es.add(new BasicKeyStroke("A","","","A"))
keyset_es.add(new BasicKeyStroke("Q","","","Q"))
keyset_es.add(new BasicKeyStroke("E","","€","E"))
//Multimedia keycodes
keyset_es.add(new MultimediaKeyStroke(MultimediaKey.AUDIO_MUTE))
keyset_es.add(new MultimediaKeyStroke(MultimediaKey.AUDIO_VOL_DOWN))
keyset_es.add(new MultimediaKeyStroke(MultimediaKey.AUDIO_VOL_UP))
keyset_es.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_PLAY_PAUSE))
keyset_es.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_STOP))
keyset_es.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_PREV_TRACK))
keyset_es.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_NEXT_TRACK))
keyset_es.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_FAST_FORWARD))
keyset_es.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_REWIND))
keyset_es.add(new MultimediaKeyStroke(MultimediaKey.BRIGHTNESS_UP))
keyset_es.add(new MultimediaKeyStroke(MultimediaKey.BRIGHTNESS_DOWN))

    

