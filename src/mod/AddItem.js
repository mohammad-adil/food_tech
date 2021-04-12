const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const router = new express.Router()


let AddItem = async(req,res,next)=>{
    console.log('Authenticated')
  // let user = 'SELECT * FROM user WHERE `UID`=? AND NOT `ACTIVE`=?'
    ///get the user from the database by ID
     //console.log(req.UID)
};


module.exports= AddItem