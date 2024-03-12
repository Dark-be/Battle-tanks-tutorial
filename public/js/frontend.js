const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const socket = io()

const keys = {
  w: false,
  a: false,
  s: false,
  d: false
}
const SPEED = 5
const frontendPlayers = {}
socket.on('updatePlayers', (backendPlayers)=>{
  for(var id in backendPlayers){// 生成新玩家
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
    if(!backendPlayers[id]){// 删除断线玩家
      delete frontendPlayers[id]
    }
    
    if(socket.id!=id && backendPlayers[id]){//更新在线玩家位置

      gsap.to(frontendPlayers[id], {
        x: backendPlayers[id].x,
        y: backendPlayers[id].y,
        angle: backendPlayers[id].angle,
        duration: 0.033,
        ease: 'linear'
      })

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

setInterval(()=>{
  if(frontendPlayers[socket.id]){
    frontendPlayers[socket.id].update(keys)
    socket.emit('updatePlayer', {
      x: frontendPlayers[socket.id].x,
      y: frontendPlayers[socket.id].y,
      angle: frontendPlayers[socket.id].angle
    })
  }
  
}, 1000/60)