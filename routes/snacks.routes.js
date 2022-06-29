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
    .then(()=>res.redirect("snacks-list"))
    .catch(error=>{
        next (error)
    })

})



module.exports= router;
