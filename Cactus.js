import { Sprite } from './sprite.js'
import settings from './settings.js'
export class Cactus extends Sprite {
    constructor (game) {
        super(game)
        this.x = game.canvas.width + 50       // right side of floor level
        this.y = settings.floor_y
    
        this.set_sprite("cactus1")
    }

    animate() {
        this.x -= settings.cactus_speed
    } 
} 

