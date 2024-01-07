import React,{ useState,useEffect } from "react"

export default function useLoggerHook(title) {
    const [value, setValue] = useState(title)
    useEffect(() => {
      console.log(value)
    }, [value])
    return [value,setValue]
}
