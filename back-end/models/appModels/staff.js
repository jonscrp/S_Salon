const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    speciality: String,
    email: String,
    schedule: [{
        available:Boolean,
        day: String,
        time: {
            start: String,
            end: String,
        }       
    }]
});

module.exports = mongoose.model("Staff", staffSchema);