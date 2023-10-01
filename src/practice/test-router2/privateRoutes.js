import React, { useState } from "react"
import coursesData from "./coursesData"
import Course from "./Course"
import isLogin from "./utilis"
import { Navigate,useLocation } from "react-router-dom"
export default function PrivateRoutes({ children }) {
  let location = useLocation()
  console.log(location);
  let isLoginUser = isLogin("hanie")
  return (
  <div>
  {isLoginUser ?
     (children):
     <Navigate to="/login" />}
  </div>
  )
}
