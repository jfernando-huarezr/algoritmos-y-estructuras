//clase arbol
class Node {
    constructor(value) {
        this.value = value,
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }

    removeChild(value) {
        this.children = this.children.filter(child => child.value !== value)
    }

    hasChild(value) {
        return this.children.some (child => child.value === value)
    }
}

export default class Tree {
    constructor() {
        this.root = null
    }

    insert(value, parentValue = null) {
        //se crea el nodo a insertar
        let newNode = new Node(value)

        //si no existe el parentValue
        if (!parentValue) {
            //si el arbol esta vacio, newNode es root
            if (!this.root) this.root = newNode
            else this.root.addChild(newNode)
        
        //si existe parentValue
        } else {
            //buscar al nodo cuyo valor sea parentValue
            let parentNode = this.search(parentValue)

            //si el nodo existe se le agrega a newNode como hijo
            if (parentNode) parentNode.addChild(newNode)
        }
    }

    remove(value) {
        //si el nodo a eliminar es root
        if (this.root.value === value) {
            this.root = null
            return
        }
        //se busca al padre de value
        let parentNode = this.searchParent()
        //si existe se le pide eliminar a su hijo 'value'
        if (parentNode) parentNode.removeChild(value)
    }

    search(value) {
        return this.searchRecursive(value, this.root) 
    }

    searchRecursive(value, node) {
        //caso base:
        //si el nodo tiene como valor a value, ya lo encontramos
        if (node.value == value) return node
        //definicion recursiva:
        //de lo contrario se deriva la busqueda a todos los hijos de node
        for(let child of node.children) {
            let foundNode = this.searchRecursive(value, child)
            if (foundNode) return foundNode
        }
        
        return null //si no esta en el arbol, devuelvo null
    }

    searchParent(value) {
        this.searchParentRecursive(value, this.root)
    }

    searchParentRecursive(value, node) {
        //si node tiene como hijo a value, ya lo encontramos
        if (node.hasChild(value)) return node

        //de lo contrario se deriva la busqueda hacia los hijos
        for (let child of node.children) {
            let foundNode = this.searchParentRecursive(value, child)
            if (foundNode) return foundNode
        }

        return null
    }

    print() {
        if (!this.root) console.log('El arbol esta vacio')
        this.printRecursive(this.root, 0)
    }

    printRecursive(node, level) {
        let tabulation = '--'.repeat(level)
        //se imprime el nodo
        console.log(tabulation+node.value)

        //y se deriva la impresion a los hijos
        for (let child of node.children) this.printRecursive(child, level+1)
    }
}