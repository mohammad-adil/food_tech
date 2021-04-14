const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const router = new express.Router()


let AddItem = async(req,res,next)=>{
let ItemId = await GenerateId(req.body.ITEM_NAME)
console.log(ItemId)
let results = await saveItem(req.body, ItemId)

};


// Generate Ids for the items that has to be created on the go..
let GenerateId = async function(name){
  return name.substr(0,4) + Math.random().toString(36).substr(8, 9);
}

//. Saving Item to database with the detail
let  saveItem = async function(Item,Itemid){
let sql = "INSERT INTO assets (ITEM_NAME, TOTAL_QUANTITY, SUPPLIED_BY, ENTRY_BY, DEPARTMENT, LAB_ID, CATEGORY, ITEM_TYPE, UNIT_PRICE, ITEM_ID, SOURCE, AVL_QUANTITY) VALUES('"+ Item.ITEM_NAME +"','"+ Item.TOTAL_QUANTITY +"', '"+ Item.SUPPLIED_BY +"', '"+ Item.ENTRY_BY +"', '"+ Item.DEPARTMENT +"', '"+ Item.LAB_ID +"', '"+ Item.CATEGORY +"', '"+ Item.ITEM_TYPE +"', '"+ Item.UNIT_PRICE +"', '"+ Itemid +"','"+ Item.SOURCE +"','"+ Item.TOTAL_QUANTITY +"')"

//inserting Items to Database
   db.query(sql, function (err, result) {console.log(result); console.log(err)});

}






module.exports= AddItem