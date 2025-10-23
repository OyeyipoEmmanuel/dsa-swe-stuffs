// First in first out - enqueue, dequeue

class Queue{
    arr
    frontIndex
    rearIndex
    size
    capacity

    constructor(capacity){
        this.arr = []
        this.capacity = capacity
        this.frontIndex = 0
        this.size = 0
        this.rearIndex = 0
    }

    enqueue(value){
        if(this.arr.length > this.capacity) return "Max limit exceeded"
        this.arr.push(value)
        this.size++
        this.arr.length != 1 ? this.rearIndex++ : this.rearIndex=0
    }

    dequeue(){
        for(let i = 0; i < this.arr.length - 1; i++){
            this.arr[i] = this.arr[i+1]
        }
        this.arr.pop()

        this.size--
        this.rearIndex--
    }
    dequeueForCircularQueue(){
        // this.arr[]
    }
    peek(){
        return this.arr[this.frontIndex]
    }
}

