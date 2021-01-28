const express = require('express')
const authController = require('../controllers/data');

console.log('File loaded: AUTH')

const router = express.Router()

router.post('/', authController.quiz )

module.exports = router;