function ps(nums) {
  const result = [];
  const path = [];

  function backtrack(startIdx) {
    result.push([...path]);
    if(startIdx >= nums.length) return

    for (let i = startIdx; i < nums.length; i++) {
      //Choice
      path.push(nums[i]);

      //recurse
      backtrack(i+1);

      //Undo
     path.pop();
      
    }
    
  }

  backtrack(0);
  return result;
}

console.log(ps([1, 2, 3]));
