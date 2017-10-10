var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shop', function(req, res, next) {
    res.render('shop/index', { title: 'Express' });
});

router.get('/docs', function(req, res, next) {
    res.render('docs/index', { title: 'Express' });
});

router.get('/docs/wph', function(req, res, next) {
  res.render('docs/wph/index', { title: 'Express' });
});

router.get('/docs/insert', function(req, res, next) {
  res.render('docs/insert', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
    res.render('yc/login', { title: 'Login',bg:"bg1","main":"main-log" });
});

router.get('/register', function(req, res, next) {
    res.render('yc/register', { title: 'Register',bg:"bg2","main":"main-reg" });
});


router.get('/introduce', function(req, res, next) {
    res.render('zp/introduce', { title: 'introduce'});
});

module.exports = router;
