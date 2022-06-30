const mongoose = require('mongoose');
const {Schema, model} = mongoose

const exampleSchema = new Schema(
  {
    imageUrl:{
      type:String
    },
    title:{
      require:true,
      type:String
    },
    difficulty:{
      require:true,
      type:String
    },
    description:{
      require:true,
      type:String
    },
  },{timestamps:true}
)

module.exports = model('Routine', exampleSchema);
