const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const socket = io()

const frontendPlayers = {}

socket.on('updatePlayers', (backendPlayers)=>{
  for(var id in backendPlayers){
    if(!frontendPlayers[id]){
      frontendPlayers[id] = new Player({
        x: backendPlayers[id].x,
        y: backendPlayers[id].y,
        angle: backendPlayers[id].angle,
        color: backendPlayers[id].color
      })
    }
  }
  for(var id in frontendPlayers){
    if(!backendPlayers[id]){
      delete frontendPlayers[id]
    }
  }
})

img = new Image()
img.src = 'image/background.png'
function animate(){
  requestAnimationFrame(animate)
  c.fillStyle = 'rgba(32, 32, 32, 1)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  c.drawImage(img,0,0)
  for(var id in frontendPlayers){
    const player = frontendPlayers[id]
    player.draw()
  }
}
animate()
