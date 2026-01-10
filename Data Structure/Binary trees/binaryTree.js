class BinartNode {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root;

  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BinartNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let queue = [this.root];

    while (queue.length > 0) {
      let current = queue.shift();

      if (!current.left) {
        current.left = newNode;
        break;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        break;
      } else {
        queue.push(current.right);
      }
    }
  }
}
