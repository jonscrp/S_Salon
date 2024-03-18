var express = require("express");

const mongoose = require('mongoose');
var router = express.Router();

const  staff = require( '../../models/appModels/staff.js');


router.get("/", async function(req, res, next){
    await mongoose.connect('mongodb+srv://jonscrp:Kaishot170@nailsalon.zynxwpz.mongodb.net');
    const result = await staff.find();
    //console.log(result[0])
    res.send(result)
});
   


module.exports = router;