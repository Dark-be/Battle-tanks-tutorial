const express = require('express')
const http = require('http')
const { emit } = require('process')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server, {pingInterval: 2000, pingTimeout: 5000})

const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/coopmicro.html')
})

const backendPlayers = {}

io.on('connection', (socket)=>{
  console.log(`A user connected: ${socket.id}`)
  if(!backendPlayers[socket.id]){
    backendPlayers[socket.id] = {
      x: 600 * Math.random(),
      y: 600 * Math.random(),
      angle: 0,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    }
  }
  console.log(backendPlayers)
  
  socket.on('disconnect', (reason)=>{
    console.log(`A user disconnected: ${socket.id}`)
    console.log(reason)
    delete backendPlayers[socket.id]
  })
})

setInterval(() => {
  io.emit('updatePlayers', backendPlayers)
}, 50)

server.listen(port, () => {
  console.log(`App listening on port ${port}`)
})