var mysql=require('mysql');

 var connection=mysql.createConnection({
   host:'localhost',
   user:'thomas',
   password:'data',
   database:'Inv_Manage_DB'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
module.exports = connection; 