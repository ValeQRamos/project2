const router = require("express").Router()
const ExerciseModel= require("../models/Excercises.model")
const fileUploader = require ("../config/cloudinary.config")



router.get("/exercise-list",(req,res,next)=>{
    
    ExerciseModel.find()
    .then(exercise=>{
        res.render("exercise/exercises",{exercise})
    })
})


module.exports= router