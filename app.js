const express = require('express');
const handlebars = require('express-handlebars')
const app = express();
const path = require('path');
const homeRoute = require('./Routes/home');
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

app.engine('handlebars', handlebars.engine());
app.set('view engine','handlebars')
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(homeRoute);

mongoose.connect('mongodb://127.0.0.1:27017/TestDB')
.then(result => {
    app.listen(5000);
    console.log('mongo connected!')

})
