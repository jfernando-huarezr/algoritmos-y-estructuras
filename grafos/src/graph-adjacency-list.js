export default class Graph {
    constructor() {
      // lista de nodos
      this.nodes = []
      // lista de adyacencias
      this.adjacencies = []
    }
  
    addNode(value) {
      // se agrega el nuevo nodo a la lista de nodos
      this.nodes.push(value)
      // se agrega un arreglo en 'adjacencies' para almacenar a los vecinos del nuevo nodo
      this.adjacencies.push([])
    }
  
    addConnection(i, j) {
      // agregar a j a la lista de vecinos de i
      this.adjacencies[i].push(j)
      // agregar a i a la lista de vecinos de j
      this.adjacencies[j].push(i)
    }
  
    isConnected(i, j) {
      // se pregunta si j se encuentra entre los vecinos de i
      return this.adjacencies[i].includes(j)
    }
  
    getNeighbors(index) {
      // se retorna los adyacentes a index
      return this.adjacencies[index]
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
  