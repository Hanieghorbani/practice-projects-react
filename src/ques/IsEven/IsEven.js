import React from "react"
import { useState } from "react"

export default function IsEven() {
  const [IsEven, setIsEven] = useState(false)
  const [num,setNum] = useState('')
  return (
    <div className="m-5 p-5">
      <input type="number" placeholder="عدد را وارد کنید" onChange={(e)=>{
            setNum(e.target.value)
            if(e.target.value % 2 === 0 || e.target.value == 0){
                 setIsEven(true)
            }else{
                setIsEven(false)
            }
      }}/>

      <p> عدد : {IsEven ? "زوج است" : "فرد است"}</p>
    </div>
  )
}
