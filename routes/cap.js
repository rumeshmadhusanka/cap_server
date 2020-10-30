const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const serviceAccount = require('../service_acc.json');
const fb = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ornate-node-232512.firebaseio.com"
});

const db = fb.database()
const ref = db.ref('/weather')

//cap get
router.post('/', function(req, res, next) {
    let code ;
    try{
        let data = req.body
        delete data.alert["$"]
        console.log(JSON.stringify(data))
        ref.child(Date.now().toString()).set(data)
        code=200
    }catch (e){
        code=404
    }
    res.status(code).send();
});

module.exports = router;