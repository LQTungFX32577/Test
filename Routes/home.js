const express = require('express');
const homeController = require('../Controllers/home');
const routes = express.Router();

routes.get('/', homeController.home ) ;

routes.post('/signup', homeController.signup );

routes.get('/signIn', (req,res) => {
    res.render('signIn');
})

routes.post('/signIn', homeController.signIn );

module.exports = routes;