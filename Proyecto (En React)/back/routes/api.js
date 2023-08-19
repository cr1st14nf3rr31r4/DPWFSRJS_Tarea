var express = require('express');
var router = express.Router();
var conciertosModel = require('./../models/conciertosModel');
var nodemailer = require('nodemailer');

router.get('/conciertos', async function (req, res, next) {
    const conciertos = await conciertosModel.getConciertos();

    res.json(conciertos);
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'cristian._.ferreira@hotmail.com',
        subject: 'Contacto Web',
        html: `Nombre: ${req.body.nombre}<br>Email: ${req.body.email}<br>Asunto: ${req.body.asunto}<br>Mensaje: ${req.body.mensaje}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    await transport.sendMail(mail)
    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});


module.exports = router;