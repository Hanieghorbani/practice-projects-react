import React, { useState } from "react"

export default function ChangeCase() {
  const [string, setString] = useState("")
  return (
    <div className="p-5 m-5">
      <input
        type="text"
        onChange={(e) => {
          setString(e.target.value)
        }}
        value={string}
      />

      <p>
        نتیجه:{" "}
        {string
          .split("")
          .map((char) =>
            char == char.toLocaleLowerCase()
              ? char.toLocaleUpperCase()
              : char.toLocaleLowerCase()
          ).join('')}
      </p>
    </div>
  )
}
