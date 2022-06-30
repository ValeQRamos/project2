const mongoose = require('mongoose');
const {Schema, model} = mongoose

const exerciseSchema = new Schema(
  {
    imageUrl:{
      type:String
    },
    excersice:{
      require:true,
      type:String
    },
    series:{
      require:true,
      type:Number,
    },
    repetitions:{
      require:true,
      type:Number,
    },
    break:{
        require:true,
        type:Number


    }
  },{timestamps:true}
)



module.exports = model('Exercise', exerciseSchema);
