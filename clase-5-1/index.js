//Listas enlazadas

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let node0 = new Node('Ana')
let node1 = new Node('Carlos')
let node2 = new Node ('Grecia')
let node3 = new Node('Victor')


// node0 --> node1 -- node2 --> node4
node0.next = node1
node1.next = node2
node2.next = node3

// console.log(node0.value) //Ana
// console.log(node0.next.value) //Carlos
// console.log(node0.next.next.value) //Grecia
// console.log(node0.next.next.next.value) //Victor

let current = node0
while (current != null) {
    console.log(current.value)
    current = current.next
}
