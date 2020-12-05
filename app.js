const fs = require('fs')
const login = require('./src/mod/addUser.js')
const approveUser = require('./src/mod/approveUser.js')
const express = require('express')
const path = require('path')
const mainLanding = require('./src/router/mainLanding.js')
const loginSignup = require('./src/router/loginSignup.js')
const app = express()

//setting up the port for server dynamically
const PORT = process.env.PORT || 3000

//setting up the statc assets directory like images stylesheets scripts etc
const pubDirPath = path.join(__dirname,'/src/public')
app.use(express.static(pubDirPath))
app.use(express.json())

///setting up the view engine for advanced templating
app.set('view engine','hbs')

///includeing the dynamic pages for application
app.use(mainLanding)
app.use(loginSignup)
app.use(login)
app.use(approveUser)

app.listen(PORT,()=>{

    console.log('Application is running at port' + PORT)
})