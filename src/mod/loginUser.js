const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const loginUser = require("../middleware/loginUser.js")
const router = new express.Router()


router.post('/loginUser',loginUser,async(req,res)=>{

})

module.exports=router