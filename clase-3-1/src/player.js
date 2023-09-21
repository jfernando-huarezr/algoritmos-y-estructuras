import {ui} from './ui.js'
import {game} from '../index.js'

export class Player {
    constructor(){
        this.x = 2,
        this.y = 2,
        this.skin = 'P'

        ui.screen.on('keypress', (char,key) => {
            if (key.name == 'left') {
                this.x--
            }
              
            if (key.name == 'right') {
                this.x++
            }

            if (key.name == 'up') {
                this.y--
            }

            if (key.name == 'down') {
                this.y++
            }
        })
    }

    draw() {
        ui.printCharacter(this.x, this.y, this.skin)
    }


}