const fs = require('fs')
const express = require('express')
const path = require('path')
///router
const Pathrouter = require('./src/router/router.js')
const app = express()

//setting up the port for server dynamically
const PORT = process.env.PORT || 3000

//setting up the statc assets directory like images stylesheets scripts etc
const pubDirPath = path.join(__dirname,'/src/public')
app.use(express.static(pubDirPath))
app.use(express.json())

///setting up the view engine for advanced templating
//app.set('view engine','hbs')
// view engine setup
let d = path.join(__dirname,'views')
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

///includeing the dynamic pages for application
app.use(Pathrouter)

app.listen(PORT,()=>{

    console.log('Application is running at port: ' + PORT)
})