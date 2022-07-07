const router= require ("express").Router()
const SnackModel = require("../models/Snacks.model")
const mongoose = require('mongoose');
const fileUploader = require("../config/cloudinary.config")



router.get("/snacks-list",(req,res,next)=>{
    
    SnackModel.find()
    .then(snacks=>{   
        console.log("que es..",req.session)                     
        res.render("snacks/snacks",{snacks,userInSession: req.session.currentUser})
    })
    .catch(error=>{
        next (error)
    })
})

router.get("/create-snacks",(req,res,next)=>{
    res.render ("snacks/new-snacks",{userInSession: req.session.currentUser})
})

router.post("/create-snacks",fileUploader.single("snack-image"),(req,res,next)=>{

    const {name,resena,ingredients,instructions,nutritionFacts,prepTime,cooktime,yiel} = req.body
    let newIngredientes = ingredients.split(",")
    let newInstructions = instructions.split(".")

    SnackModel.create({name,resena,ingredients:newIngredientes,instructions:newInstructions,nutritionFacts,prepTime,cooktime,yiel,imageUrl:req.file.path})
    .then(()=>res.redirect("snacks-list"))
    .catch(error=>{
        next (error)
    })

})

router.get("/snacks-edit/:id",(req,res,next)=>{

const {id} = req.params
SnackModel.findById(id)
.then(snack=>{
    res.render("snacks/edit-snacks",snack)
})
.catch(error =>next(error))

})

router.post("/snacks-edit/:id",fileUploader.single("snack-image"),(req,res,next)=>{
const {id} = req.params
const {name,resena,ingredients,instructions,nutritionFacts,prepTime,cooktime,yiel,existingImage} = req.body
let newIngredientes = ingredients.split(",")
let newInstructions = instructions.split(".")
let imageUrl;

if (req.file){imageUrl= req.file.path}
else {imageUrl= existingImage}

SnackModel.findByIdAndUpdate(id,{name,resena,ingredients:newIngredientes,instructions:newInstructions,nutritionFacts,prepTime,cooktime,yiel,imageUrl},{new:true})
.then(()=>{

    res.redirect("/snacks/snacks-list")
})
.catch(error =>next(error))

})

router.get("/snacks-delete/:id",(req,res,next)=>{

const {id} = req.params

SnackModel.findByIdAndDelete(id)
.then(()=> res.redirect("/snacks/snacks-list"))
.catch(error =>next(error))

})

module.exports= router;
