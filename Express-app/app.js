const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!!')
})
    .get('/hehe', (req, res) => {
        res.send('ruta hehe')
})

app.listen(3000, () => {
    console.log('serverot raboti na porta 3000')
})