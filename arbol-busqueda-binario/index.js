import BinarySearchTree from "./src/binary-serach-tree.js";

let bst = new BinarySearchTree()

//[20,7,30,8,98,34,17,2,110,25,28,5]

bst.insert(20)
bst.insert(7)
bst.insert(30)
bst.insert(3)
bst.insert(8)
bst.insert(25)
bst.insert(98)
bst.insert(5)
bst.insert(17)
bst.insert(28)
bst.insert(34)
bst.insert(110)


//bst.remove(30)
//bst.printVisual()
console.log(bst.getSortedArray())