const mongoose = require('mongoose')

const UserTokenSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    token: {
        type: mongoose.Schema.Types.String,
        required: true
    },
})

const UserToken = mongoose.model('UserToken', UserTokenSchema)

module.exports = UserToken