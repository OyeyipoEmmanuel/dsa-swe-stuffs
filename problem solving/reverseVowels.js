// var reverseVowels = function (s) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let sArr = [];
//   let vowelsInS = [];
//   let idxOfVowels = [];

//   for (let i = 0; i < s.length; i++) {
//     sArr.push(s[i]);
//     if (vowels.includes(s[i].toLowerCase())) {
//       vowelsInS.push(s[i]);
//       idxOfVowels.push(i);
//     }
//   }
//   // console.log(vowelsInS)
//   vowelsInS.reverse();
//   // console.log(vowelsInS)
//   // console.log(idxOfVowels)

//   for (let i = 0; i < vowelsInS.length; i++) {
//     sArr[idxOfVowels[i]] = vowelsInS[i]
//     // console.log(s[idxOfVowels[i]]);
//     // console.log(vowelsInS[i]);
//     // console.log(s.replaceAll(s[idxOfVowels[i]], vowelsInS[i]));
//   }

//   return sArr.join('');
// };

// console.log("hello".replace("h", "c"));

// console.log(reverseVowels("IceCreAm"));

// function a(n) {
//   let binaryRes = "";

//   function recurse(n) {
//     if (n == 0) return ;

//     recurse(n - 1);

//     binaryRes += n.toString(2);
//     binaryRes = (binaryRes % 1000000007).toString()

//     console.log(binaryRes);
//   }

//   recurse(n);

//   console.log(typeof binaryRes);

//   return parseInt(binaryRes, 2);
// }

// console.log(a(42));

// const s = new Set()
// s.add(1)
// s.add(3)
// s.add(2)
// s.has(3)

// console.log(s)

// function hasDuplicate(nums) {
//   let set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) return true;

//     set.add(nums[i]);
//   }

//   return false;
// }

// console.log(hasDuplicate([1,2,3,3]))
let s="racecar"
let t="carrace"
[3, 4, 12, 1]
const sortFunc = (val)=>{
  val.split("")

  

}





if (s.length !== t.length) return false;

s = s.split("").sort().join("");
t = t.split("").sort().join("");

console.log(s)
console.log(t)
let map = new Map()
for (let i = 0; i < s.length; i++) {
map.set(s[i], 1)
  if (s[i] !== t[i]) {
    return false;
  }
}
// map.get("i") -=1

console.log(map.get("r"))

    console.log(map.values())
    
console.log([...map.values()].reduce((acc, key) =>  acc = acc + key, 0))
  
return true;


