// models/User.model.js
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Nombre de usuario requerido.'],
      unique: true,
      googleID: String,
    },
    email: {
      type: String,
      required: [true, 'Email es requerido.'],
      match: [/^\S+@\S+\.\S+$/, 'Por favor ingresa un email valido.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: [true, 'Contraseña es requerisa.']
    },
    profile_pic:{
      type:String,
      default:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1558806705/asdsadsa_iysw1l.jpg",
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);
