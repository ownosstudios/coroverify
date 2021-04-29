require('dotenv').config()
const firebaseAdmin = require('firebase-admin')
const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_CREDS)

firebaseAdmin.initializeApp({
	credential: firebaseAdmin.credential.cert(serviceAccount)
})

module.exports = firebaseAdmin