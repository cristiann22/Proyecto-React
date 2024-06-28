import React, { useState } from 'react';
import styles from './Login.module.css'

import Uno from '../Assets/1.jpg'
import Dos from '../Assets/2.jpg'
import Tres from '../Assets/3.jpg'

import appFirebase from '../../credenciales';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

    const [registro, setRegistro] = useState(false)

    const handlerSubmit = async(e) => {
        e.preventDefault()
        const correo = e.target.email.value;
        const contraseña = e.target.contraseña.value

        if (registro) {
            await createUserWithEmailAndPassword(auth,correo, contraseña)
        }
        else {
            await signInWithEmailAndPassword(auth,correo, contraseña)
        }
    }

    return (
        <div className={styles.container}>
            <div className='row container p-4'>
                <div className='col-md-8'>
                    <div id="carouselExample" class="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Uno} alt="" className={styles.tamañoImagen} />
                            </div>
                            <div className="carousel-item">
                                <img src={Dos} alt="" className={styles.tamañoImagen} />
                            </div>
                            <div className="carousel-item">
                                <img src={Tres} alt="" className={styles.tamañoImagen} />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* en esta seccion sera el formulario */}
                <div className="col-md-4">
                    <div className={styles.containerForm}>
                        <div className='mt-5 ms-5'>
                            <h1>{registro ? 'Registrate' : 'Inicia Sesión'}</h1>
                            <form onSubmit={handlerSubmit}>
                                <div className='mb-3'>
                                    <label className='form-label'>Direccion de Email: </label>
                                    <input type="email" className='form-control' placeholder='Ingresar email' id='email' required />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label'>Contraseña: </label>
                                    <input type="password" className='form-control' placeholder='Ingresar contraseña' id='contraseña' required />
                                </div>

                                <button className='btn btn-primary' type='submit'>
                                    {registro ? 'Registrate' : 'Inicia Sesión' }
                                </button>
                            </form>

                            <div className='form-group'>
                                <button className='btn btn-secondary mt-4 form-control' onClick={() => setRegistro(!registro)}>
                                    {registro ? 'ya tienes una cuenta? Inicia sesión' : 'no tienes cuenta? Registrate' }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
