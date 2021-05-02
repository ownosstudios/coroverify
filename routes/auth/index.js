const express = require('express')
const router = express.Router()
const {authPost, authMiddleware, login, getAuth, logout} = require('controller/auth')

// router.get('/', getAuth)
router.post('/register', authPost)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router