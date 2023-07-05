import React from 'react';

const Concierto = (props) => {
    const { dia, hora, grupo, lugar, direccion, ticketsLink } = props;
    return (
        <div className="concierto">
            <div className="fecha">
                <div className="dia">
                    <h3 className="texto_dia">{dia}</h3>
                </div>
                <div className="hora">
                    <h3 className="texto_hora">{hora}</h3>
                </div>
            </div>
            <div className="grupo">
                <h3 className="nombre_grupo">{grupo}</h3>
            </div>
            <div className="lugar">
                <h3 className="nombre_lugar">{lugar}</h3>
                <h3 className="direccion_lugar">{direccion}</h3>
            </div>
            <div className="tickets">
                <a href={ticketsLink}>Tickets</a>
            </div>
        </div>
    );
}

export default Concierto;