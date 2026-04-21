import { Sprite } from './sprite.js'

export class Cactus extends Sprite {
    constructor (game) {
        super(game)
        this.x = 200        // right side of floor level
        this.y = 400
    
        this.set_sprite("cactus1")
    }

    animate() {
        this.x -= 1
    } 
} 

