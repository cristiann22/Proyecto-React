import React, { useState } from 'react';
import Login from './components/Login/Login';
import styled from 'styled-components';
import Modal from "./components/UI/Modal";

function App() {
  const [estadoModal1, camiarEstadoModal1] = useState(false);

  return (
    <div>
      <ContenedorBotones >
        <Boton onClick={() => camiarEstadoModal1(!estadoModal1)}>Aviso</Boton>
      </ContenedorBotones>
      <Modal estado={estadoModal1} cambiarEstado={camiarEstadoModal1}>
        <Contenido>
          <h1>Mantenimiento</h1>
          <p>La pagina esta en mantenimiento.
            Disculpa las molestias.
            Nuestro sitio esta actualmente bajo mantenimiento
            programado.
            Agradecemos tu comprensión.
          </p>
          <Boton onClick={() => camiarEstadoModal1(!estadoModal1)}>Aceptar</Boton>
        </Contenido>
      </Modal>
      <Login />
    </div>
  );
}

export default App;


const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.div`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

  background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;