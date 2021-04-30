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

const getAuth = async (req, res, next) => {
    const token = req.cookies
    console.log(token)
    // try {
    //     const user = await UserToken.find({token: token})
    //     res.status(200).json(user)
    //     next()
    // } catch (e) {
    //     res.status(404).json({...e})
    // }
}

const delAuth = async (req, res) => {

}

const updateAuth = (req, res) => {

}

module.exports = {authPost, getAuth, delAuth, updateAuth}