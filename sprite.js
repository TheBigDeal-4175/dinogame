export class Sprite {
    constructor (game) {
        this.game = game
        this.x = 400        // right side of floor level
        this.y = 400
        this.scale = 0.5
    }
    draw(ctx) {
 
        var sprite = this.game.sprites[this.current_sprite]
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

    } 

}   

