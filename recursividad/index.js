function sumaHasta(n) {
    if (n===1) return 1
    return sumaHasta(n-1)+n
}

function fibonacciGreedy(n) {
    if (n<=1) return 1
    return fibonacciGreedy(n-1) + fibonacciGreedy(n-2)
}

let memo = []
function fibonacciOptimized(n) {
    if (n in memo) return memo[n]

    if (n<=1) return 1
    memo[n] = fibonacciGreedy(n-1) + fibonacciGreedy(n-2)
    return memo[n]
}

function binarySearch(array, value, start, end) {

    if (start === end) {
        if(array[start] === value) return start
        return -1
    }

    let mid = Math.floor((start+end)/2)
    if (array[mid] === value) return mid
    if (array[mid] < value ) {
        return binarySearch(array, value, mid+1, end)
    }

    if (array[mid] > value) {
        return binarySearch(array, value, start, mid-1)
    }
}


// let array = [1,2,3,4,8,13,21,34,55,89]
// let value = 89

// console.log(binarySearch(array,value,0,array.length))

function quickSort(array) {
    // casos base
    if (array.length <= 1) return array
    
    // definición recursiva
    let pivot = array[0]
    let left = []
    let right = []
  
    // se recorre el resto de elementos además de pivot
    // y se los coloca a la izquierda si son menores que pivot
    // o a la derecha si son mayores
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i])
      } else  {
        right.push(array[i])
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)]
  }

  function mergeSort(array) {
    //caso base
    if (array.length <= 1) return array

    //definicion recursiva
    let mid = array.length/2
    let left = []
    let right = []

    for (let i = 0; i < array.length; i++) {
        if (i < mid) {
            left.push(array[i])
        }
        else {
            right.push(array[i])
        }
    }

    return merge(mergeSort(left), mergeSort(right))
  }

  function merge(left, right) {
        let result = []
        let i = 0
        let j = 0
        
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i])
                i++
            }

            else {
                result.push(right[j])
                j++
            }
        }

        result = [...result, ...left.slice(i), ...right.slice(j)]
        return result
  }

//   let array = []
// for (let i = 0; i < 10; i++) {
//   array.push(Math.random())
// }

// console.time('bubblesort')
// bubbleSort(array)
// console.timeEnd('bubblesort')

// console.time('quicksort')
// quickSort(array)
// console.timeEnd('quicksort')

// console.log(array)
// console.log(quickSort(array))