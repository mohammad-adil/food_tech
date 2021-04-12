const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const { promise } = require('../db/db.js')
const { reject } = require('bluebird')

const approveUser =  async function (req,res,next){
         
let User = await FindUser(req)

if(User[0]==='[]'){

    res.status(404).json({msg:'No Such User Found'})

}else{

    let update = await UserUpdate(req.body)
    console.log(update)
    }

}




let FindUser = async function(req){
    if(req.body.hasOwnProperty('Approved')){
        let user ='SELECT * FROM user WHERE `UID` = ?'
        try{
              let updateUser = await db.promise().query(user,[req.body.user], (err,result)=>{});
              return updateUser
        }catch(e){
        console.log(e)
         }
    
    }
}


let UserUpdate = async function(user){
    let userQuery ='UPDATE user SET `ACTIVE`=? WHERE `UID` = ?'
    let update = await db.promise().query(userQuery,[user.Approved,user.user], function(err,result){    })
    //console.log(' The update is \n '+ JSON.stringify(update))
    return update
}

module.exports= approveUser