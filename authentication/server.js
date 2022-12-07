const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use('/login', (request, response) => {
    response.send({
        token: 'dilz1226'
    })
})

app.listen(7080, () => console.log('Express API is Up & Running...'))