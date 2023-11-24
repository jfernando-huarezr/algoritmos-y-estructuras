import Graph from './graph-edge-list.js'
import p from 'p5-sketch'

let graph = new Graph()
graph.addNode({ value: '0', x: 100, y: 100 })
graph.addNode({ value: '1', x: 400, y: 100 })
graph.addNode({ value: '2', x: 400, y: 400 })
graph.addNode({ value: '3', x: 100, y: 400 })
graph.addNode({ value: '4', x: 250, y: 250 })

graph.addConnection(0, 1, 3)
graph.addConnection(1, 2, 5)
graph.addConnection(2, 3, 10)
graph.addConnection(4, 2, 5)
graph.addConnection(4, 3, 11)

p.setup = () => {
  p.createCanvas(500, 500)
  p.textAlign(p.CENTER, p.CENTER)
  p.textSize(20)
}

p.draw = () => {
  p.background('gray')

  // se dibuja las aristas
  for (let i = 0; i < graph.nodes.length; i++) {
    for (let j = i + 1; j < graph.nodes.length; j++) {
      if (graph.isConnected(i, j)) {
        let nodeI = graph.nodes[i]
        let nodeJ = graph.nodes[j]

        // se dibuja la conexión
        p.push()
        p.strokeWeight(3)
        p.line(nodeI.x, nodeI.y, nodeJ.x, nodeJ.y)
        p.pop()

        // se escribe el peso
        let weightX = (nodeI.x + nodeJ.x) / 2
        let weightY = (nodeI.y + nodeJ.y) / 2
        p.push()
        p.strokeWeight(3)
        p.fill('yellow')
        p.circle(weightX, weightY, 30)
        p.textSize(15)
        p.fill('black')
        p.text(graph.getWeight(i, j), weightX, weightY)
        p.pop()
      }
    }
  }

  // se dibuja los nodos
  for (let node of graph.nodes) {
    p.push()
    p.strokeWeight(3)
    p.circle(node.x, node.y, 50)
    p.text(node.value, node.x, node.y)
    p.pop()
  }
}
