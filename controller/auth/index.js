const firebaseAdmin = require('lib/firebase')

const setClaims = (res, uid, claims, cookieOptions) => {
    firebaseAdmin.auth().setCustomUserClaims(uid, claims)
    .then((customToken) => {
        res.cookie('token', customToken, cookieOptions)
        res.status(200).json({message: 'Registration successful', status: 200})
    })
    .catch((err) => {
        // console.log(err)
        res.status(500).json({...err})
    })
}

const newSignup = (req, res) => {
    const uid = req.body.token
    const claims = {userType: req.body.claims}
    const cookieOptions = {
        maxAge: Date.now(),
        httpOnly: true,
        secure: true,
    }
    setClaims(res, uid, claims, cookieOptions)
}

const authMiddleware = async (req, res, next) => {
    const cookies = req.cookies
    firebaseAdmin.auth().verifyIdToken(cookies.token, true)
    .then((value) => {
        if (value) {
            console.log(value)
        }
    })
    .catch((err) => {
        if (err) {
            console.log(err)
            res.status(404).json({message: 'No user found'})
        }
    })
}

const delAuth = async (req, res) => {

}

const updateAuth = (req, res) => {

}

const getAuth = (req, res) => {
    // console.log(req)
    res.status(200).json({message: 'good shizz'})
}

const login = async (req, res) => {
    if (req.cookies.token) {
        res.status(400).json({message: 'Already logged in', status: 400})
    }
    try {
        const user = await UserToken.findOne({_id: req.body.email})
        if (user) {
            res.cookie('token', user.token)
            res.status(200).json({message: 'Found user', status: 200, token: user.token})
        }
    } catch (e) {
        res.status(404).json({message: 'No user found', status: 404})
    }
}

const logout = (req, res) => {
    try {
        if (req.cookies.token) {
            res.clearCookie('token')
            res.status(200).json({message: 'Successfully logged out.'})
        } else {
            throw Error()
        }
    } catch (e) {
        res.status(404).json({message: 'No user found.'})
    }
}

module.exports = {newSignup, authMiddleware, delAuth, updateAuth, login, getAuth, logout}