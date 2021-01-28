const { request } = require('express')
const express = require('express')
const mysql = require('mysql')
// const app = express()
// const router = express.Router()
// app.use('/', require('../routes/pages'))
console.log('File loaded: DATA')

const router = express.Router()

router.get('/', (req, res) => {
    res.send(exportHome())
} )

const db = mysql.createConnection({
    host: 'localhost',
    user: 'hwdykyfc_crabby',
    password: 'KN8Tnl*EaKzd',
    database: 'hwdykyfc_codes'
})
function exportHome() {
    exports.home = (req, res) => {
        const code = req.body.code;
        console.log(req.body)
        
        db.query("SELECT code FROM gameCodes WHERE code = ?", [code], (error, results) => {
            if (error) {
                console.log(error)
            }
            if (results.length > 0) {
                console.log('Could not complete request')
            } else if (results.length < 0) {
                console.log('Request completed')
            }
        })
    }
}
