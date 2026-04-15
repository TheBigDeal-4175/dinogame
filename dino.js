import { Dinosaur } from './Dinosaur.js'  
import { Cactus} from './Cactus.js'


export default class Game {
    constructor() {
        const canvas = document.getElementById("game")
        this.ctx = canvas.getContext("2d")
        this.Dinosaur = new Dinosaur()
        this.Cactus = new Cactus()
    }

    run() {
        console.log("running the game")
        this.frame()
    }
    frame() {
        this.ctx.clearRect(0, 0, 800, 600)
        this.Dinosaur.draw(this.ctx)
        window.requestAnimationFrame(this.frame.bind(this))

        this.ctx.beginPath()
        this.ctx.moveTo(10,400)
        this.ctx.lineTo(780,400)
        this.ctx.stroke()
    }

}
    