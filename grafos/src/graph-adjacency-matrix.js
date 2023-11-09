export default class Graph {
    constructor() {
      // lista de nodos
      this.nodes = []
      // matriz de adyacencia
      this.matrix = []
    }
  
    addNode(value) {
      // agregar el nodo a la lista de nodos
      this.nodes.push(value)
  
      // se le agrega una nueva columna a todas las filas de la matriz
      for (let row of this.matrix) row.push(0)
  
      // se le agrega una fila llena de ceros al final
      let newRow = new Array(this.nodes.length).fill(0)
      this.matrix.push(newRow)
    }
  
    addConnection(i, j) {
      this.matrix[i][j] = 1
      this.matrix[j][i] = 1
    }
  
    isConnected(i, j) {
      return this.matrix[i][j] === 1
    }
  
    getNeighbors(index) {
      let neighbors = []
      this.matrix[index].forEach((value, i) => {
        if (value === 1) neighbors.push(i)
      })
      return neighbors
    }
  
    print() {
      // se imprimen los nodos
      console.log('nodos:')
      this.nodes.forEach((node, i) => {
        console.log(i + ': ' + node)
      })
  
      // se imprimen las conexiones
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
  