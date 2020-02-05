var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var user = new userController();

router.get('/', function(req, res, next) {
    res.render('index', {page:'Home', menuId:'home'});
  });
router.get('/userlist', user.getUserList);


module.exports = router;
