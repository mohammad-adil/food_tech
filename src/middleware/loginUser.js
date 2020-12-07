const db = require('../db/db.js')
const mysql = require('mysql2/promise');
const user = require('../mod/loginUser.js')
const jwt = require('jsonwebtoken');
const { json, response } = require('express');
const bluebird = require('bluebird');
const { promise } = require('../db/db.js');



const loginUser = async function (req,res,next){
  ///check user Credentials
  try{
  let user = await checkUserCredentials(req.body)
  let token = await generateToken(user)
  let save_Token = await saveToken(user,token)
  console.log(save_Token)
  }catch(e){

  }
}


async function checkUserCredentials(body){
let user = 'SELECT * FROM user WHERE `EMAIL`=? AND `PASSWORD` = ? AND NOT `ACTIVE`=?'
  ///get the user from the database
let getDept = await db.promise().execute(user,[body.email.toString(),body.password.toString(),0], function(err,result){
 });
 return getDept[0][0]
}


async function generateToken(user) {
  return new Promise((resolve, reject) => {
         
    if(user){
      let token = jwt.sign({user:user.REG_ID.toString()},'stockpIlebYaAdiL');
       return resolve(token)
    }else{

     return reject('Unabale to Set Token')
    }
  })

}

async function saveToken(user,token){
  return new Promise((resolve, reject) => {
   
 let oldToken = JSON.parse(user.TOKENS)
       oldToken[tokens]= oldToken[tokens] +','+ token

    console.log(oldToken)
  let newToken = {
    tokens:user.TOKENS+','+ token,
    newToken:token
  }

let UpdateToken = 'UPDATE `user` SET `TOKENS`=? WHERE `UID`=?'
let getDept = db.execute(UpdateToken,[null,user.UID.toString()], function(err,results){
  
  if(results){


    
    console.log(s)
    let UpdateToken = 'UPDATE `user` SET `TOKENS`=? WHERE `UID`=?'
    let getDept = db.execute(UpdateToken,[newToken,user.UID.toString()], function(err,results){
    
    })    
      }else if(err){ res.sendStatus(500) }

    });

  })
}



module.exports = loginUser

