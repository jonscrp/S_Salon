var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.json(JSON.parse('{"test":"test"}'));
});

module.exports = router;