import Image from "next/image";
import { Canvas} from "@react-three/fiber";
import {Box} from "./keyboard/keyboard";
import { OrbitControls, Sky } from "@react-three/drei";

import React, { useEffect, useState } from "react";
import { KeyboardLayout } from "./keyboard/core";

const loadLayout=(filename:string, setLayout:any)=>{
    fetch(filename).then(
      function(response){
        console.log("raw data "+response)
        return response.json()
      }
    ).then(
      function(jsonData){ 
          const newLayout = KeyboardLayout.fromJSON(jsonData.layout)
          console.log(newLayout)
          setLayout(newLayout)
      }
    )


}


export default function Home() {
  const [layout,setLayout] = useState( new KeyboardLayout())

  useEffect(()=>{
    loadLayout("keyboardlayouts/nutymini.json",setLayout)
  },[])


  console.log("render")
  console.log(layout.keys.length)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      <Canvas orthographic camera ={ {
            position:[0,0,100],
            zoom:1,
            left:layout.minX()*1.5,
            right:layout.maxX()*1.5,
            top:layout.maxY(),
            bottom:layout.minY()
            }
        }>
        <OrbitControls></OrbitControls>
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
    </div>
  );
}
