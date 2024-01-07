import React from 'react'
import { useState } from 'react'
import useCounter from './useCounter'
export default function Counter2() {
    const [count,addHand,mainesHand] = useCounter(0)
   
  return (
    <div>
        <p>{count}</p>
        <button onClick={addHand}>add</button>
        <button onClick={mainesHand}>maines</button>
    </div>
  )
}
