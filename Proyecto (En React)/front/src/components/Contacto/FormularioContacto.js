import React, { useState } from 'react';
import axios from 'axios';

const FormularioContacto = () => {

    const initialForm = {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <form action="/contacto" method='post' onSubmit={handleSubmit}>
            <div className="contacto_form">
                <div className="campo">
                    <input type="name" name='nombre' value={formData.nombre} onChange={handleChange}
                        placeholder="Nombre *" required />
                </div>
                <div className="campo">
                    <input type="email" name='email' value={formData.email} onChange={handleChange}
                        placeholder="Email *" required />
                </div>
                <div className="campo">
                    <input type="text" name='asunto' value={formData.asunto} onChange={handleChange}
                        placeholder="Asunto *" required />
                </div>
                <div className=" campo text_area">
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}
                        id="mensaje" cols="35" rows="10" placeholder="Mensaje *" required></textarea>
                </div>
                <div className="enviar">
                    <button type="submit" className="submit">Enviar</button>
                </div>
            </div>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
        </form>
    );
}

export default FormularioContacto;