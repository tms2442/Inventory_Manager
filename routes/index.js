var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/index', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  if(email && password) {
  connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], function(err, results, fields) {

      if(err){
        req.flash('error', err); 
           
       }else{
        if (results.length){
          req.session.login = true;
          res.redirect('/items');
      } else {
          res.send('incorrect')
      }
           
       }

      results.end;
  })
}

    //res.redirect('/items');
});

module.exports = router;
