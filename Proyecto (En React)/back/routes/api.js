var express = require('express');
var router = express.Router();
var conciertosModel = require('./../models/conciertosModel');

router.get('/conciertos', async function (req, res, next) {
    const conciertos = await conciertosModel.getConciertos();

    res.json(conciertos);
});

module.exports = router;