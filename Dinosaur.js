import { Sprite } from './sprite.js'
export class Dinosaur extends Sprite {
    constructor(game) {
    super(game)        
    
    this.set_sprite("standing")
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

    animate(ctx) {
      
        this.y += this.dy
        this.dy += 0.1
        if (this.y > 400) {
            this.dy = 0
            this.y = 400
        }
    }
}