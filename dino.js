import { Dinosaur } from './Dinosaur.js'
import { Cactus } from './Cactus.js'
import { Pterodactyl } from './pterodactyl.js'

const PLAYING = "PLAYING"
const LOST = "LOST"

export default class Game {
    constructor() {
        const canvas = document.getElementById("game")
        this.ctx = canvas.getContext("2d")

        this.sprite_sheet = new Image()
        this.sprite_sheet.src = 'dinosprites.png'

        // top left 49,416
        // bottom right 169,545
        // sprite width = 169-49 = 129
        // sprite height - 545-416 = 129
        this.sprite_sheet = new Image()
        this.sprite_sheet.src = "dinosprites.png"
        this.sprites = {
            "standing": { x: 1338, y: 2, w: 89, h: 94, cx: 38, cy: 94 },
            "walking1": { x: 1514, y: 2, w: 89, h: 94, cx: 38, cy: 94 },
            "walking2": { x: 1602, y: 2, w: 89, h: 94, cx: 38, cy: 94 },
            "bird1": { x: 260, y: 14, w: 93, h: 69, cx: 28, cy: 20 },
            "bird2": { x: 352, y: 2, w: 93, h: 60, cx: 28, cy: 32 },
            "cactus1": { x: 652, y: 2, w: 50, h: 100, cx: 24, cy: 96 },
            "cactus2": { x: 702, y: 2, w: 49, h: 100, cx: 24, cy: 96 },
        }

        this.dinosaur = new Dinosaur(this)
        this.pterodactyl = new Pterodactyl(this)
        this.cactus = new Cactus(this)

        this.state = PLAYING
    }

    run() {
        console.log("running the game")
        this.frame()
    }
    frame() {
        this.ctx.clearRect(0, 0, 800, 600)
        this.ctx.beginPath()
        this.ctx.moveTo(10, 400)
        this.ctx.lineTo(780, 400)
        this.ctx.stroke()

        this.dinosaur.draw(this.ctx)
        this.pterodactyl.draw(this.ctx)
        this.cactus.draw(this.ctx)

        if (this.state == PLAYING) {
            this.cactus.animate()
            this.pterodactyl.animate()
            this.dinosaur.animate()
        } else if (this.state == LOST) {
            this.ctx
            this.ctx.font = "60px times" 
            this.ctx.fillStyle = "blue"
            this.ctx.textAlign = "center"
            this.ctx.textBaseline = "middle"
            this.ctx.fillText("YOU LOST",
             this.canvas.width/2, this.canvas.height/2);
        }

        if (this.dinosaur.collides_with(this.pterodactyl)) {
            this.state + LOST
        }

        window.requestAnimationFrame(this.frame.bind(this))
    }


}