export default class Stack {
    constructor() {
        this.items = []
    }

    push(value) {
        this.items.push(value)
    }

    pop() {

        return this.items.pop()
    }

    size() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        const clone = [...this.items]
        let reversed = clone.reverse()
        for (let i = 0; i < reversed.length; i++){
            console.log(`${i+1}.${this.items[i]}`)
        }
    }
    
    peek() {
        return this.items[this.items.length-1]
    }
}