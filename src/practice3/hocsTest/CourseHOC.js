import React,{useState} from "react"

function CourseHOC(OrgComponent,coursTitle,coursPrice) {
  function NewComponent() {
    const [title,setTitle] = useState(coursTitle)
    const [price,setPrice] = useState(coursPrice)
    function increaseHand(){
        setPrice(prev=> prev * 2)
    }
    return <OrgComponent title={title} increaseHand={increaseHand} price={price}/>
  }

  return NewComponent
}

export default CourseHOC 
