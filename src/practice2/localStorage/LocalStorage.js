import React, { useState } from 'react'
import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

export default function LocalStorage() {
    const [value , setValue] = useLocalStorage('test1')
  return (
    <div>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
  )
}
