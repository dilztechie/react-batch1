const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    title: { type: String },
    starring: { type: String },
    directors: { type: String },
    genres: { type: String },
    language: { type: String },
    year: { type: Number }
})

module.exports = Movie = mongoose.model('movie', movieSchema)