/**
    One by one 
    Sorts from top to bottom
    Find the smallest value in the array and put it in the beinning of the array
 */

const arr = [3,1,32,4,2,5,9,0]
console.log(arr)

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let smallestIndex = i
        
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[smallestIndex]){
                smallestIndex = j
            }
        }

        let tmp = arr[i]
        arr[i] = arr[smallestIndex]
        arr[smallestIndex] = tmp
    }
}

selectionSort(arr)

console.log(arr)