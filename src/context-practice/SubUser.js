import React,{useContext} from 'react'
import { NameContext } from './nameContext'

import SubSubUser from './SubSubUser'
export default function SubUser() {
    const name = useContext(NameContext)
  return (
    <div>
        <h1>subUser : {name}</h1>
        <SubSubUser/>
    </div>
  )
}
