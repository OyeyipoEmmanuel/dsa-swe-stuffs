//Without Recursion
/**
Algorithm:
    1. Input: n
        Output: fibo sequence from index 0 - n
    2. Set index 0 and 1 to 0 and 1
        a=0; b=1
    3. Loop from the 2nd index to nth index:
            a. Calc the sum of a and b
                    val = a + b
            b. Swap values/pointers so b is now a and b is now val
                    a=b; b=val
    4. Return Output
 */

const fiboWithoutRecursion = (n)=>{
    if(n == 0) return 0

    let a = 0
    let b = 1

    let val = 0;
    console.log(a)
    console.log(b)
    for(let i = 2; i <= n; i++){
        val = a + b
        a = b
        b = val

        console.log(val)
    }

}

// fiboWithoutRecursion(0)

// With Recursion
const fibo = (n)=>{
    if(n == 0) return 0

    if(n == 1) return 1
    

    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(4))