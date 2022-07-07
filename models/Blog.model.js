const mongoose = require ('mongoose')
const {Schema,model} = mongoose

const blogSchema = new Schema(
{
    comment:{
        type:String
    },
},{timeseries:true})

module.exports= model("Blog",blogSchema)