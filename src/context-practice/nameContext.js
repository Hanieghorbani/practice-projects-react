import { createContext, useState } from "react"

export const NameContext = createContext()

export const UsernameContextProvider = ({ children }) => {
    const [name, setName] = useState("ghorbani")
  return <NameContext.Provider value={name}>{children}</NameContext.Provider>
}
