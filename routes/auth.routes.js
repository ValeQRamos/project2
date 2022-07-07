const router = require('express').Router()
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.model')
const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard.js');
const uploade = require ("../config/cloudinary.config") 

// Signup ------
router.get('/signup', isLoggedOut ,(req, res) => res.render('auth/signup'));

router.post('/signup', isLoggedOut ,(req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.render('auth/signup', { errorMessage: 'Todos los campos son obligatorios. Por favor proporcione su nombre de usuario, correo y contraseña' });
    return;
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res
      .status(500)
      .render('auth/signup', { errorMessage: 'La contraseña debe tener al menos 6 caracteres y debe contener al menos un numero, una minuscula y una letra mayuscula.' });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      return User.create({
        username,
        email,
        passwordHash: hashedPassword
      });
    })
    .then(() => {
      res.redirect('/userProfile');
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render('auth/signup', { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render('auth/signup', {
          errorMessage: 'El nombre de usuario y el correo deben ser unicos. Ya se ha utilizado el nombre de usuario o el correo.'
        });
      } else {
        next(error);
      }
    });
});

// Login ------
router.get('/login', isLoggedOut ,(req, res) => res.render('auth/login'));

router.post('/login', isLoggedOut ,(req, res, next) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Porfavor ingrese ambos, correo y contraseña para iniciar sesion'
    });
    return;
  }

  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.render('auth/login', { errorMessage: 'El correo no esta registrado, Prueba con otro correo.' });
        return;
      } else if (bcryptjs.compareSync(password, user.passwordHash)) {
        req.session.currentUser = user;
        res.redirect('userProfile');
      } else {
        res.render('auth/login', { errorMessage: 'Contraseña incorrecta.' });
      }
    })
    .catch(error => next(error));
});

// UserProfile ------
router.get('/userProfile', isLoggedIn ,(req, res) => {
  //? console.log("que es..",req.session)
  res.render('users/user-profile', { userInSession: req.session.currentUser });
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .render("auth/logout", { errorMessage: err.message });
    }
    res.redirect("/");
  });
});
//sale indefinido en el post 
//pero en el get si manda la foto 
// Edit user profile picture
router.get('/edit-user', isLoggedIn,(req, res, next) => {
  // console.log('edit user ---->', req.session.currentUser)
  res.render('users/edit-user', {userInSession: req.session.currentUser})
})

router.post('/edit-user', isLoggedIn,uploade.single('profile_pic'), (req, res, next) => {
 
  const {profile_pic,...allUser} = req.body
  if(req.file){
    profile_pic = req.file.path
  }
  User.findByIdAndUpdate(req.session.currentUser._id, {...allUser, profile_pic},{new:true})

    .then(updatedPhoto =>{
      //console.log("que es ",updatedPhoto)
      req.session.currentUser = updatedPhoto

      res.redirect('userProfile')
    })
    .catch(error => next(error))
})

module.exports = router;
