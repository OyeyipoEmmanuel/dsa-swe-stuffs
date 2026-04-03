
const arr = [31,2,30,1,100,0]

function insertionSort(arr){
    // [12,11,13,8]

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1

        while(j >= 0 && key < arr[j]){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = key
        
    }
}

function bucketSort(){
    const noOfBuckets = arr.length
    const maxNum = Math.max(...arr)

    const buckets = Array.from({length: noOfBuckets}, ()=>[])

    //place contents inside buckets
    for (let i = 0; i < arr.length; i++) {
        const normalize = arr[i] / (maxNum + 1)
        const bucketNo = Math.floor(noOfBuckets * normalize)

        buckets[bucketNo].push(arr[i])
    }

    //Sort the bucket
    for (let i = 0; i < buckets.length; i++) {
        buckets[i].length > 0 && insertionSort(buckets[i])
    }


    

    console.log(buckets.flat())
}



bucketSort()