const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const router = new express.Router()


let AddItem = async(req,res,next)=>{
let ItemId = await GenerateId(req.body.ITEM_NAME)



};


let GenerateId = async function(name){
  return name.substr(0,4) + Math.random().toString(36).substr(8, 9);
}




module.exports= AddItem