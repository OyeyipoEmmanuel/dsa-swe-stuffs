/**
    One by one 
    Sorts from top to bottom
    Find the smallest value in the array and put it in the beinning of the array
 */

const arr = [3,1,32,4,2,5,9,0]
console.log(arr)

const selectionSort = ()=>{
    for(let i = 0; i < arr.length; i++){
        let smallestIndex = i

        for(let j = i; j < arr.length; j++){
            if(arr[smallestIndex] > arr[j]){
                smallestIndex = j
                // console.log(smallestNum)
            }
        }

        let tmp = arr[i]
        arr[i] = arr[smallestIndex]
        arr[smallestIndex] = tmp

    }
}

selectionSort(arr)

console.log(arr)