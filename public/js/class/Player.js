class Player{
  constructor({x, y, angle, color}){
    this.x = x
    this.y = y
    this.angle = angle
    this.color = color
  }
  update(keys){
    if(keys.w){
      this.x += SPEED * Math.sin(this.angle)
      this.y += SPEED * Math.cos(this.angle)
    }
    if(keys.a){
      this.angle += Math.PI / 180 * 5
      if(this.angle > Math.PI * 2){
        this.angle -= Math.PI * 2
      }
    }
    if(keys.s){
      this.x -= SPEED * Math.sin(this.angle)
      this.y -= SPEED * Math.cos(this.angle)
    }
    if(keys.d){
      this.angle -= Math.PI / 180 * 5
      if(this.angle < 0){
        this.angle += Math.PI * 2
      }
    }
  }

  draw(){
    c.save()
    c.translate(this.x, this.y)
    c.rotate(-this.angle)
    c.translate(-this.x, -this.y)

    c.beginPath()
    c.rect(this.x - 25, this.y - 35, 50, 70)
    c.fillStyle = this.color
    c.fill()

    c.strokeStyle = 'black'
    c.lineWidth = 4
    c.stroke()

    c.beginPath()
    c.arc(this.x, this.y, 15, 0, Math.PI*2)
    c.strokeStyle = 'black'
    c.lineWidth = 4
    c.stroke()

    c.beginPath()
    c.rect(this.x - 7, this.y, 14, 50)
    c.fillStyle = this.color
    c.fill()

    c.strokeStyle = 'black'
    c.lineWidth = 4
    c.stroke()
    c.restore()
  }
}