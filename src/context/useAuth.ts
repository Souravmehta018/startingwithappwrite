import { useContext } from "react";
import { AuthContext } from "./autContext";

const useAuth = () => {
    const data = useContext(AuthContext);
    return data;
}

export default useAuth