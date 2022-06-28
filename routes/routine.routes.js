const router = require('express').Router();
const Routine = require('../models/Routine.model');
const fileUploader = require('../config/cloudinary.config');


//create
router.get('/create-routine',(req,res, next) =>{
  res.render('routines/new-routine')
})
//create
router.post('/create-routine',fileUploader.single('routine-image'),(req,res, next) => {
  const {title, duration, description} = req.body
  Routine.create({title, duration, description, imageUrl:req.file.path})
    .then(movie => {
      console.log(`movie --->`, movie)
      res.redirect('routines')
    })
    .catch(error => next(error))
})

// read
router.get('/routines',(req, res, next) =>{
  Routine.find()
    .then(routine => {
      res.render('routines/routines',{routine})
    })
})

module.exports = router;