import React, { useState } from 'react'

import appFirebase from '../../credenciales'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {

    const valorInicial = {
        nombre: '',
        precio: '',
        cifra: ''
    }

    const [user, setUser] = useState(valorInicial)

    const capturarInputs = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const guardarDatos = async(e) => {
        e.preventdefault();
        console.log(user);
        setUser({...valorInicial})
    }

    return (
        <div className='container'>
            <p>Bienvenido, <strong>{correoUsuario}</strong> Haz iniciado sesión </p>

            <button className='btn btn-primary' onClick={() => signOut(auth)}>
                Cerrar Sesión
            </button>
            <hr />
            <div className='row'>
                {/* esta seccion sera de formulario */}
                <div className="col-md-4">
                    <h3 className='text-center mb-3'>Ingresar artículo</h3>
                    <form onSubmit={guardarDatos}>
                        <div className='card card-body'>
                            <div className='form-group'>
                                <input type="text" name='nombre' className='form-control mb-3' placeholder='Ingresar el Nombre del artículo' onChange={capturarInputs} value={user.nombre} />

                                <input type="text" name='precio' className='form-control mb-3' placeholder='Ingresar el Precio del artículo' onChange={capturarInputs} value={user.precio} />

                                <input type="text" name='cifra' className='form-control mb-3' placeholder='Ingresar la Cifra del artículo' onChange={capturarInputs} value={user.cifra} />
                            </div>

                            <button className='btn btn-primary'>
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
                {/* esta seccion sera la lista de nuestros articulos */}
                <div className="col-md-8">
                    <h2 className='text-center mb-5'>Lista de artículos</h2>
                </div>
            </div>
        </div>
    )
}

export default Home