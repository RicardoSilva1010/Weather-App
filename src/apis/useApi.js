import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_LOGIN
})

//token gerado para atribuir ao user
const token = Math.random().toString(16).substr(2);

//request API (simulação)
export const useApi = () => ({
    validateToken: async () => {
        return {
            user:{ id: 3, name: 'Ricardo', email: 'ricardo@gmail.com' }
        };
        const response = await api.post('/validate', { token });
        return response.data;
    }, 
    signin: async () => {
        return {
            user:{ id: 3, name: 'Ricardo', email: 'ricardo@gmail.com' },
            token: token
        };
        const response = await api.post('/signin')
        return response.data;
    },
    logout: async () => {
        return true;
        const response = await api.post('/logout');
        return response.data;

    }
});