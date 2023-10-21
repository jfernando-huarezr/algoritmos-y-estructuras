import Stack from "./src/stack.js";

// let stack = new Stack()
// stack.push('Ana')
// stack.push('Bruno')
// stack.push('Carla')

// let next 
// next = stack.pop()
// console.log(next) //Carla

// next = stack.pop()
// console.log(next)

// next = stack.pop()
// console.log(next)

//expresion (5*3)-{3+[4/(8*2)]} , como verifico esto?

//con una pila
// posibles errores: no hay match, al desapilar la pila ya no tiene elementos, la pila no termina vacia

let expresion = '(8+9)*{2+-[(5-3)/4]}'

function validateExpresion(expresion) {
    let stack = new Stack()
    for (let char of expresion) {
        if (char == '{' || char == '[' || char == '(') {
            stack.push(char)
        } else {
            if (char == ')') {
                if (stack.isEmpty()) return false
                if (stack.pop() !== ('(')) return false
            }

            if (char == ']') {
                if (stack.isEmpty()) return false
                if (stack.pop() !== ('[')) return false
            }

            if (char == '}') {
                if (stack.isEmpty()) return false
                if (stack.pop() !== ('{')) return false
            }
        }    
    }

    return stack.isEmpty()
}

console.log(validateExpresion(expresion))

