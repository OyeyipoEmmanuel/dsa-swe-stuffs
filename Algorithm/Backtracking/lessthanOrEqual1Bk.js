function ls(nums, k) {
  const result = [];
  const path = [];

  // [1,2,3] size <= 1

  function backtracking(startIdx) {
    if (path.length > k) return;
    result.push([...path]);

    for (let i = startIdx; i < nums.length; i++) {
      path.push(nums[i]);

      backtracking(i+1);

      path.pop();
    }
  }

  backtracking(0);
  return result;
}

console.log(ls([1, 2, 3], 2));
