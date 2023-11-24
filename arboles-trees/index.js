import Tree from "./src/tree.js"

let tree = new Tree()

//insertar nodos al arbol. Se deberia insertar un nodo debajo de otro nodo.
//si el arbol esta vacio, por defecto el window deberia ser el root
//si el arbol esta vacio, tambien si solo le paso un valor, debe ser el root. Si hay root, debe estar abajo del root

tree.insert('C')
tree.insert('Programas', 'C')
tree.insert('Windows', 'C')
tree.insert('Zoom', 'Programas')
tree.insert('VSCode', 'Programas')
tree.insert('Photoshop', 'Programas')
tree.insert('Fonts', 'Windows')

tree.remove('Fonts')

tree.print()

