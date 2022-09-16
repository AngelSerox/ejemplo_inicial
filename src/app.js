const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');

const indexRoutes = require('./routes/index.js');

//Escuchar Servidor
app.set('port', process.env.PORT || 3000);

//midelware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//Rutas
app.use('/', indexRoutes);

app.listen(app.get('port'),() =>{
    console.log('Servidor funcionando en el puerto', app.get('port'))
});