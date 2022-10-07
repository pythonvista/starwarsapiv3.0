const express = require('express');
const app = express();
const serverless = require('serverless-http');
const mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const starwarsRoute = require('./routes/starwars');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())
app.use('/starwars', starwarsRoute);


app.get('/', (req, res)=>{
    res.send("we are home")
})

app.use('/', router)

//connect db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,}, ()=>{
    console.log("connected")
})



module.exports.handler = serverless(app)