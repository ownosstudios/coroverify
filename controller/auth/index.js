const firebaseAdmin = require('lib/firebase')

const authPost = (req, res) => {
    const uid = req.body.token
    const claims = {...req.body.claims}
    firebaseAdmin.auth().createCustomToken(uid, claims)
    .then((customToken) => {
        res.status(200).json({token: customToken})
        res.cookie('token', customToken)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
}

const getAuth = (req, res) => {
    const token = req.params.token
}

module.exports = {authPost, getAuth}