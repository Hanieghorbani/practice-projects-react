import React,{useState,useEffect} from 'react'

export default function useLocalStorage(key) {
    const [value , setValue] = useState(()=>{
        let datasLocalStorage = localStorage.getItem(key)
        if (datasLocalStorage) {
            return datasLocalStorage
        }
        return ''
    })

    useEffect(()=>{
        localStorage.setItem(key,value)
    },[value])

    return [value,setValue]
}
