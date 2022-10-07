
const {db, firestore} = require('../auth')

const express = require('express');
const router = express.Router();
const collection = firestore.collection;
const onSnapshot = firestore.onSnapshot;

router.get('/', async (req, res) => {
  try {
    onSnapshot(collection(db, 'users'), (snapshot) => {
      let docs = []
      snapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      res.json(docs)
    })
   
  } catch (err) {
    res.json({ message: err });
  }
});




router.get('/info', async (req, res) => {
  res.json({
    starwars: 'testing',
  });
});

router.post('/', async (req, res) => {
  const post = {
    title: req.body.title,
    shortDescrption: req.body.shortDescrption,
    description: req.body.description,
    image: req.body.image,
  };

  try {
    res.json(post)
  } catch (err) {
    res.send('error eccoured');
  }
});

module.exports = router;
