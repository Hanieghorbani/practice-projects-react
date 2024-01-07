import React from "react"
import { useState } from "react"
import WithToggleHoc from "./WithToggleHoc"
function WithToggle({toggleBtn,isShow}) {
  return (
    <div className="text-center m-5 p-5">
      <button className="btn btn-primary" onClick={toggleBtn}>
        {isShow ? "-" : "+"}
      </button>
      {isShow && (
        <div>
          <input type="text" className="form-control my-5" />
          <button className="btn btn-primary">add new note</button>
        </div>
      )}
    </div>
  )
}

export default WithToggleHoc(WithToggle)
