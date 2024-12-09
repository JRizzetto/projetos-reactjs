import {FaUser, FaLock} from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css";

const Login = () => {

        const [userName, setUsername] = useState();
        const [password, setPassword] = useState();

        const handleSubmit = (event) => {
            event.preventDefault();

            alert(`Enviando os daods: ${userName} - ${password}`);
        }
    

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className='input-field'>
                <input 
                type="email" 
                placeholder='Digite seu e-mail' 
                onChange={(e) => setUsername(e.target.value)}
                />
            <FaUser className="icon" />
            </div>

            <div className='input-field'>
                <input 
                type="password" 
                placeholder='Digite sua senha'
                onChange={(e) => setPassword(e.target.value)}
                />
            <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim?
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button type="submit">Entrar</button>

            <div className="signup-link">
                <p>Não tem conta? <a href="#">Registrar</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login
