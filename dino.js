import { Dinosaur } from './Dinosaur.js'  
import { Cactus } from './Cactus.js'
import { Pterodactyl } from './pterodactyl.js'

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
        this.sprites = {
            "standing": { x: 1338, y: 2, w: 88, h: 94, cx: 0, cy: 0 },
            "walking":  { x: 1514, y: 2, w: 88, h: 94, cx: 0, cy: 0 },
            "walking2": { x: 1602, y: 2, w: 88, h: 94, cx: 0, cy: 0 },
            "bird1":    { x: 260, y: 14, w: 93, h: 69, cx: 28, cy: 20 },
            "bird2":    { x: 352, y: 2, w: 93, h: 69, cx: 28, cy: 32 },
            "cactus1":   { x: 652, y: 2, w: 50, h: 100, cx: 24, cy: 96 },
            "cactus2":  { x: 702, y: 2, w: 49, h: 100, cx: 24, cy: 96 },

        }

        this.dinosaur = new Dinosaur(this)
        this.pterodactyl = new Pterodactyl(this)
        this.cactus = new Cactus(this)
    }

    run() {
        console.log("running the game")
        this.frame()
    }
    frame() {
        this.ctx.clearRect(0, 0, 800, 600)
        this.ctx.beginPath()
        this.ctx.moveTo(10,400)
        this.ctx.lineTo(780,400)
        this.ctx.stroke()
        
        this.dinosaur.draw(this.ctx)
        this.pterodactyl.draw(this.ctx)
        this.cactus.draw(this.ctx)
        
        this.Cactus.animate 
        this.Pterodactyl.animate
        window.requestAnimationFrame(this.frame.bind(this))

    }

}