import React, { useState } from 'react';
import styles from './Login.module.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        // // Manejar el Login aquí
        // console.log('Email:', email);
        // console.log('Password:', password);
        
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Contraseña</label>
                    <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className={styles.checkboxGroup}>
                    <input type="checkbox" id='showPassword' checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />
                    <label htmlFor="showPassword">Mostrar contraseña</label>
                </div>
                <button className={styles.buttonLogin} type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
