/**
    Using two pointers/vars
    from bottom to top
    if i < i+1, swap. 
    
 */

const arr =  [3,1,32,4,2,5,9,0];

const bubbleSort = () => {
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1; j++){
        let f = j
        let s = j+1

        if(arr[f] > arr[s]){
            let tmp = arr[f]
            arr[f] = arr[s]
            arr[s] = tmp
        }
    }
  }
};

bubbleSort(arr);
console.log(arr);
