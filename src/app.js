const express = require("express");
const app = express();

//Escuchar Servidor
app.set('port', process.env.PORT || 3000);

app.listen();