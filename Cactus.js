import { Sprite } from './sprite.js'

export class Cactus extends Sprite {
    constructor (game) {
        super(game)
        this.x = 200        // right side of floor level
        this.y = 400
    
        this.current_sprite = "cactus1"
    }
    
}       
