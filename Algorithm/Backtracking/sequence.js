// [1,2] 
//result = [[1,2], [2,1]]

function seq(nums){
    const result = []
    const path = [];
    const used = new Array(nums.length).fill(false)

    function backtrack(){
        //Base Case
        if(path.length == nums.length){
            result.push([...path])
            return;
        }

        //Try all choices
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            //Choice
            path.push(nums[i])
            used[i] = true

            //recursion
            backtrack()

            //Undo
            path.pop()
            used[i] = false
        }
    }

    backtrack()
    return result
}

console.log(seq([1,2,3]));
