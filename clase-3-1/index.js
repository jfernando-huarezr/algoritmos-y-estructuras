import * as demos from './src/demos.js'
import {UI} from 'ui-game-console'

//demos.acceso()
//demos.recorrido()
//demos.indexing2to1()
//demos.indexing1to2()

let ui = new UI(8,8)

ui.printCharacter(4,4, 'P')

let map = [
    [1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1]
]

for (let row = 0; row<map.length; row++) {
    for (let col = 0; col<map[row].length; col++) {
        if (map[row][col] === 0) {
            ui.printCharacter(col,row, ' ')
        }

        if (map[row][col] === 1) {
            ui.printCharacter(col,row, '#')
        }
        
    }
}

let player = {
    x: 2,
    y: 2,
    skin: 'P'
}
/* let playerX = 2,
    playerY = 2,
    playerSkin = 'P' */

ui.printCharacter(player.x, player.y, player.skin)

let item = {
    x: 6,
    y: 6,
    skin: 'I'
}

ui.printCharacter(item.x, item.y, item.skin)
