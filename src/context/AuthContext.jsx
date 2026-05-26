import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const[user,setUser] = useState(null)

    const login = () => {
        setUser({name: 'Erva Shasivari', email: 'shasivarierva@gmail.com'})
    }

    const logout = () => {
        setUser(null)
    }
    return <div>
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    </div>
}

export function useAuth() {
    return useContext(AuthContext)
}