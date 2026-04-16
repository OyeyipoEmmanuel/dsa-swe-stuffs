// // Holds key value pair.
// // key is used to get the value
// // key is gotten with a formula(from the hashFunction)
// // if 2 values have same key, it is called collision
// //collision is solved by using linkedlist to chain the values i.e ada and obi has same key of 2. in the bucket that holds key 2, we use linked list to chain ada and obi

// class HashMap{
//     noOfBuckets
//     table

//     constructor(noOfBuckets){
//         this.noOfBuckets = noOfBuckets
//         this.table = new Array(this.noOfBuckets)
//     }

//     hash(key){
//         let hashVal = 0

//         //Basic - for when you are sure there wont be any collision
//         hashVal = key % this.noOfBuckets

//         // for (let i = 0; i < key.length ; i++) {
//         //     hashVal = ()

//         // }

//         return hashVal
//     }

//     set(key, value){
//         let v = this.hash(key);

//         this.table[v] = value
//     }
// }

// const hashmap = new HashMap(5)
// hashmap.set(121, "Ada")
// hashmap.set(95, "hello")
// hashmap.set(34, "hey")
// hashmap.set(12, "dude")
// hashmap.set(103, "ben")

// console.log(hashmap.table)

const map = new Map();
// [
//     [1,["a", "b"]],
//     [2,["c", "d"]],
//     [3,["e", "f"]],
// ]
console.log(map);
map.set(1, 10);
map.set(2, 11);
map.set(3, 14);
map.set(3, 12);
console.log(map.has(1));

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < 8 && i % 2 == 0; i++) {
  console.log(i);
}

// const a = "hello"
// if(a !== "hello"){
//     console.log("first")
// }
