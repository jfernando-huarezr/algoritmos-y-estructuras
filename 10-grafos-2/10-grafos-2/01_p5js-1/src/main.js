import p from 'p5-sketch'

/* COMANDOS QUE USAREMOS EN CLASE

  p.circle(x, y, size): dibuja un círculo
  p.square(x, y, size): dibuja un cuadrado
  p.rectMode(modo): cambia el modo ce dentrado de cuadrados y rectángulos
  p.line(x1, y1, x2, y2): dibuja una línea
  p.push()/p.pop(): protegen los estilos
  p.fill(color): cambia el color de relleno
  p.stroke(color): cambia el color de la línea
  p.strokeWeight(size): cambia el grosor de la línea
  p.text(texto, x, y): dibuja un texto
  p.textAlign(horizontal, vertical)
  p.textSize(size): cambia el tamaño del texto
*/

p.setup = () => {
  // se crea un canvas de 500*500
  p.createCanvas(500, 500)
  // se pinta el fondo de rojo
  p.background('gray')

  // dibujamos el circulo 1
  p.push()
  p.stroke('brown')
  p.strokeWeight(10)
  p.fill('yellow')
  p.circle(100, 100, 50)
  p.pop()
  
  // dibujamos el circulo 2
  p.push()
  p.fill('blue')
  p.circle(300, 400, 100)
  p.pop()
  
  // dibujamos una línea
  p.line(100, 100, 300, 400)
  
  // dibujamos un cuadrado
  p.push()
  p.fill('green')
  p.rectMode(p.CENTER)
  p.square(250, 250, 50)
  p.pop()

  // escribimos un texto
  p.circle(300, 100, 5)
  p.textSize(40)
  p.textAlign(p.CENTER, p.CENTER)
  p.text('hola', 300, 100)
}

p.draw = () => {
  p.background('yellow')
  p.circle(p.mouseX, p.mouseY, 30)
}
