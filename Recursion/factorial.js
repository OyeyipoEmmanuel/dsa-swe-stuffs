// Normal way

//Algorithm
/** 
0! = 1
1! = 1
2! = 2x1
3! = 3x2x1

Input: N
Output: N!
Base case:
    
    

    1. Loop through N:
        if N == 0 output= 1
        if N == 1 return 1
        output *= N-i
    

 */


// const factorial = (n)=>{
//     let output = n;

//     if (n == 0) return 1
//     if(n == 1) return 1

//     for(let i = 1; i < n; i++){
//         output *= n-i

//     }

//     return output
// }

// console.log(factorial(0))

// WIth Recursion
/**
Algorithm:
1. Input - n
    Output - n!
2. Set base case
    if n==0 return 1
3. Recursive function
    return n * func(n-1)
 */


const factorial = (n)=>{
    if(n < 0) return -1
    if (n == 0) return 1

    return factorial(n-1)
}

console.log(factorial(0))

// Normal
const addNum = (n)=>{
    let output = 0;
    if (n == 0) return 0
    for (let i = 1; i <= n; i++){
        console.log(i + " +")
        output += i
    }

    return output
}

console.log(addNum(3))

// Recursive
const addNumRecursive = (n)=>{
    if(n == 0) return 0
    if (n == 1) return 1

    return n + addNumRecursive(n-1)
}

console.log(addNumRecursive(4))