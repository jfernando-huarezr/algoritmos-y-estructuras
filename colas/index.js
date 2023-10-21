import Queue from "./src/queue.js";

let cola = new Queue()

cola.enqueue('Ana')
cola.enqueue('Carlos')
cola.enqueue('Roman')
cola.enqueue('Daniel')

function processQueue(queue){
    if (queue.isEmpty()) return

    processPerson(queue.dequeue(), () => {
        processQueue(queue)
    })
}

function processPerson(person, callback){
    console.log(`Empezando a atender a ${person}`)
    setTimeout(()=> {
        console.log(`Terminando de atender a ${person}`)
        callback()
    }, 3000)
}

processQueue(cola)