const db = require('../db/db.js')
const mysql = require('mysql2/promise');
const user = require('../router/router.js')
const jwt = require('jsonwebtoken');
const { json, response } = require('express');
const bluebird = require('bluebird');
const { promise } = require('../db/db.js');



const loginUser = async function (req,res,next){
  ///check user Credentials
  try{
  let user = await checkUserCredentials(req.body)
  let token = await generateToken(user)
  let UserDetails = await saveToken(user,token)
delete UserDetails.PASSWORD
     delete UserDetails.REG_DATE
     delete UserDetails.ACTIVE
     delete UserDetails.REG_ID
  req.user=UserDetails
next()

  }catch(e){
res.sendStatus(500).send(e)
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
      let token = jwt.sign({user:user},'stockpIlebYaAdiL', { expiresIn: 60 * 1 });
    
       
       return resolve(token)
    }else{

     return reject('Unabale to Set Token')
    }
  })

}

async function saveToken(user,token){
  return new Promise((resolve, reject) => {

   let UpdateToken = 'UPDATE `user` SET `TOKENS`=? WHERE `UID`=?'
   let getDept = db.execute(UpdateToken,[token,user.UID.toString()], function(err,results){
   
    if(results){
      user.TOKENS = token
           return resolve(user)
    }else{

    return reject('Not Able to Validate')
    }
   })
  })
}



module.exports = loginUser

