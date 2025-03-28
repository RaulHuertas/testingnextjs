
export class KeyboardLayout{
    name : string = "";
    keys : Float32Array[][]= [];
    public static fromJSON(obj : any):KeyboardLayout{
        const ret = new KeyboardLayout();
        ret.name = obj['name'] as string;
        ret.keys = obj['keys'] as Int32Array[][];
        
        return ret;    
    }
    minX():number{
        let minX = 0;
        for(const keyProps of this.keys){
            if(  (keyProps[0] as number ) < minX){
                minX = keyProps[0];
            }
        }
        return minX;
    }

    minY():number{
        let minY = 0;
        for(const keyProps of this.keys){
            if(  (keyProps[1] as number ) < minY){
                minY = keyProps[1];
            }
        }
        return minY;
    }

    maxX():number{
        let maxX = 0;
        for(const keyProps of this.keys){
            if(  (keyProps[0] as number ) > maxX){
                maxX = keyProps[0];
            }
        }
        return maxX;
    }   

    maxY():number{      
        let maxY = 0;
        for(const keyProps of this.keys){
            if(  (keyProps[1] as number ) > maxY){
                maxY = keyProps[1];
            }
        }
        return maxY;
    }

}


export interface KeyDisplayFunction{
    mainChar() : string
    secondChar() : string
    thirdChar() : string
    groupColor(): Int32Array[]
    mainCharColor(): Int32Array[]
    secondCharColor(): Int32Array[]
    thirdCharColor(): Int32Array[]
    kmkKey():string
}

export class BasicKeyStroke implements KeyDisplayFunction{
    main : string = "";
    second: string = "";
    third: string = "";
    kmkKeyname : string = "";
    constructor(main:string, second:string, third:string, kmkKeyname:string){
        this.main = main;
        this.second = second;
        this.third = third;
        this.kmkKeyname = kmkKeyname;
    }
    //INTERFACE IMPLEMENTATION
    groupColor(): Int32Array[]{
        const ret = new Int32Array(3);
        ret[0]  = 215
        ret[1]  = 215
        ret[2]  = 215
        return ret
    }
    mainChar(): string {
        return this.main;
    }
    secondChar(): string {
        return this.second;
    }
    thirdChar(): string {
        return this.third; 
    }
    mainCharColor(): Int32Array[]{
        const ret = new Int32Array(3);
        ret[0]  = 0
        ret[1]  = 0
        ret[2]  = 0
        return ret
    }
    secondCharColor(): Int32Array[]{
        const ret = new Int32Array(3);
        ret[0]  = 0
        ret[1]  = 0
        ret[2]  = 255
        return ret
    }
    thirdCharColor(): Int32Array[]{
        const ret = new Int32Array(3);
        ret[0]  = 255
        ret[1]  = 0
        ret[2]  = 0
        return ret
    }
    kmkKey(): string {
        return this.kmkKeyname;
    }   
}

export enum MultimediaKey{
    AUDIO_MUTE,
    AUDIO_VOL_UP,
    AUDIO_VOL_DOWN,
    BRIGHTNESS_UP,
    BRIGHTNESS_DOWN,
    MEDIA_NEXT_TRACK,
    MEDIA_PREV_TRACK,
    MEDIA_STOP,
    MEDIA_PLAY_PAUSE,
    MEDIA_FAST_FORWARD,
    MEDIA_REWIND
}
export class MultimediaKeyStroke implements KeyDisplayFunction{
    key : MultimediaKey = MultimediaKey.AUDIO_MUTE;
    kmkKeyname : string = "";
    constructor(key:MultimediaKey){
        this.key = key
        if (this.key == MultimediaKey.AUDIO_MUTE){
           this.kmkKeyname = "MUTE" 
        }else if (this.key == MultimediaKey.AUDIO_VOL_UP){
            this.kmkKeyname = "AUDIO_VOL_UP"
        }else if (this.key == MultimediaKey.AUDIO_VOL_DOWN){
            this.kmkKeyname = "AUDIO_VOL_DOWN"
        }else if (this.key == MultimediaKey.BRIGHTNESS_UP){
            this.kmkKeyname = "BRIGHTNESS_UP"
        }else if (this.key == MultimediaKey.BRIIGHTNESS_DOWN){
            this.kmkKeyname = "BRIGHTNESS_DOWN"
        }else if (this.key == MultimediaKey.MEDIA_NEXT_TRACK){
            this.kmkKeyname = "MEDIA_NEXT_TRACK"
        }else if (this.key == MultimediaKey.MEDIA_PREV_TRACK){
            this.kmkKeyname = "MEDIA_PREV_TRACK"
        }else if (this.key == MultimediaKey.MEDIA_STOP){
            this.kmkKeyname = "MEDIA_STOP"
        }else if (this.key == MultimediaKey.MEDIA_PLAY_PAUSE){
            this.kmkKeyname = "MEDIA_PLAY_PAUSE"
        }else if (this.key == MultimediaKey.MEDIA_FAST_FORWARD){
            this.kmkKeyname = "MEDIA_FAST_FORWARD"
        }else if (this.key == MultimediaKey.MEDIA_REWIND){
            this.kmkKeyname = "MEDIA_REWIND"
        }
    }
    //INTERFACE IMPLEMENTATION
    groupColor(): Int32Array[]{
        const ret = new Int32Array(3);
        ret[0]  = 0
        ret[1]  = 100
        ret[2]  = 218
        return ret
    }
    mainChar(): string {
        let res = ""
        if (this.key == MultimediaKey.AUDIO_MUTE){
           res = "MUTE" 
        }else if (this.key == MultimediaKey.AUDIO_VOL_UP){
            res = "VOL UP"
        }else if (this.key == MultimediaKey.AUDIO_VOL_DOWN){
            res = "VOL DOWN"
        }else if (this.key == MultimediaKey.BRIGHTNESS_UP){
            res = "BRIGHT UP"
        }else if (this.key == MultimediaKey.BRIGHTNESS_DOWN){
            res = "BRIGHT DOWN"
        }else if (this.key == MultimediaKey.MEDIA_NEXT_TRACK){
            res = "NEXT TRACK"
        }else if (this.key == MultimediaKey.MEDIA_PREV_TRACK){
            res = "PREV TRACK"
        }else if (this.key == MultimediaKey.MEDIA_STOP){
            res = "STOP"
        }else if (this.key == MultimediaKey.MEDIA_PLAY_PAUSE){
            res = "PLAY/PAUSE"
        }else if (this.key == MultimediaKey.MEDIA_FAST_FORWARD){
            res = "FAST FORWARD"
        }else if (this.key == MultimediaKey.MEDIA_REWIND){
            res = "REWIND"
        }
        return res;
    }
    secondChar(): string {
        return "";
    }
    thirdChar(): string {
        return ""; 
    }
    mainCharColor(): Int32Array[]{
        const ret = new Int32Array(3);
        ret[0]  = 0
        ret[1]  = 0
        ret[2]  = 255
        return ret
    }
    secondCharColor(): Int32Array[]{
        const ret = new Int32Array(3);
        ret[0]  = 0
        ret[1]  = 0
        ret[2]  = 255
        return ret
    }
    thirdCharColor(): Int32Array[]{
        const ret = new Int32Array(3);
        ret[0]  = 0
        ret[1]  = 0
        ret[2]  = 255
        return ret
    }
    kmkKey(): string {
        return this.kmkKeyname;
    }
}

export class HoldTap implements KeyDisplayFunction{
    onTapFunction : KeyDisplayFunction;
    onHoldFunction : KeyDisplayFunction;
    kmkKeyname : string = "";
    static defaultHoldTime_ms : number = 200
    static holdTime_ms : number = 200
    mainChar(): string {
       if (this.onTapFunction != null){
           return this.onTapFunction.mainChar()
       }else{
        return ""
       } 
    } 
    secondChar(): string {
        if (this.onHoldFunction != null){
            return this.onHoldFunction.mainChar()
        }else{
            return ""
        }  
    }
    thirdChar(): string {
        return  ""
    }
    groupColor(): Int32Array[] {
        const ret = new Int32Array(3);
        ret[0]  = 255
        ret[1]  = 0
        ret[2]  = 255
        return ret
    }
    mainCharColor(): Int32Array[] {
        if(this.onTapFunction != null){
            return this.onTapFunction.mainCharColor()
        }else{
            return new Int32Array(3)
        } 
    }
    secondCharColor(): Int32Array[] {
        if(this.onHoldFunction != null){
            return this.onHoldFunction.mainCharColor()
        }else{
            return new Int32Array(3)
        } 
    }
    thirdCharColor(): Int32Array[] {
        return new Int32Array(3)
    }
    kmkKey(): string {
        return "kc.HT( kc."+this.onTapFunction.kmkKey()+", kc."+this.onHoldFunction.kmkKey()+")";
    }   
}

export function printKey(key:KeyDisplayFunction):void{
    console.log("Printing key ")
    console.log("\ttype: "+(key.constructor.name))
    console.log("\tmainchar: "+key.mainChar())
    console.log("\tsecondarychar: "+key.secondChar())
    console.log("\tthirdchar: "+key.thirdChar())
    console.log("\tkmkKeyname: "+key.kmkKey())
}

export const keyset_none : Array<KeyDisplayFunction>  = []
//TODO: mouse keycodes, layer navigation