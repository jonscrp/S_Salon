const mongoose = require('mongoose');

const galleryImagesSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    alt: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Gallery", galleryImagesSchema)