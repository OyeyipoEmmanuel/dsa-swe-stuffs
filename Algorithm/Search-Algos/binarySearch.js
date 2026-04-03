/**
 * Check mid element
 * if key < midElement:
        Check left sub array
   if key > midelement
        check right sub array
   Continue until you've found key 
 */

function binarySearch(nums, key) {
  // [1,2,3,4,5,6,7,8,9] key=3
  let low = 0;
  let high = nums.length - 1;
  let midIdx;

  while (low <= high) {

    midIdx = Math.floor((low + high) / 2);

    if (key == nums[midIdx]) {
      return "found";
    } else if (key < nums[midIdx]) {
      high = midIdx - 1;
    } else {
      low = midIdx + 1;
    }
  }

  return "not";
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
