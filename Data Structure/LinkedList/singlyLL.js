// Each node has a pointer to the next

class SinglyLLNode {
  data;
  next;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLL {
  head;
  length;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  print() {
    if (this.head === null) {
      return null;
    }

    let output = "";
    let current = this.head;

    while (current) {
      output += `${current.data} -> `;
      current = current.next;
    }

    return output + " null";
  }

  insertValue(value) {
    const newNode = new SinglyLLNode(value);
    let current = this.head;

    if (this.head == null) {
      this.head = newNode;
      this.length++;
      return;
    }

    while (current && current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
    this.length++;
  }

  insertAtIndex(index, value) {
    const newNode = new SinglyLLNode(value);

    if (index > this.length) {
      console.log("Out of bound");
      return;
    }

    if (index == 1) {
      let tmp = this.head;
      this.head = newNode;
      newNode.next = tmp;
    }

    let movementIndex = 1;
    let current = this.head;

    while (movementIndex < index - 1) {
      current = current.next;
      movementIndex++;
    }

    let tmp = current.next;
    current.next = newNode;
    newNode.next = tmp;

    this.length++;
  }
  removeNodeByValue(value) {
    if (this.head == null) {
      console.log("No list");
      return;
    }

    if(this.head.data === value){
        this.head = this.head.next
        return;
    }

    let current = this.head
    while(current.next && current.next.data !== value){
        current = current.next
    }

    if(current.next){
        current.next = current.next.next
        this.length--
    }
  }
}

const node = new SinglyLL();
node.insertValue(1);
node.insertValue(2);
node.insertValue(3);
node.insertValue(4);

node.insertAtIndex(4, 13);

node.removeNodeByValue(3);
node.removeNodeByValue(2);

console.log(node.print());
console.log(node.length);
