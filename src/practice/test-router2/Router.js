import React from "react"
import { Route, Routes, useRoutes } from "react-router-dom"
// import Home from './Home'
// import About from './About'
// import Products from './Products'
// import NotFound from './NotFound'

// import Contacts from './Contacts'
import { Link } from "react-router-dom"
import Header from "./Header"
import Courses from "./Courses"
import MainCourse from "./MainCourse"
import About from "./About"
import Login from "./Login"
import PrivateRoutes from "./privateRoutes"
export default function Router2() {
  let routes = useRoutes([
    { path: "/courses", element: <PrivateRoutes><Courses /></PrivateRoutes> },
    { path: "/courses/:id", element: <MainCourse /> },
    { path: "/about", element: <About /> },
    {
      path: "/about/*",
      element: <About />,
      children: [
        {
          path: "dashbord",
          element: <p className="text-center">dashbord page</p>,
        },
        {
          path: "setting",
          element: <p className="text-center">setting page</p>,
        },
      ],
    },
    { path: "/login", element: <Login /> },
  ])
  return (
    <>
      <Header />
      {routes}
    </>
  )
}
