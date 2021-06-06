import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [Place, setPlace] = useState('')
    return (
        <Context.Provider
            value={{
                user,
                setUser,
                Place,
                setPlace,
                login: (user) => {
                    setUser(user)
                },
                logout: () => {
                    setUser(null)
                    alert("Operacion exitosa")
                }
            }}
        >
            {children}
        </Context.Provider>
    )
}

