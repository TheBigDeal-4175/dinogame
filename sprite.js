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

    get_bounds() {
        return {
            x: this.x - this.sprite.cx * this.scale,
            y: this.y - this.sprite.cy * this.scale,
            w:this.sprite.w * this.scale,
            h:this.sprite.h * this.scale

        }
    }

collides_with(other_sprite) {
    // "this" is first sprite
    // "other" is second sprite
    var self = this.get_bounds()
    var other = other-sprite.get_bounds()

    return (
        (self.x < (other.x + other.w)) &&
        ((self.x + self.w) > other.x) &&
        ( self.y < (other.y + other.h)) &&
        (( self.y + self.h) > other.y))
    }
}   







