const express = require ("express")
const SnackModel = require("../models/Snacks.model")
const router = express.Router()

router.get("/snacks-list",(req,res,next)=>{

    SnackModel.find()
    .then(snacks=>{
        res.render("/snacks/snacks.hbs",{snacks})
    })
    .catch(error=>{
        next (error)
    })
})

router.get("/snacks/create",(req,res,next)=>{
    res.render ("snacks/new-snacks")
})

router.post("/snacks/create",(req,res,next)=>{

    SnackModel.create(req.body)
    .then(snack=>{
        res.render("snacks/snacks",snack)
    })

})
















module.exports= router;
