const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()

const movies = require('./routes/api/movies')

connectDB()
app.use(cors({ origin: true, credentials: true }))

app.use(express.json({ extended: false }))

app.get('/', (request, response) => response.send('MERN Stack App'))

app.use('/api/movies', movies)

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`Server up & running on port ${port}`))