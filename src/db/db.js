const mysql  = require('mysql2')
const bluebird = require('bluebird');
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'foodtech',
    Promise: bluebird
});

conn.connect(function(err){

    if(err){
        console.log(err); 
        return
    }else{
        console.log('Connected')
    }

});

module.exports=conn