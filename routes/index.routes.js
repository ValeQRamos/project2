const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  console.log('que es ...',req.session)
  res.render("index",{userInSession: req.session.currentUser});
});

module.exports = router;
