require('dotenv').config()
const mongoose = require('mongoose')
let url = 'mongodb://localhost:27017/coroverify' || process.env.MONGODB_URL

const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(url, mongooseOptions, (error, client) => {
    if (error) {
        return console.log('Unable to connect through mongoose: ', error)
    }
    console.log('Connected to mongoose')
})

module.exports = mongoose