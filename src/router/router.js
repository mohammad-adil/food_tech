const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const Auth = require("../middleware/Auth.js")
const loginUser = require("../middleware/loginUser.js")
const validate = require("../middleware/validate.js")

const SaveItem = require('../mod/SaveItem.js')
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

router.post('/addItem',Auth,SaveItem,async(req,res)=>{
   
    console.log('Hello i am here 2')

})

router.post('/addUser',validate,async(req,res)=>{
    
    let IDS = pID(req.user.name);
    let dept = 'SELECT * FROM departments WHERE `DEPARTMENT_NAME` = ?'
    ///get the department from the database
    let getDept = await db.promise().query(dept,[req.user.department], function(err,result){
    if(err){ throw err}
    else{
    
    }
    res.sendStatus(200)
})


let departmentName = getDept[0][0].DEPARTMENT_ID
    let sql = "INSERT INTO user (NAME, REG_ID,EMAIL,PHONE_NUMBER,UID,ACTIVE,TOKENS,PASSWORD,DEPARTMENT) VALUES ('"+ req.user.name +"','"+ req.user.id +"','"+ req.user.email +"','"+ req.user.phone +"','"+ IDS +"','0','0','"+ req.user.password +"','"+ departmentName +"')";
  db.query(sql, function (err, result) {
      if (err) throw err;
    return 'Success'
    });

})

let pID = function (name) {
    
    return name.substr(0,4) + Math.random().toString(36).substr(8, 9);
  }

module.exports=router