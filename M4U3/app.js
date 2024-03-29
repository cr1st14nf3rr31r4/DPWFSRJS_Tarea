var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var promocionesRouter = require('./routes/promociones');
var novedadesRouter = require('./routes/novedades');
var preciosRouter = require('./routes/precios');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/promociones', promocionesRouter);
app.use('/novedades', novedadesRouter);
app.use('/precios', preciosRouter);

app.get('/inicio', function(req,res){
  res.send('Bienvenido a la página de Inicio')
})

app.get('/ingresos', function(req,res){
  res.send('Bienvenido a la página de Promociones')
})

app.get('/egresos', function(req,res){
  res.send('Bienvenido a la página de Novedades')
})

app.get('/bajas', function(req,res){
  res.send('Bienvenido a la página de Precios')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
