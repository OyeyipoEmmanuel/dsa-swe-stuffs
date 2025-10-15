// Find the minimum and max value in an array without sorting
/**
 Algorithm
 eg. [7,2,6,3]
 1. Take the firstIndex as a starting point
 2. have a minIndex pointer and a maxIndexPointer. Both should start from 0
 3. Loop through the array
    - is arr[i] < arr[minIndex]:
        minIndex = i
    - is arr[i] > arr[maxIndex]
        maxIndex = i
 4. End and return result
 */

function minMaxWithoutSorting(arr){
    let minIndex = 0;
    let maxIndex = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[minIndex]){
            minIndex = i
        }

        if(arr[i] > arr[maxIndex]){
            maxIndex = i
        }
    }

    return [arr[minIndex], arr[maxIndex]]
}

console.log(minMaxWithoutSorting([5,3,8,1,4,6,2,7]))