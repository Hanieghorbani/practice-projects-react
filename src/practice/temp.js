import React, { useState, useEffect } from "react"
export default function Temp() {
  const [temp, setTemp] = useState(10)
  const [tempClass, setTempClass] = useState("bg-info")

  function add() {
    if (temp >= 30) {
      return false
    }
    setTemp((prevState) => prevState + 1)
  }

  function lower() {
    if (temp <= 0) {
      return false
    }
    setTemp((prevState) => prevState - 1)
  }

  useEffect(() => {
    if (temp >= 15) {
      setTempClass("bg-danger")
    } else {
      setTempClass("bg-info")
    }
  })

  return (
    <div className="bg-success w-25 shadow-lg rounded-3 d-flex flex-column align-items-center mx-auto mt-5 py-5 ">
      <div
        className={`d-flex ${tempClass} rounded-circle p-5 border border-white mb-5 text-white`}
      >
        <h1>{temp}</h1>
        <h1>°C</h1>
      </div>
      <div>
        <button
          className="btn btn-secondary rounded-circle border-2 border-white me-4 py-3 px-4 fw-bold fs-2"
          onClick={add}
        >
          +
        </button>
        <button
          className="btn btn-secondary rounded-circle border-2 border-white py-3 px-4 fw-bold fs-2"
          onClick={lower}
        >
          -
        </button>
      </div>
    </div>
  )
}
