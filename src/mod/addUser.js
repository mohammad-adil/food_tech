const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const validate = require("../middleware/validate.js")

const router = new express.Router()


router.post('/addUser',validate, async (req,res)=>{


})




module.exports=router 



