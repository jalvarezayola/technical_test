import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

import airlines from '../../constants/airlines.json';
import { validationData } from './validations'; 

import Input from '../input';

import './form.scss';

const findAirlineName = (id) => airlines.find((airline) => airline.id === id)?.name ?? null;

const Form = () => {
  const airlineId = useSelector((state) => state.airline);
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});

  const sendData = () => {
    const dataToSend = {
      ...userData.name && { name: userData.name?.trim() },
      ...userData.email && { email: userData.email?.trim() },
      ...userData.cellphone && { cellphone: userData.cellphone?.trim() },
      ...userData.age && { age: parseInt(userData.age, 10) },
    };
    const validated = validationData(dataToSend, setErrors);

    if (validated) {
      console.log(dataToSend);
      setUserData({});
      swal('Genial', 'Tu información fue enviada con éxito, pronto estaremos en contacto contigo.', 'success', {
        button: 'Continuar',
        timer: 5000,
      });
    } else setUserData(dataToSend);
  };

  console.log(userData);

  return (
    <div id="formContainer">
      <div id="form">
        <h1>Hola.</h1>
        <p>
          Sabemos que quieres viajar {`con ${findAirlineName(airlineId)}`},
          por ello es importante que nos proporciones unos detalles
          diligenciando el siguiente formulario:
        </p>
        
        <Input
          label="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({
            ...userData,
            name: e.target.value,
          })}
          errorMessage={errors.name}
          placeholder="John Doe"
        />
        
        <Input
          label="Correo"
          value={userData.email}
          onChange={(e) => setUserData({
            ...userData,
            email: e.target.value,
          })}
          errorMessage={errors.email}
          placeholder="ejemplo@email.com"
        />
        
        <Input
          label="Teléfono"
          value={userData.cellphone}
          onChange={(e) => setUserData({
            ...userData,
            cellphone: e.target.value,
          })}
          errorMessage={errors.cellphone}
          placeholder="3204789444"
        />
        
        <Input
          label="Edad"
          value={userData.age}
          onChange={(e) => setUserData({
            ...userData,
            age: e.target.value,
          })}
          errorMessage={errors.age}
          placeholder="26"
        />

        <button onClick={sendData}>Enviar</button>
      </div>
    </div>
  );
};

export default Form;
