import * as demos from './src/demos.js'
import {UI} from 'ui-game-console'
import {ui} from './src/ui.js'
import {Player} from './src/player.js'
import {Map} from './src/map.js'
import {Item} from './src/item.js'

//demos.acceso()
//demos.recorrido()
//demos.indexing2to1()
//demos.indexing1to2()


let map = new Map()
map.draw()

let player = new Player()
player.draw()

let item = new Item()
item.draw()