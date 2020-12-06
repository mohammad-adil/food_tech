const db = require('../db/db.js')
const mysql = require('mysql2/promise');
const user = require('../mod/loginUser.js')
const jwt = require('jsonwebtoken');
const { json } = require('express');


const loginUser = async(req,res,next)=>{
try{
    let user = 'SELECT * FROM user WHERE `EMAIL`=? AND `PASSWORD` = ? AND NOT `ACTIVE`=?'
    ///get the user from the database
      let getUser = await db.execute(user,['me@adil.com','shah@123',0], function(err, results, fields){
        if(results[0]){
            
const User =(results[0])
const token = jwt.sign({_REG_ID:User.REG_ID.toString()},'stockpilebyshaHaadIL')
console.log(token)

let updateToken = 'UPDATE user SET `TOKENS`=? WHERE `REG_ID` = ?'


        }else{
         res.sendStatus(400)
        }        
 })
}catch(e){
    res.sendStatus(404)
}
}

module.exports = loginUser