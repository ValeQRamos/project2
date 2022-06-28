const router= require ("express").Router()
const SnackModel = require("../models/Snacks.model")
const mongoose = require('mongoose');


router.get("/snacks-list",(req,res,next)=>{

    SnackModel.find()
    .then(snacks=>{
        res.render("snacks/snacks",{snacks})
    })
    .catch(error=>{
        next (error)
    })
})

router.get("/snacks-create",(req,res,next)=>{
    res.render ("snacks/new-snacks")
})

router.post("/snacks-create",(req,res,next)=>{

    const {...allInfo} = req.body
    
    SnackModel.create(allInfo)
   console.log("Que hay en snack mode",allInfo)
    .then(snacks=>{
        console.log("Que hay en snack mode",snacks)
        res.redirect("/ejemplo",snacks)
    })
    .catch(error=>{
        next (error)
    })

})



module.exports= router;
