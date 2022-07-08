const router = require ('express').Router()
const BlogModel = require ('../models/Blog.model')

router.get('/blog-list',(req,res,next)=>{

    BlogModel.find()
    .then(comments=>{
        console.log("Que es mi comments",comments)
        res.render("blog/blogs",{comments})
    })
})

router.get('/create-comment',(req,res,next)=>{
    res.render("blog/new-comment")
})

router.post("/create-comment",(req,res,next)=>{


BlogModel.create(req.body)

.then(()=>{
    res.redirect("blog-list")

})
.catch(error => next(error))


})

module.exports=router