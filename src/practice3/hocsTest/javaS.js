import React from 'react'
import CourseHOC from './CourseHOC'
 function JavaS({title,increaseHand,price}) {
  return (
    <div>
        <h1>course title : {title}</h1>
        <button className='btn btn-outline-success' onClick={increaseHand}>increas course price ( price:{price})</button>
    </div>
  )
}

export default CourseHOC(JavaS,'JavaScript expert',22)
