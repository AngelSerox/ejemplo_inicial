const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index.js');

//Escuchar Servidor
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('views egine', 'ejs');

//Conexion a MongoDB
mongoose.connect('mongodb+srv://Miguel_Angel:eNMcLT5zdwIJMhvZ@cluster0.xmeotak.mongodb.net/Datos?retryWrites=true&w=majority')
.then(bd => console.log('BD se conecto correctamente')).catch(err => console.log(err));

//midelware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//Rutas
app.use('/', indexRoutes);

app.listen(app.get('port'),() =>{
    console.log('Servidor funcionando en el puerto', app.get('port'))
});