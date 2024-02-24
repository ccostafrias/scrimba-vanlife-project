import { createContext } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../api"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [
      user,
      loading,
      error
    ] = useAuthState(auth);

    return (
        <AuthContext.Provider
          value={{ 
            user, 
            signed: !!user,
          }}
        >
          {children}
        </AuthContext.Provider>
    );
}