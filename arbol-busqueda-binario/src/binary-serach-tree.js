class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

export default class BinarySearchTree {
    constructor() {
        this.root = null
        this.sortedArray = []
    }
    
    insert(value) {
        const newNode = new Node(value)

        if (!this.root) {
            this.root = newNode
            return
        }

        this.insertRecursive(newNode, this.root)
    }

    insertRecursive(newNode, node) {
        //si va para la izquierda
        if (newNode.value < node.value) {
            //se verifica si hay espacio
            if(!node.left) node.left = newNode
            //de lo contrario se inserta en node.left recursivamente
            else this.insertRecursive(newNode, node.left)
        }

        //si va para la derecha
        if (newNode.value > node.value) {
            //se verifica si hay espacio
            if(!node.right) node.right = newNode
            //de lo contrario se inserta en node.right recursivamente
            else this.insertRecursive(newNode, node.right)
        }
    }


    remove(value) {
        //de lo contrario se remueve recursivamente
        this.root = this.removeRecursive(value, this.root)
    }

    removeRecursive(value, node) {
        //si el nodo es nulo
        if (!node) return
        //si el nodo es el que estoy buscando
        if (node.value === value) {
            //caso 1: nodo no tiene hijos
            if (!node.left && !node.right) {
                node = null
                return node
            }

            //caso 2: nodo tiene un hijo
            if (node.left && !node.right) {
                node = node.left
                return node
            }

            if (!node.right && !node.left) {
                 node = node.right
                 return node
            }
             
            //caso 3: nodo tiene 2 hijos
            if (node.right && node.left) {
                //buscar el niminmo por la derecha
                let minNode = this.findMin(node.right)
                //se reemplaza el valor de node por el de minNode
                node.value = minNode.value
                //eliminar minNode
                this.right = this.removeRecursive(minNode.value, node.right)

                return node
            }
        }

        if (value < node.value) {
            node.left = this.removeRecursive(value, node.left)
            return node
        }

        if (value > node.value) {
            node.right = this.removeRecursive(value, node.right)
            return node
        }
    }

    findMin(node){
        if (!node) node = this.root
        let current = node 
        while (current.left) {
            current = current.left
        }

        return current
    }

    finMax(node) {
        if (!node) node = this.root
        let current = node
        while (current.right) {
            current = current.right
        }

        return current
    }

    print() {
        this.printRecursive(this.root)
    }

    printRecursive(node) {
        //DFS: preorder
        console.log(node.value)
        if(node.left) this.printRecursive(node.left)
        if(node.right) this.printRecursive(node.right)

        //inorder
        if(node.left) this.printRecursive(node.left)
        console.log(node.value)
        if(node.right) this.printRecursive(node.right)
    }

    printVisual() {
        //si arbol esta vacio
        if (!this.root) {
            console.log('El arbol esta vacio')
            return
        }

        this.printVisualRecursive(this.root, 0)
    }

    printVisualRecursive(node, level) {
        let tabulation = '--'.repeat(level)

        console.log(tabulation + node.value)

        if (node.left) this.printVisualRecursive(node.left, level+1)
        if (node.right) this.printVisualRecursive(node.right, level+1)
    }

    getSortedArray() {
        this.sortedArray = []
        this.getSortedArrayRecursive(this.root)

        return this.sortedArray
    }

    getSortedArrayRecursive(node) {
        //inorder
        if(node.left) this.getSortedArrayRecursive(node.left)
        this.sortedArray.push(node.value)
        if(node.right) this.getSortedArrayRecursive(node.right)
    }
}
