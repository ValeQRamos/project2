const router = require ('express').Router()
const BlogModel = require ('../models/Blog.model')

router.get('/blog-list',(req,res,next)=>{

    BlogModel.find()
    .then(comments=>{
        res.render("blog/blogs",comments)
    })
})

router.get('/create-comment',(req,res,next)=>{
    res.render("blog/new-comment")
})


module.exports=router