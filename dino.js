import settings from './settings.js'
import { Dinosaur } from './Dinosaur.js'
import { Cactus } from './Cactus.js'
import { Pterodactyl } from './pterodactyl.js'

const PLAYING = "PLAYING"
const LOST = "LOST"

export default class Game {
    constructor() {
        this.canvas = document.getElementById("game")
        this.ctx = this.canvas.getContext("2d")

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
            "crouching1": { x: 1862, y: 36, w: 118, h: 60, cx: 34, cy: 60 },
            "crouching2": { x: 1980, y: 36, w: 118, h: 60, cx: 34, cy: 60 },
            "walking2": { x: 1602, y: 2, w: 89, h: 94, cx: 38, cy: 94 },
            "bird1": { x: 260, y: 14, w: 93, h: 69, cx: 28, cy: 20 },
            "bird2": { x: 352, y: 2, w: 93, h: 60, cx: 28, cy: 32 },
            "cactus1": { x: 652, y: 2, w: 50, h: 100, cx: 24, cy: 96 },
            "cactus2": { x: 702, y: 2, w: 49, h: 100, cx: 24, cy: 96 },
        }

        this.dinosaur = new Dinosaur(this)

        this.obstacles = []

        // var pterodactyl = new Pterodactyl(this)
        // this.obstacles.push(pterodactyl)

        this.cactus_counter = 0

        this.state = PLAYING
        this.score = 0

    }

    run() {
        console.log("running the game")
        this.frame()
    }
    frame() {
        this.ctx.clearRect(0, 0, 800, 600)
        this.ctx.beginPath()
        this.ctx.moveTo(10, settings.floor_y)
        this.ctx.lineTo(780, settings.floor_y)
        this.ctx.stroke()



        if (this.state == PLAYING) {
            this.score += 1
        }

        // Draw the current score
        this.ctx.font = "30px times"
        this.ctx.fillStyle = "blue";
        var actual_score = Math.round(this.score / 30)
        this.ctx.fillText(`${actual_score}`, 400, 50);

        this.dinosaur.draw(this.ctx)

        for (const obstacle of this.obstacles) {
            obstacle.draw(this.ctx)
        }


        if (this.state == PLAYING) {
            this.dinosaur.animate()
            for (const obstacle of this.obstacles) {
                obstacle.animate(this.ctx)

                if (this.dinosaur.collides_with(obstacle)) {
                   // this.state = LOST
                }
            }

            this.obstacles = this.obstacles.filter(o => o.x > -50)
            this.cactus_counter -= 1
            if (this.cactus_counter <= 0) {
                var cactus = new Cactus(this)
                this.obstacles.push(cactus)
                this.cactus_counter = settings.cactus_rate 
            }

        } else if (this.state == LOST) {
            this.ctx.font = "60px times"
            this.ctx.fillStyle = "blue"
            this.ctx.textAlign = "center"
            this.ctx.textBaseline = "middle"
            this.ctx.fillText("YOU LOST",
                this.canvas.width / 2, this.canvas.height / 2);
        }


        window.requestAnimationFrame(this.frame.bind(this))

    }

 
}