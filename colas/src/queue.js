export default class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item)
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    peek() {
        this.items[0]
    }

    print() {
        for (let i = 0; i < this.items.length; i++){
            console.log(`${i+1}.${this.items[i]}`)
        }
    }
}