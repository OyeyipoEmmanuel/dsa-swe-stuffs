/**
    Using two pointers/vars
    from bottom to top
    if i < i+1, swap. 
    
 */

const arr = [3,1,32,4,2,5,9,0]

function bubblesort(arr){
    let first;
    let second;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j <= arr.length - 2; j++){
            first = j
            second = j+1

            if(arr[first] > arr[second]){
                let tmp = arr[first]
                arr[first] = arr[second]
                arr[second] = tmp
            }

            first = second
            second = first + 1
        }
    }
}

bubblesort(arr)

console.log(arr)