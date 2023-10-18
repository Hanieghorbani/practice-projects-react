import "./App.css"

import Counter from "./practice/counter"
import Temp from "./practice/temp"
import NotifCount from "./practice/notifCount"
import ListUser from "./practice/users/ListUser"
import Inputs from "./practice/inputs"
import Form from "./practice/Form/Form"
import Quiz from "./practice/Quiz/Quiz"
import Ticket from "./practice/Ticket/Ticket"
import MethodProp from "./practice/testMethod/method-prop"

import Header from "./practice/BookList/Header"
import AddForm from "./practice/BookList/AddForm"

import Shop from "./practice/Shop/Shop"
import TodoList from "./practice/TodoList/TodoList"
import NoteApp from "./practice/NoteApp/NoteApp"

import Alert from "react-bootstrap/Alert"
import Accordion from "react-bootstrap/Accordion"
import Button from 'react-bootstrap/Button';
import BootstarpTest from "./practice/bootstarp-test"

import CourseResponsive from "./practice/course-responsive/course-responsive"

import FetchTest from "./practice/fetch-test"

import Router from "./practice/test-router/Router"
import Router2 from "./practice/test-router2/Router"

// import { Route,Routes } from 'react-router-dom'
// import Home from "./practice/test-router/Home"
// import About from "./practice/test-router/About"
// import Contacts from "./practice/test-router/Contacts"
// import Products from "./practice/test-router/Products"


import Users from "./usersFire/Users"

import Rechart from "./practice/rechart"
import CustomHook from "./practice2/customHooks/customHook"
import Counter2 from "./practice2/counter2/Counter2"
import FetchPost from "./practice2/fetchPosts/fetchPost"
import LocalStorage from "./practice2/localStorage/LocalStorage"
export default function App() {
  return (
    <div className="App">
      {/* practice */}
      {/* <Counter /> */}
      {/* <Temp /> */}
      {/* <NotifCount /> */}
      {/* <ListUser/> */}
      {/* <Inputs /> */}
      {/* <Form /> */}
      {/* <Users /> */}
      {/* <Quiz /> */}
      {/* <Ticket /> */}
      {/* <MethodProp/> */}

      {/* <div className="container">
        <Header />
        <AddForm />
      </div> */}
      {/* <Shop /> */}

      {/* <TodoList /> */}

      {/* <NoteApp /> */}

     {/* <BootstarpTest /> */}

     {/* <CourseResponsive /> */}

     {/* <FetchTest /> */}



     {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes> */}

      {/* <Router2 /> */}
      {/* <Rechart /> */}

      {/* <CustomHook /> */}
      {/* <Counter2 /> */}
      {/* <FetchPost /> */}
      <LocalStorage />
    </div>
  )
}
