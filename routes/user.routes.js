const express = require('express');
const router = express.Router();

// is logged in? middleware
const isLogged = (req, res, next) => {
  if(!req.user){
    res.redirect('/user-no-permission');
  } else {
    next();
  }
};

router.get('/logged', (req, res) => {
  res.render('logged', {name: req.user.displayName, photo: req.user.photos[0].value});
  
});

router.get('/profile', isLogged, (req, res) => {
  res.render('userProfile');
});

router.get('/profile/settings', (req, res) => {
  res.render('userSettings') ;
})

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;