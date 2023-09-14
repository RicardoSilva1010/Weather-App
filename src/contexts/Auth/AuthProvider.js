import { useEffect } from 'react';
import { useState } from 'react'
import { useApi } from '../../apis/useApi';
import { AuthContext } from './AuthContext'

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const api = useApi();

    useEffect(() => {
        //verifica se já existe um token atribuido a um user 
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if(storageData) { //se existir o token no localstorage 
                const data = await api.validateToken(storageData); //valida o token para o user
                if(data.user){
                    setUser(data.user);
                }
            }
        }
        validateToken();
    }, [api]);

    //função de login, se existir um user e um token guarda no localStorage
    const signin = async () => {
        const data = await api.signin();
        if(data.user && data.token){ 
            setTimeout(() => { //limpa o token após 10 minutos e dá logout
                localStorage.clear()
                window.location.href = window.location.href;
            }, 600000)
            setUser(data.user); 
            setToken(data.token);
            return true;
        }
        return false;
    }

    //função de logout
    const signout = async () => {
        await api.logout();
        setUser(null); //limpa o user
        localStorage.clear() //clear ao localStorage
    }

    //função para guardar o token atribuido no localStorage
      const setToken = async() => {
            const data = await api.signin(); 
            localStorage.setItem('authToken', data.token); //guarda o token no localStorage
    }  

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}
