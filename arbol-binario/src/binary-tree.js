//clase arbol
class Node {
    constructor(value) {
        this.value = value,
        this.left = null,
        this.right = null
    }
}

export default class BinaryTree {
    constructor() {
        this.root = null
    }
    
    insert(value) {
        //se crea el nuevo 
        let newNode = new Node(value)
        //si el arbol esta vacio, root es newNode
        if (!this.root) {
            this.root = newNode
            return
        }
        //buscamos un nodo libre en donde insertarlo
        let freeNode = this.searchFreeNode()
        //si left esta ocupado, insertamos en right
        if (freeNode.left) freeNode.right = newNode
        //de lo contrario, insertamos en left
        else freeNode.left = newNode
    }

    searchFreeNode() {
        //algoritmo BFS
        //se encola el primer elemento
        let queue = [this.root]
        //mientras la cola tenga elementos
        while (queue.length > 0) {
            //1. desencolar (dequeue -> shift)
            let current = queue.shift()
            //2. procesar: verificar
            if (!this.current.left || !this.current.right) return this.current
            //3. encolar a los hijos, si existen
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }       
    }

    print () {
        if(!this.root) {
            console.log("El arbol esta vacio")
        }


        //algoritmo BFS
        //se encola el primer elemento
        // let queue = [this.root]
        // //mientras la cola tenga elementos
        // while (queue.length > 0) {
        //     //1. desencolar (dequeue -> shift)
        //     let current = queue.shift()
        //     //2. procesar: imprimir
        //     console.log(current.value)
        //     //3. encolar a los hijos, si existen
        //     if (current.left) queue.push(current.left)
        //     if (current.right) queue.push(current.right)
        // }  
    
        //recursive
        this.printRecursive(this.root)
    }

    printRecursive(node) {
        // //pre-order
        // console.log(node.value)
        // if(node.left) this.printRecursive(node.left)
        // if(node.right) this.printRecursive(node.right)

        // in-order
        // if (node.left) this.printRecursive(node.left)
        // console.log(node.value)
        // if(node.right) this.printRecursive(node.right)

        //post-order
        // if (node.left) this.printRecursive(node.left)
        // if(node.right) this.printRecursive(node.right)
        // console.log(node.value)
    }


    remove(value) {
        //si root es el que hay que eliminar
        if(this.root.value === value && this.root) {
            this.root = null
            return
        }

        let parentNode = this.searchParent(value)
        if (parentNode) {
            if(parentNode.left.value === value) parentNode.left = null
            else parentNode.right = null
        }
    }

    searchParent(value) {
        //algoritmo BFS
        //se encola el primer elemento
        let queue = [this.root]
        //mientras la cola tenga elementos
        while (queue.length > 0) {
            //1. desencolar (dequeue -> shift)
            let current = queue.shift()
            //2. procesar: verificar si el nodo es padre de value
            if (current.left.value === value) return current
            if (current.right.value === value) return current
            //3. encolar a los hijos, si existen
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }

        return null
    }

}