export class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

export class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    addToStart(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }

        else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }

    addToEnd(value) {
        let newNode = new Node(value)

        if (!this.tail) {
            this.tail = newNode
            this.head = newNode
        }

        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++
    }

    insertAt(index, value) {
        let newNode = new Node(value)

        if (index<0 || index > this.length) {
            throw new Error('index sobrepasa los limite de la lista')
        }

        if (index===0) {
            this.addToStart(newNode.value)
        }

        else if (index === this.length) {
            this.addToEnd(newNode.value)
        }

        else {            
            let current = this.head
            for (let i = 0; i < index-1; i++) {
                current = current.next
            }

                newNode.next = current.next
                current.next.prev = newNode
                current.next = newNode
                newNode.prev = current 

                this.length++
        }        
    }

    size() {
        return this.length
      }

    print () {
        //igual a la lista simple
        let current = this.head
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }

    isEmpty() {
        return this.length === 0
    }

    clear () {
        this.head = null
        this.tail = null
        this.length = 0
    }

    removeFromEnd() {
        if (!this.tail) return null

        const value = this.tail.value
        this.tail = this.tail.prev

        if(this.tail) {
            this.tail.next = null
        } 
        else {
            this.head = null
        }

        this.length--
        return value
    }

    removeFromStart() {
        if (!this.head) return null

        const value = this.head.value
        this.head = this.head.next

        if(this.head) {
            this.head.prev = null
        } 
        else {
            this.tail = null
        }

        this.length--
        return value
    }
}