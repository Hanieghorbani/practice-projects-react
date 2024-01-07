import React from 'react'
import CourseHOC from './CourseHOC'
function ReactJs({title,increaseHand,price}) {
  return (
    <div>
        <h1>course title : {title}</h1>
        <button className='btn btn-outline-success' onClick={increaseHand}>increas course price  (price:{price})</button>
    </div>
  )
}

export default CourseHOC(ReactJs,'React js' , 10)


