import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import '../Components/Login.css'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("enviar os seguintes dados são " + " - " + email +" - " + password);
    }
    return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Acesse o Sistema</h1>
            <div className="field">
                <input type="email" placeholder='digite o seu email' 
                onChange={(e)=>setEmail(e.target.value)}/>
                <FaUser className="icon"/>
            </div>
            <div className="field">
                <input type="password" placeholder='digite a sua senha'
                onChange={(e)=>setPassword(e.target.value)}/>
                <FaLock className="icon"/>
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembre de mim!
                </label>
                <a href="#">Esqueceu a sua senha?</a>
            </div>
            <button>Entrar no sistema</button>
            <div className="signup-link">
                <p>Não tem uma conta?
                    <a href="#">Criar uma conta</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login
