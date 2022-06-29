const router = require('express').Router();
const Routine = require('../models/Routine.model');
const fileUploader = require('../config/cloudinary.config');


//create ------
router.get('/create-routine',(req,res, next) =>{
  res.render('routines/new-routine')
})
//create ------
router.post('/create-routine',fileUploader.single('routine-image'),(req,res, next) => {
  const {title, duration, description} = req.body
  Routine.create({title, duration, description, imageUrl:req.file.path})
    .then(() => res.redirect('routines'))
    .catch(error => next(error))
})

//read ------
router.get('/routines',(req, res, next) =>{
  Routine.find()
    .then(routine => res.render('routines/routines',{routine}))
})

//update ------
router.get('/routines/:id/edit',(req, res, next) =>{
  const {id} = req.params

  Routine.findById(id)
    .then(routineToEdit => res.render('routines/edit-routine.hbs',routineToEdit))
    .catch(error => next(error))
})
//update ------
router.post('/routines/:id/edit',fileUploader.single('routine-image'),(req,res, next) =>{
  const {id} = req.params
  const {title, duration ,description, existingImage} = req.body;
  let imageUrl;

  if(req.file){ imageUrl = req.file.path } 
  else { imageUrl = existingImage }

  Routine.findByIdAndUpdate(id, {title, duration, description, imageUrl},{new:true})
    .then(() => res.redirect('/routines/routines'))
    .catch(error => next(error))
})

//delete ------
router.get('/routines/:id/delete',(req, res, next) => {
  const {id} = req.params
  Routine.findByIdAndRemove(id)
    .then(() => res.redirect('/routines/routines'))
    .catch(error => next(error))
})

module.exports = router;