const express = require('express')
const router = express.Router()


app.get('/', (req, res) => {
    res.send('show all the posts here')
})

app.get('/:id', (req, res) => {
    res.send(`Show the post with id: ${req.params.id}`)
})

app.post('/', (req, res) => {
    res.send('Store a new post here')
})

app.put('/:id', (req, res) => {
    res.send(`Update the post with id: ${req.params.id}`)
})

app.patch('/:id', (req, res) => {
    res.send(`modify the post with id: ${req.params.id}`)
})

app.delete('/:id', (req, res) => {
    res.send(`Delete the post with id: ${req.params.is}`)
})

module.export = router