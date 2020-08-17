
const admin = require('firebase-admin');
var serviceAccount = require("../service_key/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://recipes-extension.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
