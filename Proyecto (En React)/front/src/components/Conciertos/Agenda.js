import React from 'react';
import Concierto from './Concierto';

const Agenda = () => {
    return (
        <>
            <Concierto
                dia="08/06"
                hora="21:00"
                grupo="Ferreira / Besasso"
                lugar="Centro Cultural Ricardo Rojas"
                direccion="Av. Corrientes 2038. (CABA)"
                ticketsLink="#"
            />

            <Concierto
                dia="08/06"
                hora="21:00"
                grupo="Ferreira / Besasso"
                lugar="Centro Cultural Ricardo Rojas"
                direccion="Av. Corrientes 2038. (CABA)"
                ticketsLink="#"
            />

            <Concierto
                dia="08/06"
                hora="21:00"
                grupo="Ferreira / Besasso"
                lugar="Centro Cultural Ricardo Rojas"
                direccion="Av. Corrientes 2038. (CABA)"
                ticketsLink="#"
            />
        </>
    );
}

export default Agenda;