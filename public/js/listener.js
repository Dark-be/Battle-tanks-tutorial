window.addEventListener('keydown', (event)=>{
  if(event.code === 'KeyW'){
    keys.w = true
  }
  if(event.code === 'KeyA'){
    keys.a = true
  }
  if(event.code === 'KeyS'){
    keys.s = true
  }
  if(event.code === 'KeyD'){
    keys.d = true
  }
})

window.addEventListener('keyup', (event)=>{
  if(event.code === 'KeyW'){
      keys.w = false
  }
  if(event.code === 'KeyA'){
      keys.a = false
  }
  if(event.code === 'KeyS'){
      keys.s = false
  }
  if(event.code === 'KeyD'){
      keys.d = false
  }
})

window.addEventListener('click', (event)=>{
  socket.emit('shoot',{
    x: frontendPlayers[socket.id].x,
    y: frontendPlayers[socket.id].y,
    angle: frontendPlayers[socket.id].angle
  })
  console.log('shoot')
})