import React from 'react'
import { useState } from 'react'

export default function useCounter(init) {
 const [count,setCount] = useState(init)
 function addHand() {
    setCount(prev=>prev+1)
}

function mainesHand() {
   setCount(prev=>prev-1)
}

return[count,addHand,mainesHand]
}
