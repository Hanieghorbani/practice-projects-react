import React, { useEffect, useRef, useState } from "react"

export default function Timer() {
  const [reRender, setReRender] = useState(1)
  const sec = useRef(0)
  const min = useRef(0)
  const hour = useRef(0)
  useEffect(() => {
    setInterval(() => {
      sec.current++
      setReRender(prev => prev +1)
      if (sec.current == 60) {
        sec.current = 0
        min.current++
      }
      if (min.current == 60) {
        min.current = 0
        hour.current++
      }
      if (hour.current == 24) {
        hour.current = 0
      }
    }, 1000)
  },[])

  return (
    <div className="m-5 p-5 border-2 border">
      <div className="d-flex align-items-center justify-content-center">
        <h1>{hour.current <= 9 && 0}{hour.current}</h1>
        <h1>:</h1>
        <h1>{min.current <= 9 && 0}{min.current}</h1>
        <h1>:</h1>
        <h1>{sec.current <= 9 && 0}{sec.current}</h1>
      </div>
    </div>
  )
}
