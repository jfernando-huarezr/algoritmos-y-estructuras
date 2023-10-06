class Node {
    constructor (value) {
        this.value = value
        this.next = null        
    }
}


export default class LinkedList {
    constructor () {
        //head
        //null
        this.head = null
        this.length = 0
    }

    addToEnd (value) {
        let newNode = new Node(value)

        //si la lista esta vacia
        if (this.head === null) {
            this.head = newNode
        }

        //si la lista ya tiene elementos
        //head
        //node0 --> node1 --> node2 --> null
        else {
            let current = this.head
            while(current.next != null){
                current = current.next
            }

            //node0 --> node1 --> node2 --> newNode --> null
            current.next = newNode
        }

        this.length++
    }

    addToStart (value) {
        //se crea un nodo vacio
        let newNode = new Node(value)

        //se enlaza newNode a head
        //            head
        //newNode --> node0 --> node1 --> node2 -->
        newNode.next = this.head
        this.head = newNode
        this.length++        
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('index sobrepasa los limites de la lista')
        }

        let newNode = new Node(value)

        if (index===0) {
            this.addToStart(value)
        }

        else {
            let current = this.head
            for (let i=0; i<index-1; i++) {
                current = current.next
            }

            newNode.next = current.next
            current.next = newNode
        }

        this.length++
    }

    print(){
        let current = this.head
        while(current !=null) {
            console.log(current.value)
            current = current.next
        }
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('index sobrepasa los limites de la lista')
        }

        let current = this.head        
        for (let i = 0 ; i < index; i++) {            
            current = current.next
        }

        return current
    }

    clear () {
        this.head = null
        this.length = 0
    }

    isEmpty () {
        return this.length === 0
    }

    size () {
        return this.length
    }
}


