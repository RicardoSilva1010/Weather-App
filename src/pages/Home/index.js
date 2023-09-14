import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import './home.css'
import { AuthContext } from '../../contexts/Auth/AuthContext';

//Pagina Home (primeira página exibida)
export const Home = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    
    //funções onCLick para navegar entre rotas
    const handleSignIn = () => {
        navigate('/login')
    }
    const handleOpen = () => {
        navigate('/private')
    }


    return (
        <div className="homePage">
            <div className="content">
                <h1>Weather Apppppp</h1>
                {auth.user && <h5>Welcome, {auth.user?.name}</h5>}
                {auth.user && <button onClick={handleOpen}>Let´s See</button>}
                {!auth.user && <h5>Sign In for Private Content </h5>}
                {!auth.user && <button onClick={handleSignIn}>Sign In</button>}
            </div>
        </div>
    )
}