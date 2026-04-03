// // Input: arr[] = [10, 20, 35, 50], target =70

// function s(arr, tar){
//     for (let i = 0; i < arr.length; i++){
//         let left = arr[i]

//         for (let j = 0; j < arr.length; j++) {
//             let right = arr[j]

//             if(left == right){
//                 continue
//             }

//             if((left + right) == tar){
//                 return [left, right]
//             }else{
//                 return "Not FOund"
//             }

//         }
//     }
// }

// console.log(s([10,20,35,50], 50))

for(const a in "Hello"){
    console.log("Hello"[a])
}

console.log("hello".slice(0, 2));
