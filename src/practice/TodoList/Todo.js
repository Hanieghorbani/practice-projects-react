import React ,{useEffect}from 'react'
import {MdDelete} from 'react-icons/md'
import {AiOutlineCheck} from 'react-icons/ai'

export default function Todo (props){
  
useEffect(()=>{
  console.log('todo ... mount');

  return () => {
    console.log('todo ... unmount');
  }
},[])

useEffect(()=>{
  console.log('todo ... update');
})
   const completeBtn = (id) =>{
     props.onCompleted(id)
   }
   const removeBtn =(id )=>{
    props.onRemove(id)
   }
    
        return (
            <div className={`todo ${props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{props.title}</li>
                <button className="check-btn" onClick={()=> completeBtn(props.id)}>
                <AiOutlineCheck />
                </button>

                <button className="trash-btn" onClick={()=> removeBtn(props.id)}>
                <MdDelete />
                </button>
            </div>
        )
    
}