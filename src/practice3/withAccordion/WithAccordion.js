import React from "react"
import questions from "./datasWithAcc"
import "./withAcc.css"
import Question from "./Question"
import WithQuestion from "./withQuestion"

export default function WithAccordion() {
  return (
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {questions.map((question) => (
            <Question {...question}/>
        ))}
      </section>
    </div>
  )
}

//  export default WithQuestion(WithAccordion,)


