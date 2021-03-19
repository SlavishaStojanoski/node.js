const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(req.header('host'))
})
    .get('/about', (req, res) => {
        res.send(req.header('accept'))
})
    .get('/profil', (req, res) => {
        res.send(req.header('user-agent'))
})
    .post('/post', (req, res) => {
        res.send('this is POST method')
})
    .put('/put', (req, res) => {
        res.send('this is PUT method')
})
    .patch('/patch', (req, res) => {
    res.send('this is PATCH method')
})

app.listen(port, () => {
    console.log('server work on port 3000')
})