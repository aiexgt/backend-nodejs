'use strict'

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const myconnection = require('express-myconnection');
const cors = require("cors");
require('dotenv').config();

const personasRoutes = require('./routes/personas');

const app = express();

// BD Connection
const dbOptions = {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE
}
app.use(myconnection(mysql, dbOptions, 'single'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api',personasRoutes);

// Server Running 
app.set('port', process.env.SERVERPORT);
app.listen(app.get('port'), ()=>{
    console.log("Server running on port ", app.get('port'));
})
