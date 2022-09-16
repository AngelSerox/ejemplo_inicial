const express = require('express');
const app = express();

//Escuchar Servidor
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port',() =>{
    console.log('Servidor funcionando en el puerto', app.get('port'))
}));