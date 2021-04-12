const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const router = new express.Router()

const Adduser = async (req, res, next) => {
    //Generate Unique ID for user
    let IDS = pID(req.user.name);
    ///Get Department ID from the Department Table that has to be stored with the user
    let dept = 'SELECT * FROM departments WHERE `DEPARTMENT_NAME` = ?'
    let getDept = await db.promise().query(dept,[req.user.department], (err,result)=>{})  
     if(JSON.stringify(getDept[0])==='[]'){
                /* Department  is Not registered
                 Send 403 response  
                */
                 res.status(404).json({msg: ' No Such Department Found!'})

           } 
         else{
        
                 let departmen_ID = getDept[0][0].DEPARTMENT_ID
                 console.log(departmen_ID)
                 /// check if the user is already present in database.
                 let sql = 'SELECT * FROM user WHERE `EMAIL` = ?'
                 let getUser = await db.promise().query(sql,[req.user.email], function(err,result){})  
                 //stringfy the data for a check
                 let Userdata = JSON.stringify(getUser[0])
                 ///check if the user is present or not
                  if(Userdata === '[]'){
                   /* User is not registered with Email Id
                    Regiser the User now  
                   */
                    req.user.ID= IDS
                    let responseUser = await createUser(req.user, departmen_ID)
                    console.log(responseUser)
                    next()

                    }
                    else{
                        /* User is  registered with Email Id
                           Send 403 
                   */
                    res.status(403).send('User Exists')
                    }
        
        }
   
}


let pID = function (name) {
    
    return name.substr(0,4) + Math.random().toString(36).substr(8, 9);
  }


  /// Save the user Details in Database..
  async function createUser(user,DEPARTMENT_ID) {
    return new Promise((resolve, reject) => {
      if(user && DEPARTMENT_ID){
        let sql = "INSERT INTO user (NAME, REG_ID,EMAIL,PHONE_NUMBER,UID,ACTIVE,TOKENS,PASSWORD,DEPARTMENT) VALUES ('"+ user.name +"','"+ user.id +"','"+user.email +"','"+user.phone +"','"+ user.ID +"','0','0','"+user.password +"','"+ DEPARTMENT_ID +"')";
        db.query(sql, function (err, result) {
            if (err) throw err;
            else{return resolve('User Created') }
          });

      }else{
  
       return reject('Unable to Create User')
      }
    })

  }
  

module.exports= Adduser

