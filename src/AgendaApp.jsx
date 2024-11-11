import React, { useState, useEffect } from 'react';
import ListaContactos from './ListaContactos';
import FormularioContacto from './FormularioContacto';

const API_URL = 'http://www.raydelto.org/agenda.php';

const AgendaApp = () => {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const obtenerContactos = async () => {
      try {
        const respuesta = await fetch(API_URL);
        const data = await respuesta.json();
        console.log(data);
        setContactos(data);
      } catch (error) {
        console.error('Error al obtener los contactos:', error);
      }
    };
    obtenerContactos();
  }, []);

  const agregarContacto = async (nuevoContacto) => {
    try {
      const respuesta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoContacto),
      });

      if (respuesta.ok) {
        setContactos([...contactos, nuevoContacto]);
      } else {
        alert('Error al agregar el contacto.');
      }
    } catch (error) {
      console.error('Error al agregar el contacto:', error);
    }
  };

  return (
    <div>
      <h1>
        <center>Agenda</center>
      </h1>
      <FormularioContacto onAgregarContacto={agregarContacto} />
      <ListaContactos contactos={contactos} />
    </div>
  );
};

export default AgendaApp;
