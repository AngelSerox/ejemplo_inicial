const express = require('express');
const log = require('morgan')
const app = express();

//Escuchar Servidor
app.set('port', process.env.PORT || 3000);

//midelware
app.use(log('dev'))

app.listen(app.get('port'),() =>{
    console.log('Servidor funcionando en el puerto', app.get('port'))
});