const express = require('express');
const app = express();
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')
const starwarsRoute = require('./routes/starwars');
const router = express.Router();
require('dotenv/config')
app.use(cors())
app.use(express.json())
app.use('/api', starwarsRoute);


app.get('/', (req, res)=>{
   // res.redirect("https://coming soon");
   res.json({"status": "coming soon"})
})

app.use('/', router)

//connect db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,}, ()=>{
})



module.exports.handler = serverless(app)