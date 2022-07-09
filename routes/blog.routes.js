const router = require ('express').Router()
const BlogModel = require ('../models/Blog.model')

router.get('/blog-list',(req,res,next)=>{

    BlogModel.find()
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


BlogModel.create(req.body)

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