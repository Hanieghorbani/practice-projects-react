import React from "react"
import { useState } from "react"

export default function Area() {
  const [area, setArea] = useState(0)
  const [length, setLength] = useState("")
  const [width, setWidth] = useState("")
  return (
    <div className="m-5">
      <div>
        <input
          onChange={(e) => setLength(e.target.value)}
          value={length}
          type="number"
          placeholder="طول"
        />
        <input
          onChange={(e) => setWidth(e.target.value)}
          value={width}
          type="number"
          placeholder="عرض"
        />
      </div>
      <button onClick={() => setArea(width* length)}>حساب کن</button>

      <div>
        <p>مساحت:{area}</p>
      </div>
    </div>
  )
}
