const mongoose = require('mongoose');
const {Schema, model} = mongoose

const exerciseSchema = new Schema(
  {
    imageUrl:{
      default:"",
      type:String
    },
    exercise:{
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
    breaks:{
        require:true,
        type:Number
    },
    snacks:[{type:Schema.Types.ObjectId, ref:'snacks'}]
  },{timestamps:true}
)



module.exports = model('Exercise', exerciseSchema);
