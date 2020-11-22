const { response } = require('express')
const express = require('express')
const router = new express.Router()
const path = require('path')



router.get('',(req,res)=>{

    res.render('index')

})


module.exports = router