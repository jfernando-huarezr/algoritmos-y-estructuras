//head y tail
// double linked list

import { DoublyLinkedList } from "./src/double-linked-list.js";

let list = new DoublyLinkedList

list.addToEnd('Pepe')
list.addToEnd('Ana')
list.addToEnd('Sara')

list.addToStart('Benito')
list.print()

console.log('******')

list.insertAt(2,'Anuel')
list.print()
console.log('******')
list.insertAt(3, 'Daddy Yankee')
list.print()

console.log('******')
list.removeFromEnd()
list.print()