import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function Average() {
  const arr = [1, 2, 3, 4, 5, 60, 7, 8, 9]
  const [avg, setAvg] = useState("")
  useEffect(() => {
    const sum = arr.reduce((prev, cur) => {
      return prev + cur
    })
    setAvg(sum / arr.length)
  }, [])
  return (
    <div className="p-5 m-5">
      {" "}
      {arr.map((item) => (
        <p>{item}</p>
      ))}
      <div className=" border-5">میانگین: {avg}</div>
    </div>
  )
}
