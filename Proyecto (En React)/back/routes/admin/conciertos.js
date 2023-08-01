var express = require('express');
var router = express.Router();
var conciertosModel = require('../../models/conciertosModel');

/* GET home page. */
router.get('/', async function (req, res, next) {

  const conciertos = await conciertosModel.getConciertos();

  res.render('admin/conciertos', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    conciertos
  });
});

router.get('/nuevo', (req, res, next) => {
  res.render('admin/nuevo', {
    layout: 'admin/layout'
  });
});

router.post('/nuevo', async (req, res, next) => {
  try {
    if (req.body.dia != "" && req.body.hora != "" && req.body.grupo != "" && req.body.lugar != "" && req.body.direccion != "" && req.body.tickets != "") {
      await conciertosModel.insertConcierto(req.body);
      res.redirect('/admin/conciertos')
    } else {
      res.render('admin/nuevo', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error);
    res.render('admin/nuevo', {
      layout: 'admin/layout',
      error: true,
      message: 'No se registro el concierto'
    })
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await conciertosModel.deleteConciertoById(id);
  res.redirect('/admin/conciertos');
});

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var concierto = await conciertosModel.getConciertoById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    concierto
  })

});

router.post('/modificar', async (req, res, next) => {
  try {
    var obj = {
      dia: req.body.dia,
      hora: req.body.hora,
      grupo: req.body.grupo,
      lugar: req.body.lugar,
      direccion: req.body.direccion,
      tickets: req.body.tickets
    }
    console.log(obj);

    await conciertosModel.updateConciertoById(obj, req.body.id);
    res.redirect('/admin/conciertos');

  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se registro la modificacion'
    })
  }
});

module.exports = router;
