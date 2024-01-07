import { func } from "prop-types"
import React from "react"
import { useState, useReducer } from "react"

// export default function Counter() {
//     const [count,setCount] = useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//         <button onClick={()=>setCount(prev=>prev+1)}>add</button>
//         <button onClick={()=>setCount(prev=>prev-1)}>minus</button>
//     </div>
//   )
// }


//way 2 with useReducer
function changer(state, action) {
  if (action.type === 'Add') {
    state++
  }else{
    state--
  }
  return state
}

export default function Counter() {
  const [counter, setCounter] = useReducer(changer, 0)
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter({type:'Add'})}>add</button>
      <button onClick={() => setCounter({type:'Minus'})}>minus</button>
    </>
  )
}
