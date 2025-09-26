// WIth Recursion
// const pali = (st)=>{
//     str = st.toLowerCase()

//     if(str.length <= 1) return true

//     if(str[0] != str[str.length - 1]) return false

//     return pali(str.slice(1, str.length - 1))
// }

// console.log(pali("NoOn"))


// Without Recursion
/**
    e.g noon
ALGORITHM
    1. Input - string
        Output - Boolean. True if string is palindrome, false if otherwise
    
    2. Two pointers. One starts to move from front, the second from the end of the string
        p1=0; p2 = str.length - 1
    
 */

const isPowThree = (n)=>{
    if (n == 0) return false

    if(n == 1) return true

    if(n < 0 ) return false

    return isPowThree(n / 3)
}

console.log(isPowThree(12))