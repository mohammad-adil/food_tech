const db = require('../db/db.js')
const cookieParser = require('cookie-parser')
const express = require('express')
const mysql = require('mysql2')
const Auth = require("../middleware/Auth.js")
const loginUser = require("../middleware/loginUser.js")
const validate = require("../middleware/validate.js")
const AddItem = require('../mod/AddItem.js')
const Adduser = require('../mod/Adduser.js')
const approveUser = require('../mod/approveUser.js')
const path = require('path')
const router = new express.Router()


router.post('/createUser', validate, Adduser, async (req, res) => {

    res.status(200).json({ msg: 'User created' });

});



router.post('/approveUser', approveUser, async (req, res) => {



});


router.get("/admin", async (req, res) => {
    let token = req.query["token"]
    console.log("token", token)
    res.sendFile(path.dirname(__dirname) + "/public/Panel/User/issue.html")
});


router.post('/loginUser', loginUser, async (req, res) => {
    try {
        let ROLE = req.user.ROLE
        console.log(ROLE)

        if (ROLE == "user") {
            res.redirect("/admin")
            //res.status(200).json({role:"user",token:"XYZ",url:"/admin"})

        } else if (ROLE == "admin") {
            res.sendFile(path.dirname(__dirname) + "/public/Panel/Adminser/issue.html")
        } else if (ROLE == "master") {
            res.sendFile(path.dirname(__dirname) + "/public/Panel/MasterAdmin/issue.html")
        }

    } catch (e) {
        console.log(e)
    }
});


router.get('', (req, res) => {

    res.render('index')

});

router.get('/login', (req, res) => {

    res.render('login')

});


router.post('/addItem', AddItem, async (req, res) => {

    console.log('Hello i am here 2')

});


module.exports = router