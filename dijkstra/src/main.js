import p from 'p5-sketch'
import Graph from './graph-edge-list.js'
import Dijkstra from './dijkstra.js'

let graph = new Graph

//agregamos nodos aleatorios
for (let i = 0; i< 50; i++) {
    graph.addNode({value:i, x: p.random(50,450), y: p.random(50,450)})
}

//agregamos conexiones aleatorias 
for (let i = 0; i< graph.nodes.length; i++) {
    for(let j = i+1; j < graph.nodes.length; j++) {

        let nodeI = graph.nodes[i]
        let nodeJ = graph.nodes[j]

        let distance = p.dist(nodeI.x, nodeI.y, nodeJ.x, nodeJ.y)

        if (distance < 100) {
            graph.addConnection(i,j)
        }

        // let r = p.random([0,1,2,3,4,5,6,7,8,9])
        // if(r == 0) {
        //     graph.addConnection(i,j)
        // }
    }
}



//grafo basico
// graph.addNode({value:0, x:100, y: 100})
// graph.addNode({value:1, x:400, y: 100})
// graph.addNode({value:2, x:400, y: 400})
// graph.addNode({value:3, x:100, y: 400})
// graph.addNode({value:4, x:250, y: 250})

// graph.addConnection(0,1)
// graph.addConnection(1,2)
// graph.addConnection(2,3)
// graph.addConnection(3,4)
// graph.addConnection(3,0)

function getNearToCursorIndex() {
    let minDistance = Infinity
    let minIndex

    for (let i = 0; i < graph.nodes.length; i++) {
        let node = graph.nodes[i]
        let distance = p.dist(node.x, node.y, p.mouseX, p.mouseY)

        if (distance < minDistance) {
            minDistance = distance
            minIndex = i
        }
    }

    return minIndex
}

p.setup = () => {


    
}

p.draw = () => {
    p.createCanvas(500, 500)
    p.background('lightblue')

    let nearToCursorIndex = getNearToCursorIndex()
    let path = Dijkstra.getMinPath(graph, 0, nearToCursorIndex)

    //dibuja las conexiones
    for (let i = 0; i< graph.nodes.length; i++) {
        for(let j = i+1; j < graph.nodes.length; j++) {
            if (graph.isConnected(i,j)) {
                let nodeI = graph.nodes[i]
                let nodeJ = graph.nodes[j]

                p.push()
                p.strokeWeight(2)
                p.line(nodeI.x, nodeI.y, nodeJ.x, nodeJ.y)
                p.pop()
            }
        }
    }

    //dibuja el path
    for (let i=0; i < path.length-1; i++) {
        let node = graph.nodes[path[i]]
        let nodeNext = graph.nodes[path[i+1]]

        p.push()
        p.stroke('red')
        p.strokeWeight(3)
        p.line(node.x, node.y, nodeNext.x, nodeNext.y)
        p.pop()
    }

    //dibuja los nodos
    for (let node of graph.nodes) {
        p.push()
        p.circle(node.x, node.y , 15)
        p.textAlign(p.CENTER, p.CENTER)
        p.textSize(10)
        p.text(node.value, node.x, node.y)
        p.pop() //para proteger el dibujo?
    }
}