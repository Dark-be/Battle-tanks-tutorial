class Player{
    constructor({x, y, angle, color}){
        this.x = x
        this.y = y
        this.angle = angle
        this.color = color
    }
    draw(){
        c.beginPath()
        c.rect(this.x-25,this.y-35,50,70)
        c.fillStyle = this.color
        c.fill()

        c.strokeStyle = 'black'
        c.lineWidth = 4
        c.stroke()

        c.beginPath()
        c.arc(this.x, this.y, 15, 0, Math.PI * 2)
        c.strokeStyle='black'
        c.lineWidth = 4
        c.stroke()

        c.beginPath()
        c.rect(this.x-7,this.y,14,50)
        c.fillStyle = this.color
        c.fill()

        c.strokeStyle = 'black'
        c.lineWidth = 4
        c.stroke()
    }
}