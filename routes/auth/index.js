const express = require('express')
const router = express.Router()
const {authPost, getAuth} = require('controller/auth')

router.get('/', getAuth)
router.post('/', authPost)

module.exports = router