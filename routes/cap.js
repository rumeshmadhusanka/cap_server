const express = require("express");
const router = express.Router();

//cap get
router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;