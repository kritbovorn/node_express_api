// import { express } from "express";
const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/users/users');
const app = express();


app.use(bodyParser.json());

app.use('/users', userRoute);

app.get('/', (req, res) => {
    console.log('Home Page');
    res.send('Hello from Home Page');
})

app.listen('5000', () => console.log(`Server is running on : http://localhost:5000`));