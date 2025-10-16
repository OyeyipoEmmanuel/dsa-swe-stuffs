class DoublyLLNodes {
  data;
  prev;
  next;

  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLL {
  head;
  lenght;

  constructor() {
    this.head = null;
    this.lenght = 0;
  }

  append(value) {
    const newNode = new DoublyLLNodes(value);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next && current.next !== null) {
      current = current.next;
    }

    if (current.next) {
      current.next = newNode;
      newNode.prev = current;
    }
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
}

const node = new DoublyLL();
node.append(1);
node.append(2);
node.append(3);

console.log(node.print())
