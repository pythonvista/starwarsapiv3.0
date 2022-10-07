
const {db, firestore} = require('../auth')
const path = require('path');
const express = require('express');
const router = express.Router();
const collection = firestore.collection;
const onSnapshot = firestore.onSnapshot;
const addDoc = firestore.addDoc;
function addPost(dbname, data){
  let collRef = collection(db, dbname);
  let res = addDoc(collRef, data);  
  return res;
};




router.get('/',  (req, res) => {
  res.json({"comingsoon": "comming soon page"})
});


// get all starwars battleships api
router.get('/ships', async (req, res) => {
  try {
    onSnapshot(collection(db, 'ships'), (snapshot) => {
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
// get all starwars battleships api


// get all starwars guns api
router.get('/guns', async (req, res) => {
  try {
    onSnapshot(collection(db, 'guns'), (snapshot) => {
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
// get all starwars battleships api




router.post('/post-starwars', async (req, res) => {
  const post = {
    title: req.body.title,
    shortDescrption: req.body.shortDescrption,
    description: req.body.description,
    image: req.body.image,
  };
  try{
   const res1 = await addPost(req.body.dbname, post);
   if(res1){
    let message = `${req.body.dbname} Added Successfully`
      res.json({ msg: message, color: "success", status: "success" })
   }
  }catch(err){
    res.json(err)
  }
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
