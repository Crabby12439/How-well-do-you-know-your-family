const { request } = require('express')
const express = require('express')
const path = require('path')
const mysql = require('mysql')
const app = express()
const router = express.Router()
const dotenv = require('dotenv')
const hbs = require('handlebars')

dotenv.config({ path: './.env' })

const db = mysql.createConnection({
    host: 'localhost',
    user: 'hwdykyfc_crabby',
    password: 'KN8Tnl*EaKzd',
    database: 'hwdykyfc_codes',
    multipleStatements: true
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs')

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/home', (req, res) => {
    res.render('home')
})
// router.get('/auth/quiz', (req, res) => {
//     res.render('quiz', {
//         creatorName: "Ethan"
//     })
// })
router.get('/help', (req, res) => {
    res.render('help')
})
router.get('/create', (req, res) => {
    res.render('create')
})
router.post('/index/createYourQuiz', (req, res) => {
    console.log('Recived Request from POST')
    db.connect((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('MySQL connected')
        }
    })
    const name = req.body.name;
    const isCOPPACompYES = req.body.ageYes;
    const isCOPPACompNO = req.body.ageNo;
    console.log("NAME: " + name);
})
router.get('/index/join', (req, res) => {
    console.log('GET point reached')
    db.connect((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('MySQL connected')
        }
    })
    const code = req.query.code
    console.log(code)
    db.query("SELECT code FROM gameCodes", (error, results) => {
        if (error) {
            console.log(error)
        }
        if (results.length > 0) {
            console.log('Could not complete request')
            res.render('quiz')
        } else if (results.length < 0) {
            console.log('Request completed')
            res.render('quiz')
        }
    })
})

app.listen(8080)