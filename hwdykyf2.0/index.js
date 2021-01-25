const express = require('express')
const path = require('path')
const mysql = require('mysql')
const app = express()
const router = express.Router()
const dotenv = require('dotenv')
const hbs = require('handlebars')
app.use(router)

dotenv.config({ path: './.env' })

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'hwdykyfc_crabby',
//     password: '5D*A}70Y+?sJ',
//     database: 'hwdykyfc_codes'
// });

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine', 'hbs')

// db.connect((err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('MySQL connected')
//     }
// })

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/auth/quiz', (req, res) => {
    res.render('quiz', {
        creatorName: "Ethan"
    })
})
router.get('/help', (req, res) => {
    res.render('help')
})

app.use('/auth', require('./routes/auth'))

app.listen(8080)