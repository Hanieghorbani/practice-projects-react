import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function UseLayoutEff() {
  const [number,setNumber] = useState(0)
  const [secStyle,setSecStyle] = useState({})
  const sectionRef = useRef('')

  useLayoutEffect(()=>{
   const numRand = Math.floor(Math.random() * 500)
   for (let index = 0; index <= 1000000000; index++) {
    if (index === 1000000000) {
      setSecStyle({paddingTop:`${numRand}px`})
    }
   }
  },[number])


  return (
      <div className='text-center bg-dark text-white' ref={sectionRef} style={secStyle}>
      <h1>{number}</h1>
      <button className='btn btn-light me-3'
       onClick={()=>setNumber(prev=>prev + 1)} >+</button>
      <button className='btn btn-light'
      onClick={()=>setNumber(prev=>prev - 1)}>-</button>
    </div>
  )
}
