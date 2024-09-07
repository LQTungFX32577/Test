const express = require('express');
const homeController = require('../Controllers/home');
const home = require('../Modals/home');
const routes = express.Router();

routes.get('/', (req,res) => {
    res.render('home', {
        title: "hello nodeJS"
    })
});
routes.post('/signup', homeController.signup );

routes.post('/signin', homeController.signin );

module.exports = routes