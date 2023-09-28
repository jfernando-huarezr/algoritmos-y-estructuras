let array = [40, 100, 1, 5, 25, 10]

let persons = [ 
   {name: 'Ana', age: 20},
   {name: 'Benito', age: 65},
   {name: 'Sergio', age: 35},
   {name: "Camila", age: 2},
   {name: "Carlos", age: 43}
]


function findMax(arr) {
    let max = arr[0];
    let maxIndex = 0;
    for (let i=1; i<arr.length; i++) {
        if (max<arr[i]) {
            max = arr[i]
            maxIndex = i
        }
    }
    return {max, maxIndex}
}

console.log(findMax(array))

function findMin(arr) {
    let min = arr[0]
    let minIndex = 0
    for (let i=1; i<arr.length; i++) {
        if (min>arr[i]) {
            min = arr[i]
            minIndex = i
        }
    }
    return {min, minIndex}
}

let {min, minIndex} = findMin(array)
console.log(min)
console.log(minIndex)

function findMaxObject(obj) {
    let max = obj[0].age;
    //tambien se puede usar max = Infinity. o en caso sea el minimo , -Infinity
    //en el for loop en vez de que empieze en 1 volveria a empezar en 0
    let maxIndex = 0;
    for (let i=1; i<obj.length; i++) {
        if (max<obj[i].age) {
            max = obj[i].age
            maxIndex = i
        }
    }
    return {max, maxIndex}
}

console.log(findMaxObject(persons))