var express = require("express");
var router = express.Router();

const  staff = require( '../../models/appModels/staff.js');

router.get("/", function(req, res, next){
    let  Staff  = staff.find();

    console.log(Staff);

    res.json(JSON.parse());
});

module.exports = router;