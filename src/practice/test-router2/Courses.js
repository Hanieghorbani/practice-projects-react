import React from "react"
import coursesData from "./coursesData"
import Course from "./Course"
export default function Courses() {
  return (
    <div className="d-flex justify-content-between flex-wrap container w-75">
      {coursesData.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  )
}
