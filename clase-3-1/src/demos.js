export function acceso() {
    let array = [ //3 filas x 3 columnas
//col    0 1 2 
        [1,2,3], //fila 0
        [4,5,6], //fila 1
        [7,8,9]  //fila 2
    ]  

    //array fila columna
    console.log(array[1][2]) //deberia retornar 6
}

export function recorrido() {
    let array = [
        [1,2,3,4],
        [4,5,6,7],
        [7,8,9,0]
    ]

    for (let i=0; i<array.length; i++) {
        for (let j=0; j< array[i].length; j++){
            console.log(array[i][j])
        }
    }

    //arrayMultidimensional -> array aplanado:
    //index = row*nCols + col

    //arrayAplanado -> Array multidimensional:
    //row = floor(index/nCols)
    //col = index%nCols


    //revisar indexacion y aplanamiento (flattening)    
}


export function indexing2to1() {
    //array 3x4
    let array = [
        [1,2,3,4],
        [4,5,6,5],
        [7,8,9,6]
    ]
    
    let nCols = array[0].length

    for (let row=0; row<array.length; row++){
        for (let col=0; col<array[row].length; col++) {
            let index = row * nCols + col
            console.log(`(${row}, ${col}) -> ${index}`)
        }
    }
}

export function indexing1to2() {
     //array 3x4
    let array = [
        [1,2,3,4],
        [4,5,6,5],
        [7,8,9,6]
    ]

    let nRows = array.length
    let nCols = array[0].length

    for (let index = 0; index < nRows*nCols; index++) {
        let row = Math.floor(index/nCols)
        let col = index%nCols

        console.log(`${index} -> (${row}, ${col})`)
    }



    
}