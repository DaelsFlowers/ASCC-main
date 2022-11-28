import { createContext } from 'react'

const context = createContext();


function AuthProvider({ children }) {
    const user = {
        login: false
    };

    return <context.Provider value={{ user }}>{children}</context.Provider>;
}

export default AuthProvider;