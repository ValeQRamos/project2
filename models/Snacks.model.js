const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const snackSchema = new Schema(
  {
    name:String,
    resena:String,
    ingredients: String,
    instructions:String,
    nutritionFacts:String,
    prepTime:String,
    cooktime:{
        default:"No aplica",
        type:string,
    },
    yiel:String
  },
  {
    
    timestamps: true,
  }
);

module.exports  = model("Snack", snackSchema);

