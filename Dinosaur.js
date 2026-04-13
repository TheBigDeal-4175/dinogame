export class Dinosaur {
    constructor() {
        this.x = 180
        this.y = 100
        this.dy = 0

        this.sprite_sheet = new Image()
        this.sprite_sheet.src = 'dinosaur-sprites.png'

        document.addEventListener("keydown", this.keydown.bind(this))

        // top left 49,416
        // bottom right 169,545
        // sprite width = 169-49 = 129
        // sprite height - 545-416 = 129
        this.sprites = {
            "standing": { x: 49, y: 416, w: 120, h: 129 },
            "walking": { x: 193, y: 416, w: 120, h: 129 },
            "walking2": { x: 337, y: 416, w: 120, h: 129 }

        }
    }
    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()

        if (this.y == 400) {
            this.dy = -3
        }
    }

    draw(ctx) {
        this.scale = 0.3
        var current_sprite = "walking"
        var sprite = this.sprites[current_sprite]
        // Draw Dinosaur sprite
        ctx.drawImage(this.sprite_sheet,
            sprite.x, sprite.y,
            sprite.w, sprite.h,

            // destination cornor - upper left
            this.x - sprite.w * this.scale / 2,
            this.y - sprite.h * this.scale,
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