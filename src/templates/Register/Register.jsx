import React from 'react';
import './Register.css'; 

const Register = () => {
    return (
        <div className="register-container">
            <h2>Registrar</h2>
            <form>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default Register;
