var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');
 
 
/* GET home page. */
router.get('/', function(req, res, next) {
      
 connection.query('SELECT * FROM Item',function(err,rows)     {
 
        if(err){
         req.flash('error', err); 
         res.render('items',{page_title:"Customers - Node.js",data:''});   
        }else{
            
            res.render('items',{page_title:"Customers - Node.js",data:rows});
        }
                            
         });
        
    });
 
module.exports = router;