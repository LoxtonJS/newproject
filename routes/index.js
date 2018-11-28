var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//用户
router.get('/users.html', function(req, res) {
  res.render('users');
});

//品牌管理
router.get('/brand.html', function(req, res) {
  res.render('brand');
});


//手机管理
router.get('/phone.html', function(req, res) {
  res.render('phone');
})
//登录
router.get('/login.html', function(req, res) {
  res.render('login');
})

//注册
router.get('/register.html', function(req, res) {
  res.render('register');
})

module.exports = router;
