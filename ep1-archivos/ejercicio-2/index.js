import { sumCols, sumRows } from './src/utils.js'

let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(sumRows(numbers)) // resultado esperado: [6, 15, 24]
console.log(sumCols(numbers)) // resultado esperado: [12, 15, 18]
