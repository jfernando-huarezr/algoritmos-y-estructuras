import {ui} from './ui.js'

export class Player {
    constructor(){
        this.x = 2,
        this.y = 2,
        this.skin = 'P'
    }

    draw() {
        ui.printCharacter(this.x, this.y, this.skin)
    }
}