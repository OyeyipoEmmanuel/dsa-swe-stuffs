/**
A. Let's see if you can recursively split the array
ALGO: eg. [6,3,4,1,5,2,7,0]
1. Get the mid index 
2. split the array to sub-arrays for (0, mid) - (mid + 1, array.length - 1)
3. Do this recursively
4. base case:
    return when arr.length = 1
 */

function splitArrayRecursively(arr){
    if(arr.length === 0) return []

    if(arr.length == 1) return arr

    const midIndex = Math.ceil(arr.length / 2)
    console.log(midIndex)

    return splitArrayRecursively(arr.slice(0, midIndex))

    // splitArrayRecursively(arr.slice(midIndex, arr.length))

}

console.log(splitArrayRecursively([6,3,4,1,5,2,7,0]))

// console.log([6,3,4,1,5,2,7,0].slice(0,4))