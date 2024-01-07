import React,{useContext} from 'react'
import { NameContext } from './nameContext'

import SubSubSubUser from './SubSubSubUser'
export default function SubSubUser() {
    const name = useContext(NameContext)

  return (
    <div>
        <h1>sub sub user : {name}</h1>
        <SubSubSubUser />
    </div>
  )
}
