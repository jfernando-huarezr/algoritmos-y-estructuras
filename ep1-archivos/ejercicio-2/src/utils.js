/*
 * sumRows:
 * Genera un arreglo en el que cada elemento i corresponde
 * a la suma de los elementos de la fila i de la matriz.
 */
export function sumRows(matrix) {
  // Implementar aquí...
  const respuesta = []

  for(let row=0; row < matrix.length; row++){
    let auxSum = 0
    for(let col=0; col < matrix[row].length; col++){
      auxSum = auxSum + matrix[row][col]
    }
    respuesta.push(auxSum)
  }

  return respuesta
}

/*
 * sumCols:
 * Genera un arreglo en el que cada elemento i corresponde
 * a la suma de los elementos de la columna i de la matriz.
 */
export function sumCols(matrix) {
  // Implementar aquí...

  const respuesta = []

  for(let row=0; row<matrix.length; row++) {
    for(let col=0; col<matrix[row].length; col++){

      //si es la primera fila, cargar los datos en la matrix respuesta
      if(row===0) {
        respuesta.push(matrix[row][col])
      }

      //luego de la primera fila, empezar a sumar sobre los datos de la matriz respuesta
      else {
        respuesta[col] = respuesta[col] + matrix[row][col]
      }      
    }
  }
  return respuesta
}
