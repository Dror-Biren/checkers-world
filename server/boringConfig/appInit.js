
require("dotenv").config({})
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000

app.use(express.static('../client'))

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

module.exports = io