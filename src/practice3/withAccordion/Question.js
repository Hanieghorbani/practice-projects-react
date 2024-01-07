import React,{useState} from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import WithQuestion from "./withQuestion"

function Question({toggleBtn,showInfo,title,info}) {
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleBtn}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default WithQuestion(Question)