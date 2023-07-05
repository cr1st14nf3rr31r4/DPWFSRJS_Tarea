import React from 'react';
import MediaIcons from '../MediaIcons';

const CanalesAlternativos = () => {
    return (
        <div className="contacto_texto">
            <h4>Por shows, sesiones, clases o consultas en general...</h4>
            <h3>Cristian Ferreira</h3>
            <div className="wapp">
                <a href="https://wa.me/+5491165194819" target="_blank"><i className="fa fa-whatsapp"></i></a>
                <h4>+ 54 9 11 6519 4819</h4>
            </div>
            <a className="email" href="mailto:cristian._.ferreira@hotmail.com"
                target="_blank">cristian._.ferreira@hotmail.com</a>

            <MediaIcons />

        </div>
    );
}

export default CanalesAlternativos;