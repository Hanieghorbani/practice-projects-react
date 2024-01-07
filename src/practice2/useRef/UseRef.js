import React, { useRef } from "react"

export default function UseRef() {
  const inputRef = useRef()

  const logHand = () => {
    console.log(inputRef)
  }
  const newValHand = () => {
    inputRef.current.value = "hello hanie ghorbani ;)"
  }
  const clearHand = () => {
    inputRef.current.value = ""
    inputRef.current.classList = ''

  }
  const classHand = () => {
    inputRef.current.classList.add('bg-info','form-control')
  }
  return (
    <div className="m-5 p-5">
      <input type="text" ref={inputRef} placeholder="userName" />
      <button className="btn btn-danger" onClick={logHand}>
        log
      </button>
      <button className="btn btn-danger" onClick={newValHand}>
        add new value
      </button>
      <button className="btn btn-danger" onClick={clearHand}>
        clear input
      </button>
      <button className="btn btn-danger" onClick={classHand}>
        add class
      </button>
    </div>
  )
}
