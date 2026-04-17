export class Pterodactyl {
    constructor( game ) {
        this.x =600
        this.y =200
        this.game = game 
    } 
    draw(ctx) {
        
        this.scale = 0.5
        var current_sprite = "bird1"
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
    }
} 