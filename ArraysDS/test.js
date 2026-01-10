// // const arr = [1, 2, 3, 4, 5];

// // // for (let i = 0; i < arr.length - 1; i++) {
// // //   arr[i] = arr[i + 1];
// // // }
// // // arr.pop()

// // // console.log(arr)

// // console.log(arr.indexOf(1))

// const nums1 = [4, 1, 2];
// const nums2 = [1, 3, 4, 2];

// let finalArr = [];
// for (let i = 0; i < nums1.length; i++) {
//   let current = nums1[i]; //4
//   let indexOfNums2 = nums2.indexOf(current); //2
//   let nextIndex = indexOfNums2 + 1; //3
//   if (indexOfNums2 == nums2.length - 1) {
//     finalArr.push(-1);
//     // nextIndex = indexOfNums2;
//   } else if (nums2[indexOfNums2] >= nums2[nextIndex]) {
//     finalArr.push(-1);
//   } else {
//     finalArr.push(nums2[nextIndex]);
//   }
// }

// console.log(finalArr);

// const nums = [0,0,1,1,1,2,2,3,3,4]
// const a = []
// for(let i=0; i< nums.length; i++){
//   if(!a.includes(nums[i])){
//     a.push(nums[i])
//   }
// }

// console.log(a);
let mp = new Map();

for (let i = 0; i <= 4; i++) {
  mp.set(i, 0);
}
// let

if (mp.has(2)) {
  mp.set(2, 1);
}

// console.log(mp.values())
mp.forEach((e, a) => {
  if (e == 1) {
    console.log(a);
  }
});
