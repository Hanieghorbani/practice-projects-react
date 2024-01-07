import React from "react"
import { memo, useState, useCallback } from "react"

export default function UseCallback() {
  const [title, setTitle] = useState("")
  const [counter, setCounter] = useState(0)
  console.log("app run...")
  const addHandler = useCallback(() => {
    setCounter((prev) => prev + 1)
  }, [counter])

  const minusHandler = useCallback(() => {
    setCounter((prev) => prev - 1)
  }, [counter])

  return (
    <div className="m-5 p-5">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <SubTitle title={title} />
      <h4>{counter}</h4>
      <Btns add={addHandler} minus={minusHandler} />
    </div>
  )
}

const SubTitle = memo(({ title }) => {
  console.log("title run...")
  return <h3>{title}</h3>
})

const Btns = memo(({ add, minus }) => {
  console.log("btns run...")
  return (
    <>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
    </>
  )
})
