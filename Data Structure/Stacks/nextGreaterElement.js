// /**  Next greater Element
//  input = [4,5,2,10]
//  output = [5,10,10,-1]

//  4 -> nge = 5
//  5 -> nge = 10
//  2 -> nge = 10
//  10 -> nge = none = -1

// Keep pushing into the stack until you find the next > element.
// The stack is responsible for holding element that is still looking for someone bigger.
//  */

// function next_greater_element(array){
//     //[4,5,2,10]
//     const stack = []
//     const res = []

//     for(let i = 0; i < array.length; i++){
//         if(stack.length == 0){
//             stack.push(array[i])
//         }

//         while(stack.length > 0){
//             if(array[i] > stack[stack.length - 1]){
//                 stack.pop()
//                 // res.push(array[i+1])
//             }else{
//                 stack.push(array[i])
//             }
//         }
//     }
// }

const s = new Map();
s.set(1);
s.set(1);
s.set(1);
let b = [1,2,3,4,5]
let res = 0
for (let i = 0; i < 5; i++) {
  let a = b.pop();
  console.log(a);
  res += a;
}

console.log(res)
