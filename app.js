const express = require('express');
const handlebars = require('express-handlebars')
const app = express();
const path = require('path');
const homeRoute = require('./Routes/home');
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.json());
app.use(express.urlencoded());

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', 'views');

// app.use((req,res,next) => {
//     req.name = 'tungle';
//     next();
// })
app.use(homeRoute)
mongoose.connect('mongodb://127.0.0.1:27017/TestDB')
.then(result => {
    console.log('data connect!');
    const server = app.listen(3000);
    const io = require('socket.io')(server);
    io.on('connect', (socket) => {
        console.log('user connected');
        socket.on('send', mess => {
            console.log(mess)
            io.emit('mess', mess)
        })
    })
})