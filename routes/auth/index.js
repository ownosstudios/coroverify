const express = require('express')
const router = express.Router()
const {authPost, getAuth} = require('controller/auth')

router.get('/:token', getAuth)
router.post('/', authPost)

module.exports = router