const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


function animate(){
  requestAnimationFrame(animate)
  c.fillStyle = 'rgba(32, 32, 32, 1)'
  c.fillRect(0, 0, canvas.width, canvas.height)

}
animate()
