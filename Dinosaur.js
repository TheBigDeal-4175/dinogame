import settings from './settings.js'
import { Sprite } from './sprite.js'

const STANDING = "standing"
const WALKING = "walking"
const CROUCHING = "CROUCHING"

export class Dinosaur extends Sprite {
    constructor(game) {
        super(game)

        this.current_sprite = "walking1"
        this.set_sprite(this.current_sprite)
        this.flap_counter = 10

        this.x = 180
        this.y = settings.floor_y
        this.dy = 0

        document.addEventListener("keydown", this.keydown.bind(this))

    }
    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()

        if (this.y == settings.floor_y) {
            this.dy = -settings.jump_dy
        }
    }
    set_state(state) {
        this.state = state
        if (this.state == STANDING) {
            this.current_sprite = "standing"
        } else if (this.state == WALKING) {
            this.current_sprite = "walking1"
            this.walking_counter = 10
        }
    }


    animate(ctx) {
        if (this.state == WALKING) {
            this.flap_counter -= 1
            if (this.flap_counter == 0) {
                this.flap_counter = 10
                if (this.current_sprite == "walking1") {
                    this.current_sprite = "walking2"
                } else {
                    this.current_sprite = "walking1"
                }
            }
        } else if (this.state == CROUCHING) {
            this.flap_counter -= 1
            if (this.flap_counter == 0) {
                this.flap_counter = 10
                if (this.current_sprite == "crouching1") {
                    this.current_sprite = "crouchong2"
                } else {
                    this.current_sprite = "crouching1"
                }
            }
        }
        this.set_sprite(this.current_sprite)

        this.y += this.dy
        this.dy += settings.gravity_dy
        if (this.y > settings.floor_y) {
            this.dy = 0
            this.y = settings.floor_y
        }
    }
}