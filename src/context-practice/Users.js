import React from "react"
import User from "./User"
import { UsernameContextProvider } from "./nameContext"
export default function Users() {
  return (
    <UsernameContextProvider>
      <div className="m-5 p-5">
        <User/>
      </div>
    </UsernameContextProvider>
  )
}
