import { Sprite } from './sprite.js'

export class Pterodactyl extends Sprite {
    constructor(game) {
        super(game)
        this.x = 600
        this.y = 350


        this.current_sprite = "bird1"
        this.set_sprite(this.current_sprite)
        this.flap_counter = 10
    }

    animate() {
        this.flap_counter -= 1
        if (this.flap_counter == 0) {
            this.flap_counter = 10
            if (this.current_sprite == "bird1") {
                this.current_sprite = "bird2"
            } else {
                this.current_sprite = "bird1"
            }
        }

        this.set_sprite(this.current_sprite)

        this.x -= 1
    }

} 