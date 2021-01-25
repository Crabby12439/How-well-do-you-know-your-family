const { request } = require('express')
const express = require('express')
const path = require('path')
const mysql = require('mysql')
const app = express()
const router = express.Router()
app.use('/', require('../routes/pages'))
console.log('File loaded: DATA')
app.use(router)

const db = mysql.createConnection({
    host: 'localhost',
    user: 'hwdykyfc_crabby',
    password: 'KN8Tnl*EaKzd',
    database: 'hwdykyfc_codes'
})

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine', 'hbs')

db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('MySQL connected')
    }
})

exports.quiz = (req, res) => {
    const code = req.body.code;
    console.log(req.body)
    
    db.query("SELECT code FROM gameCodes WHERE code = ?", [code], (error, results) => {
        if (error) {
            console.log(error)
        }
        if (results.length > 0) {
            console.log('Could not complete request')
            return res.render('home', {
                error: "That quiz doesn't exist"
            })
        } else if (results.length < 0) {
            console.log('Request completed')
            return res.render('quiz', {
                complete: "Quiz has been loaded"
            })
        }
    })
}

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/help', (req, res) => {
    res.render('help')
})
router.get('/quiz', (req, res) => {
    res.render('quiz')
})