import { KeySet,KeyDisplayFunction,BasicKeyStroke,MultimediaKeyStroke,MultimediaKey,HoldTap } from "./core";   


export const keyset_latam = new KeySet("latam")


//Basic keycodes
keyset_latam.add(new BasicKeyStroke("NO","","","NO"))
keyset_latam.add(new BasicKeyStroke("TRANSPARENT","","","TRNS"))
keyset_latam.add(new BasicKeyStroke("A","","","A"))
keyset_latam.add(new BasicKeyStroke("Q","","@","Q"))
keyset_latam.add(new BasicKeyStroke("E","","","E"))
//Multimedia keycodes
keyset_latam.add(new MultimediaKeyStroke(MultimediaKey.AUDIO_MUTE))
keyset_latam.add(new MultimediaKeyStroke(MultimediaKey.AUDIO_VOL_DOWN))
keyset_latam.add(new MultimediaKeyStroke(MultimediaKey.AUDIO_VOL_UP))
keyset_latam.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_PLAY_PAUSE))
keyset_latam.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_STOP))
keyset_latam.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_PREV_TRACK))
keyset_latam.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_NEXT_TRACK))
keyset_latam.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_FAST_FORWARD))
keyset_latam.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_REWIND))
keyset_latam.add(new MultimediaKeyStroke(MultimediaKey.BRIGHTNESS_UP))
keyset_latam.add(new MultimediaKeyStroke(MultimediaKey.BRIGHTNESS_DOWN))

    
