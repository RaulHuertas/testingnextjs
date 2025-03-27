'use client'
import Image from "next/image";
import { Canvas} from "@react-three/fiber";
import {Box} from "./keyboard/keyboardDisplay";
import { OrbitControls, Sky } from "@react-three/drei";

import React, { useEffect, useState } from "react";
import { MultimediaKey, KeyboardLayout,BasicKeyStroke,printKey, MultimediaKeyStroke,HoldTap} from "./keyboard/core";



const loadLayout=(filename:string, setLayout:any)=>{
    fetch(filename).then(
      function(response){
        return response.json()
      }
    ).then(
      function(jsonData){ 
          const newLayout = KeyboardLayout.fromJSON(jsonData.layout)
          setLayout(newLayout)
      }
    )

}

export default function Home() {
  const [layout,setLayout] = useState( new KeyboardLayout())
  const keyQ = new BasicKeyStroke("Q","@","","Q")
  printKey(keyQ)
  const mute = new MultimediaKeyStroke(MultimediaKey.AUDIO_MUTE)
  printKey(mute)
  const holdTap = new HoldTap()
  holdTap.onTapFunction = keyQ
  holdTap.onHoldFunction = mute
  printKey(holdTap)



  useEffect(()=>{
    loadLayout("keyboardlayouts/nutymini.json",setLayout)
  },[])



  return (
      <main className="flex flex-col gap-[0px] h-screen w-screen ">
      
      <Canvas id="mainview" style={{
        height: '50%',
      }} orthographic camera ={ {
            position:[0,0,80],
            zoom:2.0,
            //left:layout.minX()-20,
            //right:layout.maxX()+20,
            //top:layout.maxY(),
            //bottom:layout.minY()
            }
        }
        >
        <ambientLight intensity={0.5}></ambientLight> 
        <Sky sunPosition={[100, 10, 100]}></Sky>
        <Box position={[-9.5, 0, 0]} > </Box>
        <Box position={[ 9.5, 0, 0]} > </Box>
        {
          layout.keys.map((keyProps : Float32Array[],index:number) => {
            return  <Box position={[keyProps[0],keyProps[1],0]} key={index}  ></Box>
          }) 
        }
      </Canvas>

      </main>
  );
}
