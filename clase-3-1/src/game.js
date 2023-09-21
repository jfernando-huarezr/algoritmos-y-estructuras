import {Item} from './item.js'
import {Map} from './map.js'
import {Player} from './player.js'

export class Game {
  constructor() {
    this.map = new Map()
    this.player = new Player()
    this.item = new Item()

    setInterval(() => {
        this.draw()
    },33)
  }

  draw() {
    this.map.draw()
    this.player.draw()
    this.item.draw()
  }
}