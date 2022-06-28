const mongoose = require('mongoose');
const {Schema, model} = mongoose

const RoutineSchema = new Schema(
  {
    imageUrl:{
      type:String
    },
    title:{
      require:true,
      type:String
    },
    duration:{
      require:true,
      type:Number
    },
    description:{
      require:true,
      type:String
    },
    snacks:[{type:Schema.Types.ObjectId, ref:'Snacks'}]
  },{timestamps:true}
)

module.exports = model('Routine', RoutineSchema);