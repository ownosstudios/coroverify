// dependencies
require('dotenv').config()
const express = require('express')
const app = express()
// const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const swaggerUi = require('swagger-ui-express')
const cors = require('cors')
const firebaseAdmin = require("lib/firebase");
// const mon = require('mongoose')

// routes
const auth = require('routes/auth')

// functional variables
let port = process.env.PORT || 8080
const swaggerSpecs = require('lib/swagger')
const corsConfig = {
	origin: true,
	credentials: true
}


app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsConfig))
app.options('*', cors(corsConfig))

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs))
app.use('/auth', auth)

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})