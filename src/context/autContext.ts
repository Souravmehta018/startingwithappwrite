import { createContext } from "react";

export const AuthContext = createContext<{
// types of data
    authStatus: boolean;
    setAuthStatus: (status: boolean) => void
}>
({

})