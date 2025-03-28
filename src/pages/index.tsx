'use client'
import Image from "next/image";
import { Canvas} from "@react-three/fiber";
import {Box} from "./keyboard/keyboardDisplay";
import { OrbitControls, Sky } from "@react-three/drei";

import React, { useEffect, useState } from "react";
import { MultimediaKey, KeyboardLayout,BasicKeyStroke,printKey, MultimediaKeyStroke,HoldTap, KeyDisplayFunction} from "./keyboard/core";

import {keyset_es} from "./keyboard/keyset_es";
import {keyset_latam} from "./keyboard/keyset_latam"; 
import {keyset_us} from "./keyboard/keyset_us";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

  const keymapItems = keyset_es.map((key : KeyDisplayFunction,index:number) => {
      return <li key={index}>{key.mainChar()}</li>
  })
  //console.log(keymapItems) 

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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="keycodesTable">
          <TableHead>
            <TableRow>
              <TableCell>Key Index</TableCell>
              <TableCell align="right">Main Char</TableCell>
              <TableCell align="right">Second Char</TableCell>
              <TableCell align="right">Third Char</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {keyset_es.map((key : KeyDisplayFunction,index:number) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                style ={{backgroundColor: `rgb(${key.groupColor()[0]},${key.groupColor()[1]},${key.groupColor()[2]})`}} 
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="right">{key.mainChar()}</TableCell>
                <TableCell align="right">{key.secondChar()}</TableCell>
                <TableCell align="right">{key.thirdChar()}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>



      </main>
  );
}
