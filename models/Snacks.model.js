const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const snackSchema = new Schema(
  {

    imageUrl:{
    type:String,
    },

    name:{
      type:String,
      require:true,
    },

    resena:String,

    ingredients:{
      type:String,
      require:true,
    }, 
    instructions:{
      type:String,
      require:true,
    }, 
    nutritionFacts:{
      type:Number,
      require:true,
    },
    prepTime:{
      type:Number,
      require:true,
    },
    cooktime:{
        default:0,
        type:Number,
    },
    yiel:{
      type:Number,
      require:true,
    }
  },
  {
    
    timestamps: true,
  }
);

module.exports  = model("Snack", snackSchema);

