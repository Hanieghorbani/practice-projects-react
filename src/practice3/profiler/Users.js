import React, { useState } from "react"
import User from "./User"
import { useMemo } from "react"
export default function Users() {
  const [title, setTitle] = useState("")
  const [users, setUsers] = useState([
    { id: 1, name: "hanie" },
    { id: 2, name: "mina" },
    { id: 3, name: "mmd" },
  ])
  return (
    <div className="m-5 p-5">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <hr />
     
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  )
}
