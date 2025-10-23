class DoSomething {
  arr;
  undoManager;

  constructor() {
    this.arr = [];
    this.undoManager = null;
  }

  setUndoManager(undoManager){
    this.undoManager = undoManager
  }

  push(value) {
    // Push to the DoSomething Array
    this.arr.push(value);

    // Push to the undoStackArray
    this.undoManager.undoStackArray.push(value);
  }
}

class UndoStack {
  undoStackArray;
  doSomethingObject;
  redoManager;

  constructor(doSomethingObject, redoManager) {
    this.undoStackArray = [];
    this.doSomethingObject = doSomethingObject;
    this.redoManager = redoManager;
  }

  peek() {
    return this.undoStackArray[this.undoStackArray.length - 1];
  }

  undo() {
    if (this.undoStackArray.length == 0) return "No recent changes to undo";
    const valToUndo = this.peek();

    // Pop the undo
    this.undoStackArray.pop();

    // Push the undo value to redo
    this.redoManager.redoStackArray.push(valToUndo);

    const updateDoArray = new UpdateDoArray(this.doSomethingObject, "undo");
    updateDoArray.updateArray();
  }
}

class RedoStack {
  redoStackArray;
  doSomethingObject;

  constructor(doSomethingObject) {
    this.redoStackArray = [];
    this.doSomethingObject = doSomethingObject;
  }

  peek() {
    return this.redoStackArray[this.redoStackArray.length - 1];
  }

  redo() {
    if (this.redoStackArray.length === 0) return "No recent undo operation";

    const updateDoArray = new UpdateDoArray(this.doSomethingObject, "redo");
    updateDoArray.updateArray(this.peek());
  }
}

class UpdateDoArray {
  functionCarriedOut;
  doSomething;

  constructor(doSomething, functionCarriedOut) {
    this.doSomething = doSomething;
    this.functionCarriedOut = functionCarriedOut;
  }

  updateArray(value = 0) {
    switch (this.functionCarriedOut) {
      case "undo":
        this.doSomething.arr.pop();
        break;
      case "redo":
        this.doSomething.arr.push(value);
        break;
      default:
        return;
    }
  }
}

const doing = new DoSomething();

const redoObject = new RedoStack(doing);

const undoObject = new UndoStack(doing, redoObject);
doing.setUndoManager(undoObject)

doing.push(3);
doing.push(5);
doing.push(7);

console.log("Before operation ", doing.arr);
// console.log(undoObject.peek());

undoObject.undo();
undoObject.undo();


redoObject.redo()

// console.log(redoObject.redoStackArray);
// undoObject.undo();
// undoObject.undo();

console.log(undoObject.undoStackArray);

console.log("After Operation", doing.arr);
