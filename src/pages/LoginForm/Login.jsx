import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './Login.css'



function Login() {
  return (
    <div className='wrapper'>
        <form action =""
        ><h1>Login</h1>
        <div className="input-box">
            <input type ="text" placeholder='Usuario' required />
            <FaUser className='icon' /> 

        </div>
        <div className="input-box">
            <input type="text" placeholder='Senha' required />
            <FaLock className='icon'/>

        </div>


        <div className="remmember-forgot">
            <label><input type="checkbox" />Lembrar-se</label>
            <a href='#'>Esqueceu sua senha?</a>
        </div>

        <button type="submit">Login</button>
        </form>

        <div className="Registrar-se">
            <p>Ainda nao se registrou?</p>
        </div>
        <button type="registrar">registre-se</button>
    </div>
  );
}

export default Login;
