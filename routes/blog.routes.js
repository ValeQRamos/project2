const router = require ('express').Router()
const BlogModel = require ('../models/Blog.model')
const UserModel = require("../models/User.model")

router.get('/blog-list',(req,res,next)=>{

    BlogModel.find()
    .populate({path: 'owner', model:UserModel})
    .then(comments=>{
        console.log("Que es mi comments",comments)
        res.render("blog/blogs",{comments,userInSession: req.session.currentUser})
    })
})

router.get('/create-comment',(req,res,next)=>{
    console.log("que es mi req.session",req.session.currentUser)
    res.render("blog/new-comment",{userInSession: req.session.currentUser})
})

router.post("/create-comment",(req,res,next)=>{

    const {_id} = req.session.currentUser

BlogModel.create({...req.body,owner:_id})

.then(()=>res.redirect("blog-list"))
.catch(error => next(error))
})


router.get("/delete-comment/:id",(req,res,next)=>{

    const {id}= req.params

    BlogModel.findByIdAndDelete(id)
    .then(()=>{
        res.redirect("/blog/blog-list")
    })

.catch(error => next(error))

})




module.exports=router