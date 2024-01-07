import React,{memo} from 'react'

 const User = memo(({id,name}) =>{
    return (
      <div>
          <h1>{id} - {name}</h1>
      </div>
    )
  })
export default User