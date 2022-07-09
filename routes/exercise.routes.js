const router = require("express").Router()
const ExerciseModel= require("../models/Exercises.model")
const fileUploader = require ("../config/cloudinary.config")
const Snacks = require('../models/Snacks.model')


// create
router.get("/create-exercise",(req,res,next)=>{
    // res.render("exercise/new-exercise",{userInSession: req.session.currentUser})
    Snacks.find()
        .then(snackInfo => res.render('exercise/new-exercise',{snackInfo, userInSession: req.session.currentUser}))
        .catch(error => next(error))
})

// create
router.post("/create-exercise",fileUploader.single("exercise-image"),(req,res,next)=>{

const {exercise,series,repetitions,breaks,snacks}= req.body
ExerciseModel.create({exercise,series,repetitions,breaks,snacks,imageUrl:req.file.path})
.then(()=> res.redirect("exercise-list"))
.catch(error=>next (error))

})

// read
router.get("/exercise-list",(req,res,next)=>{
    
    ExerciseModel.find()
    // .populate('snacks')
    .then(exercise=>{
        res.render("exercise/exercises",{exercise,userInSession: req.session.currentUser})
    })
    .catch(error => next(error))
})


// update
router.get("/exercise-edit/:id",(req,res,next)=>{
    const {id} = req.params

    ExerciseModel.findById(id)
    .then(exercise=>{
        res.render("exercise/edit-exercise",exercise)
    })
    .catch(error =>next(error))
})

// update
router.post("/exercise-edit/:id",fileUploader.single("exercise-image"),(req,res,next)=>{
    const {id} = req.params
    const {exercise,series,repetitions,breaks, existingImage}= req.body
    let imageUrl;


    if(req.file){imageUrl=req.file.path}
    else {imageUrl = existingImage}

    ExerciseModel.findByIdAndUpdate(id,{exercise,series,repetitions,breaks, existingImage},{new:true})
    .then(()=>{
        res.redirect("/exercise/exercise-list")
    })
    .catch(error =>next(error))
})
// delete
router.get("/exercise-delete/:id",(req,res,next)=>{
    const {id}= req.params

    ExerciseModel.findByIdAndDelete(id)
    .then(()=> res.redirect("/exercise/exercise-list"))
    .catch(error =>next(error))
})




module.exports= router