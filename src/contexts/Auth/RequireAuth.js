import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Login } from "../../pages/Login";

export const RequireAuth = ({ children }) => {
    const auth = useContext(AuthContext);

    //requer autenticação para entrar na private page, então se nao houver um user
    //vai para a página de login
    if(!auth.user) {
        return <Login />;
    }

    return children;
}