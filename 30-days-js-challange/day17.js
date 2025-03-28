// Day 17: Data Structures

// ---------- Activity 1: Linked List ----------

// Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  remove() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.display();
linkedList.remove();
linkedList.display();

// ---------- Activity 2: Stack ----------

// Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

// Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str) {
  const stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }
  let reversedStr = "";
  while (stack.items.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

console.log(reverseString("hello"));

// ---------- Activity 3: Queue ----------

// Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) {
      return "No elements in Queue";
    }
    return this.items[0];
  }
}

// Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
const printerQueue = new Queue();
printerQueue.enqueue("Print job 1");
printerQueue.enqueue("Print job 2");
console.log(printerQueue.front());
printerQueue.dequeue();
console.log(printerQueue.front());

// ---------- Activity 4: Binary Tree ----------

// Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(node) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.inOrderTraversal(binaryTree.root);

// ---------- Activity 5: Graph ----------

// Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

//  Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
console.log(graph.bfs("A"));
