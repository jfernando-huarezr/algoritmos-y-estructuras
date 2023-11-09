export default class Graph {
    constructor() {
      // lista de nodos
      this.nodes = []
      // lista de aristas
      this.edges = []
    }
  
    addNode(value) {
      // agrega el 
      this.nodes.push(value)
    }
  
    addConnection(i, j) {
      this.edges.push({ start: i, end: j })
    }
  
    isConnected(i, j) {
      for (let edge of this.edges) {
        if (edge.start === i && edge.end === j) return true
        else if (edge.start === j && edge.end === i) return true
      }
      return false
    }
  
    getNeighbors(index) {
      let neighbors = []
      for (let edge of this.edges) {
        if (edge.start === index) neighbors.push(edge.end)
        else if (edge.end === index) neighbors.push(edge.start)
      }
      return neighbors
    }
  
    print() {
      console.log('nodos:')
      this.nodes.forEach((node, i) => {
        console.log(i + ': ' + node)
      })
      console.log('conexiones:')
      for (let i = 0; i < this.nodes.length; i++) {
        for (let j = i + 1; j < this.nodes.length; j++) {
          if (this.isConnected(i, j)) {
            console.log(i + ' --- ' + j)
          }
        }
      }
    }
  }
  