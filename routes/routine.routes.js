const router = require('express').Router()
const Routine = require('../models/Routine.model');
// const fileUploader = require('');


//create
router.get('/newroutine',(req,res, next) =>{
  res.render('routines/new-routine')})



  
module.exports = router