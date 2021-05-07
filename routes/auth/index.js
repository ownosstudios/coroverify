const express = require('express')
const router = express.Router()
const {authMiddleware, login, getAuth, logout, newSignup} = require('controller/auth')

// router.get('/', getAuth)
router.post('/register', newSignup)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router