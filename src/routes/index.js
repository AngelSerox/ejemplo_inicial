const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) =>{
res.render('index.ejs', {
    nombre: 'El MIKE'
})
});

module.exports = routes;