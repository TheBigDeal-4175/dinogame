export class Dinosaur {
    constructor(game) {
        this.game = game 
        this.x = 180
        this.y = 100
        this.dy = 0

        document.addEventListener("keydown", this.keydown.bind(this))

    }
    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()

        if (this.y == 400) {
            this.dy = -3
        }
    }

    draw(ctx) {
        this.scale = 0.5
        var current_sprite = "walking"
        var sprite = this.game.sprites[current_sprite]
        // Draw Dinosaur sprite
        ctx.drawImage(this.game.sprite_sheet,
            sprite.x, sprite.y,
            sprite.w, sprite.h,

            // destination cornor - upper left
            this.x - sprite.cx* this.scale, 
            this.y - sprite.cy* this.scale,
            // destination scale
            sprite.w * this.scale,
            sprite.h * this.scale
        )

        /*
        ctx.fillstyle = "rgb(255, 145 ,0"
        ctx.beginPath()
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2)
        ctx.fill()
        */

        this.y += this.dy
        this.dy += 0.1
        if (this.y > 400) {
            this.dy = 0
            this.y = 400
        }
    }

}