// import Graph from './src/graph-edge-list.js'
// import Graph from './src/graph-adjacency-list.js'
import Graph from './src/graph-adjacency-matrix.js'

let graph = new Graph()

graph.addNode('A') // 0
graph.addNode('B') // 1
graph.addNode('C') // 2
graph.addNode('D') // 3
graph.addNode('E') // 4
graph.addConnection(0, 1, 2)
graph.addConnection(1, 3, 3)
graph.addConnection(3, 2, 5)
graph.addConnection(2, 4, 3)
graph.addConnection(4, 0, 1)
graph.addConnection(1, 2, 1)

graph.print()
// console.log(graph.isConnected(1, 4))
console.log(graph.getNeighbors(1))