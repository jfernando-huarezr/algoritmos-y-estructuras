export function bubbleSort (arr) {
    const sortedArray = arr
    let aux=0
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j<sortedArray.length - (i+1); j++) {
            if (sortedArray[j] > sortedArray[j+1]) {
                aux = sortedArray[j]
                sortedArray[j] = sortedArray[j+1]
                sortedArray[j+1] = aux
            }
        }
    }

    return sortedArray
}