const { response } = require('express')
const express = require('express')
const router = express.Router()

const Movie = require('../../models/Movie')

router.get('/test', (request, response) => response.send('movie route testing'))

router.get('/', (request, response) => {
    Movie.find()
        .then(movies => response.json(movies))
        .catch(error => response.status(404).json({ error: 'No Movies Found!' }))
})

router.get('/:_id', (request, reponse) => {
    Movie.findById(request.params._id)
        .then(movie => response.json(movie))
        .catch(error => response.status(404).json({ error: 'No Such Movie Found!' }))
})

router.post('/', (request, response) => {
    Movie.create(request.body)
        .then(movie => response.json({ message: 'Movie Added Succesfully' }))
        .catch(error => response.status(400).json({ error: 'Unable to Add Movie!' }))
})

router.put('/:_id', (request, response) => {
    Movie.findByIdAndUpdate(request.params._id, request.body)
        .then(movie => response.json({ message: 'Movie Updated Successfully' }))
        .catch(error => response.status(400).json({ error: 'Unable to Update Movie!' }))
})

router.delete('/:_id', (request, response) => {
    Movie.findByIdAndRemove(request.params, request.body)
        .then(movie => response.json({ message: 'Movie Removed Successfully' }))
        .catch(error => response.status(404).json({ error: 'No Such Movie Found!' }))
})

module.exports = router