const express = require('express');
const routes = express.Router();
const model = require('../model/valores')();

routes.get('/', (req, res) =>{
res.render('index.ejs');
});

module.exports = routes;