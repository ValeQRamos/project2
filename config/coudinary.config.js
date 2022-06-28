const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params:{
    folder:'routine-snacks-project',
    allowed_formats:['jpg','png','gif','mp4','pdf','webp','jpeg','svg']
  }
})

module.exports = multer({storage})