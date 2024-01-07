import React,{useContext} from 'react'
import SubUser from './SubUser'
import { NameContext } from './nameContext'
export default function User() {
    const name = useContext(NameContext)
  return (
    <h1>
        user : {name}
        <SubUser />
    </h1>
  )
}
