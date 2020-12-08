const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const Auth = require("../middleware/Auth.js")
const loginUser = require("../middleware/loginUser.js")
const router = new express.Router()


router.get('/login',(req,res)=>{

    res.render('login')
})

router.post('/loginUser',loginUser,async(req,res)=>{
    let user = (req.user)
   res.status(200).json(user)
})

router.get('',(req,res)=>{

    res.render('index')

})

router.post('/addItem',Auth,async(req,res)=>{
   

})

module.exports=router