import Circle from './circle.js'
import p from 'p5-sketch'

let circle1 = new Circle(0, 100)
let circle2 = new Circle(0, 250)

p.setup = () => {
  p.createCanvas(500, 500)
}

p.draw = () => {
  p.background('yellow')
  circle1.draw()
  circle2.draw()
}
