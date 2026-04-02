export class Dinosaur {
    constructor() {
        this.x = 180
        this.y = 100
        this.delta y

        document.addEventListener("keydodwn",this.keydown.bind(this))
    }
    keydown(event) {
        console.log("key pressed",event)
        this.y += 10 
    }



    draw(ctx) {
        ctx.fillstyle = "rgb(255, 145 ,0"
        ctx.beginPath()
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2)
        ctx.fill()
    }
    
}