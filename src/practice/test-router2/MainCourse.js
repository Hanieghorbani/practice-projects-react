import React, { useState } from "react"
import { useParams } from "react-router-dom"
import coursesData from "./coursesData"
export default function MainCourse() {
  let params = useParams()
  let course = coursesData.find((info) => info.id == params.id)
 
  return (
    <div className="container">
      <div
        className="row mx-auto mt-5
      "
      >
        <div className="col-6">
          <img src={course.img} className="img-fluid"/>
        </div>
        <div className="col-6" style={{ direction: "rtl" }}>
          <h2>{course.title}</h2>
          <p className="mt-5">{course.description}</p>
        </div>
      </div>
    </div>
  )
}
