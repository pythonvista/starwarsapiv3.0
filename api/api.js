const express = require('express');
const app = express();
const serverless = require('serverless-http');
const mongoose = require('mongoose');

const starwarsRoute = require('./routes/starwars');
const router = express.Router();
// const bodyParser = require('body-parser');
// const cors = require('cors')
require('dotenv/config')

// app.use(cors())
app.use(express.json())
app.use('/starwars', starwarsRoute);


app.get('/', (req, res)=>{
   res.json({
    "title":"Starwars api created by python v for starwars story"
   })
})

app.use('/', router)

//connect db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,}, ()=>{
})



module.exports.handler = serverless(app)