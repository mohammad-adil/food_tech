const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const Auth = require("../middleware/Auth.js")
const loginUser = require("../middleware/loginUser.js")
const validate = require("../middleware/validate.js")
const AddItem = require('../mod/AddItem.js')
const Adduser = require('../mod/Adduser.js')
const approveUser = require('../mod/approveUser.js')
const router = new express.Router()


router.post('/createUser',validate,Adduser,async(req,res)=>{
    
    res.status(200).json({ msg: 'User created' });
 })


 router.post('/approveUser',approveUser,async (req,res)=>{

 })

 
router.post('/loginUser',loginUser,async(req,res)=>{
    let user = (req.user)
   res.status(200).json(user)
})


router.get('',(req,res)=>{

    res.render('index')

})


router.post('/addItem',Auth,AddItem,async(req,res)=>{
   
    console.log('Hello i am here 2')

})
module.exports=router