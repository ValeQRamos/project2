const router = require('express').Router();
const Example = require('../models/Example.model');
const fileUploader = require('../config/cloudinary.config');


//create ------
router.get('/create-routine',(req,res, next) =>{
  res.render('routines/new-routine',{userInSession: req.session.currentUser})
})
//create ------
router.post('/create-routine',fileUploader.single('routine-image'),(req,res, next) => {
  const {title, difficulty, description} = req.body
  Example.create({title, difficulty, description, imageUrl:req.file.path})
    .then(() => res.redirect('routines'))
    .catch(error => next(error))
})

//read ------
router.get('/routines',(req, res, next) =>{
  Example.find()
    .then(routine => res.render('routines/routines',{routine,userInSession: req.session.currentUser}))
})

//update ------
router.get('/routines/:id/edit',(req, res, next) =>{
  const {id} = req.params

  Example.findById(id)
    .then(routineToEdit => res.render('routines/edit-routine.hbs',{routineToEdit,userInSession: req.session.currentUser}))
    .catch(error => next(error))
})
//update ------
router.post('/routines/:id/edit',fileUploader.single('routine-image'),(req,res, next) =>{
  const {id} = req.params
  const {title, difficulty ,description, existingImage} = req.body;
  let imageUrl;

  if(req.file){ imageUrl = req.file.path } 
  else { imageUrl = existingImage }

  Example.findByIdAndUpdate(id, {title, difficulty, description, imageUrl},{new:true})
    .then(() => res.redirect('/routines/routines'))
    .catch(error => next(error))
})

//delete ------
router.get('/routines/:id/delete',(req, res, next) => {
  const {id} = req.params
  Example.findByIdAndRemove(id)
    .then(() => res.redirect('/routines/routines'))
    .catch(error => next(error))
})

module.exports = router;