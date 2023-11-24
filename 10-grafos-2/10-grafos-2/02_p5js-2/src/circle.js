import p from 'p5-sketch'

export default class Circle {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  draw() {
    this.x += 5
    if (this.x > 500) this.x = 0
    p.circle(this.x, this.y, 100)
  }
}
