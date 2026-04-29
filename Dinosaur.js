import settings from './settings.js'
import { Sprite } from './sprite.js'

const STANDING = "standing"
const WALKING = "walking"
const CROUCHING = "CROUCHING"

export class Dinosaur extends Sprite {
    constructor(game) {
        super(game)

        this.x = 180
        this.y = settings.floor_y
        this.dy = 0
        this.set_state (WALKING)

        document.addEventListener("keydown", this.keydown.bind(this))
        document.addEventListener("keyup", this.keyup.bind(this))
    }
    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()

        if (event.key == "ArrowUp") {
            if (this.y == settings.floor_y) {
                this.dy = -settings.jump_dy
            }
        } else if (event.key == "ArrowDown") {
            this.set_state(CROUCHING)
        }
    }
    
    keyup(event) {
        console.log("key pressed", event)
        event.preventDefault()

        if (event.key == "ArrowDown") {
            this.set_state(WALKING)
        }
    }
    set_state(state) {
        this.state = state
        if (this.state == STANDING) {
            this.current_sprite = "standing"
        } else if (this.state == WALKING) {
            this.current_sprite = "walking1"
            this.walking_counter = 10
        } else if (this.state == CROUCHING) {
            this.current_sprite = "crouching1"
            this.walking_counter = 10
            
        }
    }


    animate(ctx) {
        if (this.state == WALKING) {
            this.walking_counter -= 1
            if (this.walking_counter == 0) {
                this.walking_counter = 10
                if (this.current_sprite == "walking1") {
                    this.current_sprite = "walking2"
                } else {
                    this.current_sprite = "walking1"
                }
            }
        } else if (this.state == CROUCHING) {
            this.walking_counter -= 1
            if (this.walking_counter == 0) {
                this.walking_counter = 10
                if (this.current_sprite == "crouching1") {
                    this.current_sprite = "crouching2"
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