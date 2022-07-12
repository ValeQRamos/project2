const mongoose = require ('mongoose')
const {Schema,model} = mongoose

const blogSchema = new Schema(
{
    comment:{
        
        type:String
    },
    owner:{
    type:Schema.Types.ObjectId, ref:'user'   
    },
},{timeseries:true})

module.exports= model("Blog",blogSchema)