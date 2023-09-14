import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import ProtectPage from './pages/protectPage'
import {Home} from './pages/Home'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Login } from './pages/Login';

function App() {
  const auth = useContext(AuthContext);

  //função de logout 
  const handleLogout = async () => { 
    await auth.signout(); //executa a função signout 
    window.location.href = window.location.href; //refresh page
  }

  return (
    <div className="App">
      <nav>
        <div className='link'>
          <Link to="/">Home</Link>
          <Link to="/private">Weather Forecast</Link>
        </div>
        {/* Quando existir user logado aparece botão logout */}
        {auth.user && <button onClick={handleLogout}>Logout</button>} 
      </nav> 
        <Routes>
          <Route path="/Weather-App" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/private" element={<RequireAuth><ProtectPage /></RequireAuth>} />
        </Routes> 
    </div>
  );
}

export default App;