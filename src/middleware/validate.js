const adduser = require('../mod/Adduser.js')
const validator = require('validator')
const db = require('../db/db.js')
const mysql = require('mysql2')



const validate = async (req, res, next) => {
    console.log(req.body)
    try {
        let result = await checkUser(req.body)
        let verify = JSON.stringify(result)
        verify = JSON.parse(verify)

        if (verify.email == true && verify.phone == true) {
            // console.log(verify.data)
            req.user = verify.data
            // console.log('here I am')
            next()
        } else {

            res.sendStatus(400)
        }

    } catch (err) {
        res.sendStatus(400)
        // console.log(err)
    }
}



//// check user details
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


module.exports = validate