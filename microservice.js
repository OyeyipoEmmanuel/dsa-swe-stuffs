// function getMin() {
//   // find pods with same numbers and map them to their cost
//   // check for the one with the smaller cost then increase by 1
//   // pass that increment to the pods
//   // return sum of the min cost

//   const n = 5;
//   const pods = [8, 6, 8];
//   const cost = [9, 5, 7];

//   const mapped = pods.map((p, i) => ({ p, c: cost[i] }));

//   mapped.sort((a, b) => (a.p === b.p ? a.c - b.c : a.p - b.p));

//   console.log(mapped);
//   let totalCost = 0;

//   for (let i = 0; i < mapped.length - 1; i++) {
//     if (mapped[i].p === mapped[i + 1].p) {
//       console.log(mapped[i].c);
//       totalCost = Number(totalCost) + mapped[i].c;
//     }
//   }
//   console.log(totalCost);
// }

// getMin();

// function staircase(n) {
//   // Write your code here
//   if (n == 0) return;
//   if (n == 1) {
//     console.log("#");
    
//   }

//   return staircase(n - 1);
// }

// console.log(staircase(6))


const ar = [1,2]

console.log(ar.slice(-2))