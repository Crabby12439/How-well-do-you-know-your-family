const express = require('express')
const app = express()
const pageRouter = express.Router()
app.use(pageRouter)
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/auth/quiz', (req, res) => {
    res.render('quiz')
})
router.get('/quiz', (req, res) => {
    res.render('quiz')
})
router.get('/help', (req, res) => {
    res.render('signUp')
})

module.exports = router;