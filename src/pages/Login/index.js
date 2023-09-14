import { useContext } from "react";
import ReportIcon from '@mui/icons-material/Report';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./login.css";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //função botão de login para envio de formulario
  const handleLogin = async () => {
    if (email && password) { //se tiver email e password 
      const isLogged = await auth.signin(email, password); //espera que receba os valores
      if (isLogged) {
        navigate("/private"); //se tivermos valores navega para a pagina privada
      }
    }
  };

  return (
    <div className="loginPage">
      <h2>Identification Required</h2>
      <div className="form">
        <input
          className="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          className="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <div className="obs">
        <span><ReportIcon /></span>
        <span>Obs: token expires in 10 minutes!</span>
      </div>
    </div>
  );
};
