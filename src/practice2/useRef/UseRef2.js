import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function UseRef2() {
  const [title, setTitle] = useState("")
//   const [count,setCount] = useState(0)
const countRef = useRef(1)

  useEffect(()=>{
    // setCount(prev=> prev + 1)
    countRef.current = countRef.current + 1
  })
   return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h3>input value : {title}</h3>
      <h3>render counts : {countRef.current}</h3>
    </div>
  )
}
