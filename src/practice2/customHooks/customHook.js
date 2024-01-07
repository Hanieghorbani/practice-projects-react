import React,{ useState,useEffect } from "react"
import useLoggerHook from "./useloggerHook"

export default function CustomHook() {
  const [value, setValue] = useLoggerHook('')
  return (
    <div className="w-50 mx-auto">
      <input onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}
