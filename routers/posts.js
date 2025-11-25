const express = require('express')
const router = express.Router()


app.get('/', (req, res) => {
    res.send('show all the posts here')
})

app.get('/:id', (req, res) => {
    res.send(`Show the post with id: ${req.params.id}`)
})

module.export = router