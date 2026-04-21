export class Sprite {
    constructor (game) {
        this.game = game
        this.x = 400        // right side of floor level
        this.y = 400
        this.scale = 0.5

        this.set_sprite("bird1")
    }

    set_sprite(sprite_name) {
        this.sprite = this.game.sprites[sprite_name]
    }

    draw(ctx) {
        ctx.drawImage(this.game.sprite_sheet,
            this.sprite.x, this.sprite.y,
            this.sprite.w, this.sprite.h,

            // destination cornor - upper left
            this.x - this.sprite.cx * this.scale,
            this.y - this.sprite.cy * this.scale,
            // destination scale
            this.sprite.w * this.scale,
            this.sprite.h * this.scale
        )

    } 

      get_bounds() {

        
      }
}   

