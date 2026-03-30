import { createContext, useEffect, useState, useContext } from "react"
import { checkAuth } from "../utils/checkAuth"
import type { AuthContextType } from "../types/types"
import type { ReactNode } from "react"

const AuthContext = createContext<AuthContextType>({
    loggedIn: false,
    setLoggedIn: () => { }
})

export default function AuthContextProvider({ children }: { children: ReactNode }) {

    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    useEffect(() => {
        async function isSignedIn() {
            const checkAuthValue = await checkAuth()
            setLoggedIn(checkAuthValue)
        }
        isSignedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}