const express = require('express')
const authController = require('../controllers/data');

console.log('File loaded: AUTH')

const router = express.Router()

router.get('/', authController.quiz )

module.exports = router;