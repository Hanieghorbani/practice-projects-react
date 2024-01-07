import { YouTube } from "@mui/icons-material"
import { func } from "prop-types"
import React, { useState, useMemo } from "react"

export default function MemoHook() {
  const [firstNum, setFirstNum] = useState(0)
  const [secoundNum, setSecoundNum] = useState(0)

  function addF() {
    setFirstNum((prev) => prev + 1)
  }

  function addS() {
    setSecoundNum((prev) => prev + 1)
  }

  const isEven = useMemo(() => {
    let def = 0
    while (def < 200000000) {
      def++
    }
    return firstNum % 2 == 0
  }, [firstNum])
  return (
    <div className="m-5">
      <button className="btn btn-info" onClick={addF}>
        Add First {firstNum}
      </button>
      <br />
      {isEven ? "Even" : "Odd"}
      <br />
      <button className="btn btn-info" onClick={addS}>
        Add Secound {secoundNum}
      </button>
    </div>
  )
}
