export default class Dijkstra {

    static getMinPath(graph, start, end) {

        //se inicializa el arreglo de tags y el arreglo de visitados
        let tags = []
        let visited = []

        for (let i = 0; i < graph.nodes.length; i++) {
            tags.push({precessor: null, weight: Infinity})
            visited.push(false)
        }

        tags[start] = {precesor: null, weight: 0}
        
        for (let i = 0; i<graph.nodes.length; i++) {
            //1. se busca el nodo con la etiqueta con menor peso y se visita
            let minIndex = Dijkstra.getNodeWithMinWeight(tags, visited)
            visited[minIndex] = true

            //2. se etiqueta a los vecinos del nodo visitado
            let neighbors = graph.getNeighbors(minIndex)
            //se recorre a los vecinos
            for (let neighbor of neighbors) {
                //si no esta visitado
                if (!visited[neighbor]) {
                    //se etiqueta
                    let precessor = minIndex
                    let weight = tags[minIndex].weight + graph.getWeight(minIndex, neighbor)

                    // si el nuevo peso es menor que el que ya existia
                    if(weight < tags[neighbor].weight) {
                        //se reemmplaza la etiqueta
                        tags[neighbor] = { precessor, weight }
                    }

                }
            }
        }

        return Dijkstra.tracePath(tags, start, end)
    }

    static tracePath(tags, start, end) {
        //se empieza en el nodo fina
        let current = end
        let path = []

        //mientras no se llegue al nodo inicial
        while (current !== start) {
            //se agrega current a path
            path.push(current)
            //y se mueve al precesor
            current = tags[current].precessor
        }
        //se agrega el nodo inicial
        path.push(start)

        return  path.reverse()
    }

    static getNodeWithMinWeight(tags, visited) {
        let minWeight = Infinity
        let minIndex

        for (let i = 0; i < tags.length; i++) {
            //si el nodo no ha sido visitado
            if (!visited[i]) {
                //y si genera un mejor minimo
                if(tags[i].weight < minWeight) {
                    minWeight = tags[i].weight
                    minIndex = i
                }
            }
            
        }
        return minIndex
    }
 }