import React,{useContext} from 'react'
import { NameContext } from './nameContext'
export default function SubSubSubUser() {
    const name = useContext(NameContext)
  return (
    <div>
        <h1>sub sub sub user : {name}</h1>
    </div>
  )
}
