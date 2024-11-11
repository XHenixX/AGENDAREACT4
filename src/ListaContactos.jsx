import React from 'react';

const ListaContactos = ({ contactos }) => {
    return (
        <div>
            <h2><center>Listado de Contactos</center></h2>
            <ul>
                {contactos.map((contacto, index) => (
                    <li key={index}>
                        {contacto.nombre} {contacto.apellido} - {contacto.telefono}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaContactos;
