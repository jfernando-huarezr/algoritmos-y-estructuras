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
  
    addConnection(i, j, weight = 1) {
      // se agrega la conexión entre i,j y j,i
      this.matrix[i][j] = weight
      this.matrix[j][i] = weight
    }
  
    getWeight(i, j) {
      // se consulta el peso en la matriz
      return this.matrix[i][j]
    }
  
    isConnected(i, j) {
      // si el peso es distinto a cero, hay conexión
      return this.matrix[i][j] !== 0
    }
  
    getNeighbors(index) {
      // inicializa un arreglo de vecinos
      let neighbors = []
      // se recorre la fila 'index' buscando valores distintos a cero
      this.matrix[index].forEach((value, i) => {
        // y si se encuentra, se almacena el nodo como vecino
        if (value !== 0) neighbors.push(i)
      })
      // se retorna la lista de vecinos encontrados
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
            console.log(i + ' --- ' + j + ' : ' + this.getWeight(i, j))
          }
        }
      }
    }
  }
  