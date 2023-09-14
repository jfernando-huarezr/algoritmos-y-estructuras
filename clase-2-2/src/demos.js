export function recorrido () {

    console.log("--------FOR---------")
    let names = ['Ana', 'Pedro', 'Gabriel', 'Jazmin', 'Roberto'];

    for (let i=0; i<names.length; i++) {
        console.log(`procesando a: ${i+1} ${names[i]}`)
    }

    console.log("------WHILE-------- ")
    
    let i = 0
    while (i< names.length) {
        console.log(`procesando a: ${i+1} ${names[i]}`)
        i++;   
    }

    console.log("------FOR OF-------- ")
    //cuando no necesito los indices
    for (let name of names) {
        console.log(name);
    }

    console.log("------FOR EACH-------- ")
    names.forEach((name,i) => {
        console.log(`procesando a: ${i+1} ${name}`)
    })
}

export function pushPop () {
    const equipos = ['Real Madrid', 'AC Milan', 'Chelsea', 'PSG', 'Barcelona', 'Manchester City'];
    console.log(equipos);
    equipos.push('Bayern Munich'); //agrega uno o mas elemento al final del array
    console.log(equipos);


    equipos.pop(); //retira el ultimo elemento del array y regresa este dato. Se puede almacenar en una variable.
    const eliminado = equipos.pop();
    console.log(equipos); 
    console.log(eliminado);
}

export function shiftUnshift () {
    const equipos = ['Real Madrid', 'AC Milan', 'Chelsea', 'PSG', 'Barcelona', 'Manchester City'];
    console.log(equipos);
    
    let eliminado = equipos.shift() //elimina y devuelve el primer elemento del inicio del array
    console.log(equipos);
    console.log(eliminado);

    equipos.unshift("Juventus", "Benfica") //agrega uno o mas elementos al inicio del arreglo
    console.log(equipos)
}

export function concatenar(){
    const a = [1,2,3];
    const b = [4,5,6];

    const sol1 = a.concat(b);
    console.log(sol1);

    const sol2 = [...a, ...b];
    console.log(sol2); 
}

export function join(){
    let a = ['hola', 'mundo', 'cruel']
    let string = a.join(' ');
    console.log(string);
}

export function sliceSplice() {

    //devuelve una copia de una porcion del arreglo original sin modificarlo
    const arreglo = ['a', 'b', 'c', 'd', 'e', 'f'];
    const subarreglo = arreglo.slice(2,5);
    console.log(arreglo)
    console.log(subarreglo);

    //elimina y/o agrega nuevos elementos a un arreglo
    const subarreglo2 = arreglo.splice(2,3);
    console.log(arreglo)
    console.log(subarreglo2);    
}

export function forEach () {
    let a = [1,2,3,4,5,6,7];

    //ejecuta una funcion sobre cada elemento
    a.forEach( el => {
        console.log(el*2);
    })
}

export function map() {
    const a = [1,2,3,4,5];

    //recibe un arreglo, y se ejecuta una funcion sobre cada elemento. Se retorna un nuevo arreglo con los nuevos elementos
    const b = a.map( el => {
        return el*2
    })

    console.log(b);
}


export function filter(){
    const a = [1,2,3,4,5,6,7,8,9]


    //se aplica una condicion a cada elemento del arreglo. Retorna un nuevo arreglo con todos los elementos que cumplen esta condicion.
    const b = a.filter( el => {
        return el%2 === 0
    })

    console.log(a)
    console.log(b)

}
 
export function reduce () {
    const a = [1,2,3,4,5]

    const suma = a.reduce((accumulator, element) => {
        return accumulator + element;
    }, 0)

    const multiplicacion = a.reduce((accumulator, element) => {
        return accumulator*element;
    }, 1)

    console.log(a)
    console.log(suma)
    console.log(multiplicacion)
}

export function find() {
    const a = [1,2,3,4,5];

    //retorna el primer elemento que cumple la condicion
    const b = a.find((el) => {
        return el>3;
    })

    console.log(a)
    console.log(b)
}

export function indexOf () {
    const a = [1,2,3,4,5];

    //retorna el indice (index) si encuentra el elemento en el arreglo. Si no lo encuentra, retorna -1
    let b = a.indexOf(4);
    console.log(a);
    console.log(b);
    b = a.indexOf(20);
    console.log(b);    
}

export function includes() {
    const a = [1,2,3,4,5];

    //verifica si un elemento existe dentro del arreglo. retorna True o False
    let b = a.includes(4);
    console.log(a);
    console.log(b);
    b = a.includes(20);
    console.log(b); 
}