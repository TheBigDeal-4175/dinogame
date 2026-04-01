export default class Game {
    constructor() {
        const canvas = document.getElementById("game")
        this.ctx = canvas.getContext("2d")

    }

    run() {
        console.log("running the game")
      //  this.frame()
    }
    frame() {
        this.ctx.clearRect(0, 0, 800, 600)

        window.requestAnimationFrame(this.frame.bind(this))
    }
}
    