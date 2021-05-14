const express = require('express')
const router = express.Router()
const {authMiddleware, login, getAuth, logout, newSignup, deleteUser} = require('controller/auth')

router.post('/register', newSignup)
router.post('/login', login)
router.get('/logout', logout)
router.delete('/delete', authMiddleware, deleteUser)

module.exports = router