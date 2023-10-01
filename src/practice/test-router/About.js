import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/products">Products</Link>
        </li>
        <li>
          {" "}
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  )
}
