const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const router = new express.Router()


router.post('/approveUser',async (req,res)=>{
  console.log(req.body)

    if(req.body.hasOwnProperty('Approved')){
        let user ='SELECT * FROM user WHERE `UID` = ?'
        let updateUser = await db.promise().query(user,[req.body.user], function(err,result){
            if(err){ throw err}
            else{
            return result
            }
        });
   user ='UPDATE user SET `ACTIVE`=? WHERE `UID` = ?'
        let update = await db.promise().query(user,[1,req.body.user], function(err,result){
            if(err){ throw err}
            else{
            return {Success}
            }
        })
console.log(update)
    }else if(req.body.hasOwnProperty('Rejected')){
        console.log('Rejected')
    }else{
        console.log('No such user Found..!')
    }

})

module.exports= router