const express = require('express');
const app = express();
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const path = require('path');
const starwarsRoute = require('./routes/starwars');
const router = express.Router();
require('dotenv/config')
app.use(express.json())
app.use('/starwars', starwarsRoute);


app.get('/', (req, res)=>{
   res.sendFile('./public/main.html');
})

app.use('/', router)

//connect db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,}, ()=>{
})



module.exports.handler = serverless(app)