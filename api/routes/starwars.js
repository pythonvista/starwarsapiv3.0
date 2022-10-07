const express = require('express');
const router = express.Router();
const starwars = require('../models/starwarsmodels');


router.get('/', async (req, res) => {
    try{
       const allstarwars = await starwars.find();
        res.json(allstarwars)
      }catch(err){
        res.json({message: err})
      }
});
router.get('/info', async (req, res) => {
  res.json({
    "starwars":"testing"
  })
});

router.post('/', async (req, res) => {
  const post = new starwars({
    title: req.body.title,
    shortDescrption: req.body.shortDescrption,
    description: req.body.description,
    image: req.body.image,
  });
  
  try{
    await post.save();
    res.send("Post has being created!!")
  }catch(err){
    res.send("error eccoured")
  }
 
});

module.exports = router;
