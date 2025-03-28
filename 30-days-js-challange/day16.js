// Day 16: Recursion


// ---------- Activity 1: Basic Recursion ----------

// Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(7));

// Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(7));

// ---------- Activity 2: Recursion with Arrays ----------

// Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([10, 20, 30]));

// Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.max(arr[0], maxArray(arr.slice(1)));
}

console.log(maxArray([1, 2, 3, 4, 5]));
console.log(maxArray([10, 20, 30, 5]));

// ---------- Activity 3: String Manipulation with Recursion ----------

// Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str[0];
}

console.log(reverseString("hello"));
console.log(reverseString("world"));

// Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

// ---------- Activity 4: Recursive Search ----------

// Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }
  return binarySearch(arr, target, mid + 1, end);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([10, 20, 30, 40, 50], 25));

// Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target) {
  if (arr.length === 0) {
    return 0;
  }
  return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 4, 3, 3], 3));
console.log(countOccurrences([10, 20, 30, 10, 10], 10));

// ---------- Activity 5: Tree Traversal ----------

// Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node) {
  if (node === null) {
    return;
  }
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root);

// Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function treeDepth(node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(treeDepth(node.left), treeDepth(node.right));
}

console.log(treeDepth(root));
