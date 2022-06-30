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

router.get("/snacks-create",(req,res,next)=>{
    res.render ("snacks/new-snacks")
})

router.post("/snacks-create",fileUploader.single("snack-image"),(req,res,next)=>{

    const {imageUrl,...allInfo} = req.body
    
    SnackModel.create({allInfo,imageUrl:req.file.path})
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

router.post("/snacks-edit/:id",(req,res,next)=>{
const {id} = req.params

SnackModel.findByIdAndUpdate(id,{...req.body},{new:true})
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
