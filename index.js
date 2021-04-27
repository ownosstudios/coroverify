const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
let port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})