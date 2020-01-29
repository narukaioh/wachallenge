import express from 'express'

const server = express()

server.post('/', (req, res) => {
    res.send("Hello World")
})

server.listen(8080)