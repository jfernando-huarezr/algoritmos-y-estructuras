import LinkedList from "./src/linked-list.js";

let list = new LinkedList()

list.addToEnd('Ana')
list.addToEnd('Bruno')
list.addToEnd('Daniel')
list.addToEnd('Carla')

//list.addToStart('Sara')

// list.print()
// let value = list.get(3)
// console.log(value)

list.insert(4, 'Luffy') 
list.print()

// list.addToEnd(value)  //unshift
// list.addToStart(value) //push

// list.removeFromStart() //shift
// list.removeFromEnd() //pop
// list.removeAt(index) //splice
// list.get(index) 
// list.isEmpty()
// list.clear()
// list.size()
// list.shuffle()
// list.print()