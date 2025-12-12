import { createContext, useContext,useState } from "react";

const AuthContext = createContext();


function AuthProvider({children}){
    const[token,setToken ] = useState(null);

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>

    )
    
}

export const useAuth = () => useContext(AuthContext);
