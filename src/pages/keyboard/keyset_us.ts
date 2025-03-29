import { KeyDisplayFunction,BasicKeyStroke,MultimediaKeyStroke,MultimediaKey,HoldTap } from "./core";   



export const keyset_us = new KeySet("us")


//Basic keycodes
keyset_us.add(new BasicKeyStroke("NO","","","NO"))
keyset_us.add(new BasicKeyStroke("TRANSPARENT","","","TRNS"))
keyset_us.add(new BasicKeyStroke("A","","","A"))
keyset_us.add(new BasicKeyStroke("Q","","","Q"))
keyset_us.add(new BasicKeyStroke("E","","","E"))
//Multimedia keycodes
keyset_us.add(new MultimediaKeyStroke(MultimediaKey.AUDIO_MUTE))
keyset_us.add(new MultimediaKeyStroke(MultimediaKey.AUDIO_VOL_DOWN))
keyset_us.add(new MultimediaKeyStroke(MultimediaKey.AUDIO_VOL_UP))
keyset_us.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_PLAY_PAUSE))
keyset_us.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_STOP))
keyset_us.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_PREV_TRACK))
keyset_us.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_NEXT_TRACK))
keyset_us.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_FAST_FORWARD))
keyset_us.add(new MultimediaKeyStroke(MultimediaKey.MEDIA_REWIND))
keyset_us.add(new MultimediaKeyStroke(MultimediaKey.BRIGHTNESS_UP))
keyset_us.add(new MultimediaKeyStroke(MultimediaKey.BRIGHTNESS_DOWN))

    
