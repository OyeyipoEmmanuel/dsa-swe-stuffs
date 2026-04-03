//Uer bro code to understand if you forget again

const arr = [12,11,13,8,21]
function ins(){
    // [12,11,13,8,21]  - [11,12,13,8,21]

    for (let i = 1; i < arr.length; i++) {
       let key = arr[i] //11 //13
       let j = i-1 //0 //1

       while(j >= 0 && key < arr[j]){
            arr[j+1] = arr[j] //
            j--
       }

       arr[j+1] = key
    }
}
ins()
console.log(arr);
