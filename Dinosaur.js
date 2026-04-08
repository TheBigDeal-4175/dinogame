export class Dinosaur {
    constructor() {
        this.x = 180
        this.y = 100
        this.dy = 0

        this.sprite_sheet = new Image()
        this.sprite_sheet.src = 'dinosaur-sprites.png'
        
        document.addEventListener("keydown",this.keydown.bind(this))

        // top left 49,416
        // bottom right 169,545
        // sprite width = 169-49 = 129
        // sprite height - 545-416 = 129
        this.sprite = {x: 49, y: 416, w: 120, h: 129}
    
    }
    keydown(event) {
        console.log("key pressed",event)
        this.dy += -15 
    }

    draw(ctx) {
        // Draw Dinosaur sprite
        ctx.drawImage(this.sprite_sheet,
            this.sprite.x, this.sprite.y,
            this.sprite.w, this.sprite.h,
            this.x,this.y,
            this.sprite.w, this.sprite.h,
        )

        
        ctx.fillstyle = "rgb(255, 145 ,0"
        ctx.beginPath()
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2)
        ctx.fill()
        

        this.y += this.dy
        this.dy += 1
        if (this.y > 400) { 
         this.dy = 0
         this.y = 400
        }
    }
    
}