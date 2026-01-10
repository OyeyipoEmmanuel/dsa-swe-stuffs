function distinctInt(nums, k) {
  const result = [];
  const path = [];
// [1,2,3]
  function backtracking(startIdx) {
    //Base Case
    if (path.length == k) {
      result.push([...path]);
      return;
    }

    for (let i = startIdx; i < nums.length; i++){

      //choose
      path.push(nums[i]);

      backtracking(i+1)

      path.pop()

    }
  }

  backtracking(0)
  return result
}

console.log(distinctInt([1,2,3,4], 2));
