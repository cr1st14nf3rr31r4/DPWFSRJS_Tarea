import React from 'react';

const FormularioContacto = () => {
    return (
        <form action="#">
            <div className="contacto_form">
                <div className="campo">
                    <input type="name" placeholder="Nombre *" required />
                </div>
                <div className="campo">
                    <input type="email" placeholder="Email *" required />
                </div>
                <div className="campo">
                    <input type="text" placeholder="Asunto *" required />
                </div>
                <div className=" campo text_area">
                    <textarea name="mensaje" id="mensaje" cols="35" rows="10" placeholder="Mensaje *"
                        required></textarea>
                </div>
                <div className="enviar">
                    <button type="submit" className="submit">Enviar</button>
                </div>
            </div>
        </form>
    );
}

export default FormularioContacto;