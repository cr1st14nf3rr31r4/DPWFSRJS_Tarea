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
        subject: `Contacto Web - ${req.body.asunto}`,
        html: `<strong>Mensaje recibido desde la Web:</strong><br><br><strong>Nombre:</strong> ${req.body.nombre}<br><br><strong>Email:</strong> ${req.body.email}<br><br><strong>Asunto:</strong> ${req.body.asunto}<br><br><strong>Mensaje:</strong> ${req.body.mensaje}`
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