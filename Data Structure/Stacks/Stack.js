//Operations -  PUSH, POP, TOP, ISEMPTY, SIZE

class Stack {
  arr;
  size;
  //   i

  constructor(size) {
    this.arr = [];
    this.size = size;
    // this.i = 0
  }

  push(value) {
    if (this.arr.length > this.size) return "Stack Overflow";

    this.arr.push(value);

    return this.arr
  }

  pop(){
    if(this.arr.length === 0) return "Stack Underflow"

    this.arr.pop()
    this.size--

    return this.arr
  }
  top(){
    if(this.arr.length === 0) return "Empty Stack"

    return this.arr[this.arr.length - 1]
  }
  isEmpty(){
    if(this.arr.length === 0) return true

    return false
  }
  print(){
    if (this.arr.length > this.size) return "Stack Overflow";

    if(this.arr.length === 0) return "Stack Underflow"

    return this.arr
  }
}

const stack = new Stack(5);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);

stack.pop()
stack.pop()

console.log(stack.top())
console.log(stack.isEmpty())
// console.log(stack.isEmpty());

console.log(stack.print());
