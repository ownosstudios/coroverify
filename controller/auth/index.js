const firebaseAdmin = require('lib/firebase')

const UserToken = require('models/newUserToken')

const authPost = (req, res) => {
    const uid = req.body.token
    const claims = {...req.body.claims}
    const cookieOptions = {
        maxAge: Date.now(),
        httpOnly: true,
        secure: true,
    }
    firebaseAdmin.auth().createCustomToken(uid, claims)
    .then(async (customToken) => {
        const newUser = new UserToken({token: customToken, _id: req.body.email})
        try {
            await newUser.save()
            res.cookie('token', customToken, cookieOptions)
            res.status(200).json({token: customToken})
        } catch (e) {
            console.log(e)
            res.status(500).json({...e})
        }
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({...err})
    })
}

const authMiddleware = async (req, res, next) => {
    const cookies = req.cookies
    try {
        const user = await UserToken.findOne({token: cookies.token})
        // res.status(200).json(user)
        if (user) {
            next()
        } else {
            throw Error()
        }
    } catch (e) {
        res.status(404).json({message: 'No user found'})
    }
}

const delAuth = async (req, res) => {

}

const updateAuth = (req, res) => {

}

const getAuth = (req, res) => {
    console.log(req)
    res.status(200).json({message: 'good shizz'})
}

const login = async (req, res) => {
    try {
        const user = await UserToken.findOne({_id: req.body.email})
        if (user) {
            res.status(200).json({message: 'Found user', ...user})
        }
    } catch (e) {
        res.status(404).json({message: 'No user found', status: 404})
    }
}

const logout = async (req, res) => {
    try {
        if (req.cookies.token) {
            await res.clearCookie('token')
            res.status(200).json({message: 'Successfully logged out.'})
        } else {
            throw Error()
        }
    } catch (e) {
        res.status(500).json({message: 'No user found.'})
    }
}

module.exports = {authPost, authMiddleware, delAuth, updateAuth, login, getAuth, logout}