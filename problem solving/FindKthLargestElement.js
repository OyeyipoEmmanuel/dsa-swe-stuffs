/**
 e.g Input: nums = [3,2,1,5,6,4], k = 2
    Output: 5 - the second largest element is 5
 */

// const num = [3,2,1,5,6,4]
const num = [3,2,3,1,2,4,5,5,6]
const k = 4
let largestIndex = 0
let firstNumIndex = 0
let largestNum = 0

for(let i = 1; i <= k; i++){
    for(let j = 0; j < num.length; j++){
        if(num[firstNumIndex] <= num[j]){
            largestIndex = j
            firstNumIndex = j
        }
    }

    // Eliminate the largest index by swapping it with the last element then pop it out.

    console.log("largest is: ", num[largestIndex])

    let tmp = num[num.length - 1] 
    num[num.length - 1] = num[largestIndex]
    num[largestIndex] = tmp

    largestNum = num[num.length - 1]
    num.pop()

    
    console.log(num)

    firstNumIndex = 0
    largestIndex = 0
}

console.log(largestNum)