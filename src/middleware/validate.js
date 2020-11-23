
const adduser = require('../mod/addUser.js')
const validator = require('validator')
const db = require('../db/db.js')
const mysql = require('mysql2')
const { commit } = require('../db/db.js')



const checkUser = (data) => {
    let errors = {}
    return new Promise((resolve, reject) => {
        if (data.hasOwnProperty('name') && data.hasOwnProperty('email') && data.hasOwnProperty('phone') && data.hasOwnProperty('password') && data.hasOwnProperty('id')) {
            try {
                errors.email = validator.isEmail(data.email);
                errors.phone = validator.isMobilePhone(data.phone);
            } catch (err) {

                return reject("Email Password not Valid")
            }

       
           

errors.data = data
            return resolve(errors)
         
        } else {
            return reject('Attributes Missing')
        }

    })

}


const validate = async (req, res, next) => {

    try {
        let result = await checkUser(req.body)
        let verify = JSON.stringify(result)
        verify = JSON.parse(verify)
      
        if (verify.email == true && verify.phone == true) {
            req.user=verify.data
            next()

        } else {

            res.sendStatus(400)
        }

    } catch (err) {
        res.sendStatus(400)
    }
}





module.exports = validate