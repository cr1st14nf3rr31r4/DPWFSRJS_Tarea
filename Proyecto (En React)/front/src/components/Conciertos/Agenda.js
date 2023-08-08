import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Concierto from './Concierto';

const Agenda = (props) => {
    const [loading, setLoading] = useState(false);
    const [conciertos, setConciertos] = useState([]);

    useEffect(() => {
        const cargarConciertos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/conciertos');
            setConciertos(response.data);
            setLoading(false);
        };

        cargarConciertos();
    }, []);

    return (
        <>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                conciertos.map(item =>
                    <Concierto
                        key={item.id}
                        dia={item.dia}
                        hora={item.hora}
                        grupo={item.grupo}
                        lugar={item.lugar}
                        direccion={item.direccion}
                        tickets={item.tickets} />)
            )}
        </>
    );
}

export default Agenda;