// Use backtracking to get the permutation of a string

// Recursion function

function recursiveFunc(index, str, ans){
    if(index === str.length){ //index=3
        ans.push(str.join("")); 
        return;
    } //base case acheived - back to the return of rec(2,s,a) - return to rec(1,s,a)
    

    for(let i = index; i < str.length; i++){ //index = 0, i=0 // index=1, i=1 //index=2, i=2   //for rec(1,s,a) - index=1, i++(2)
        [str[index], str[i]] = [str[i], str[index]]; //swap(0,0) //swap(1,1) //swap(2,2) //swap(1,2)
        recursiveFunc(index + 1, str, ans); // rec(1, str, ans) //rec(2,s,a) //rec(3,s,a)
        [str[index], str[i]] = [str[i], str[index]]; // for rec(2,s,a) - swap(2,2) // for rec(1,s,a) - swap(1,1)
    }
    //loop done for rec(2,s,a) - return [abc]

    return ans;
}

const res = recursiveFunc(0, Array.from("AB"), []);
console.log(res);
