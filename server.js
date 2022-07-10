'use strict'

const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const bodyParser = require('body-parser');
require("dotenv").config();

const routes = require('./routes/personas');

const app = express();
app.set('port', process.env.PORT || 3700);
const dbOptions = {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE
}

// Middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Routes
app.get('/',(req, res)=>{
    res.send('Welcome to my API');
});

app.use('/api', routes);

// Server Running
app.listen(app.get('port'), ()=>{
    console.log("Server running on port ", app.get('port'));
});