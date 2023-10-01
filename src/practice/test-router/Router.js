import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import NotFound from './NotFound'

import Contacts from './Contacts'
import { Link } from 'react-router-dom'


export default function Router() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Products/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  )
}
