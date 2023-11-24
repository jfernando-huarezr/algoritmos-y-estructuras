export default class Queue {
  constructor() {
    this.items = []
  }

  enqueue(value) {
    this.items.push(value)
  }

  dequeue() {
    return this.items.shift()
  }

  peek() {
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  print() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${i + 1}. ${this.items[i]}`)
    }
  }
}
