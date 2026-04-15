import { Dinosaur } from './Dinosaur.js'  
import { Cactus} from './Cactus.js'

import { pterodactyl } from './pterodactyl.js'

export default class Game {
    constructor() {
        const canvas = document.getElementById("game")
        this.ctx = canvas.getContext("2d")
        this.Dinosaur = new Dinosaur()
        this.pterodactyl = new pterodactyl()
        this.Cactus = new Cactus()
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
        
        this.Dinosaur.draw(this.ctx)
        this.pterodactyl.draw(this.ctx)
        this.Cactus.draw(this.ctx)
        
        window.requestAnimationFrame(this.frame.bind(this))

    }

}