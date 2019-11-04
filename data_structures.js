class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/////////////// LINKED LIST ///////////////

class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail(val) {
        const newTail = new Node(val);

        if (this.length === 0) {
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            this.tail = newTail;
        }
        this.length++
        return this
    }

    addToHead(val) {
        const newHead = new Node(val);

        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this
    }

    insert(val, index) {
        if (index < 0 || index > this.length - 1) return false;
        if (index === this.length) return !!this.addToTail(val);
        if (index === 0) return !!this.addToHead(val);

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const next = prev.next;
        prev.next = newNode;
        newNode.next = next;
        this.length++;
        return true;
    }

    removeTail() {
        if (!this.tail) {
            return null;
        }
        let prev = this.head;
        let temp = this.head;
        while (temp.next) {
            prev = temp;
            temp = temp.next
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp
    }

    removeHead() {
        if (!this.head) {
            return null;
        }
        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    remove(index) {
        if (index < 0 || index > this.length - 1) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        const prev = this.get(index - 1);
        const target = prev.next;
        const next = target.next;
        prev.next = next;
        this.length--;
        return target;
    }

    contains(target) {
        let current = this.head;
        let counter = 0;
        while (counter !== this.length) {
            if (current.val === target) return true;
            current = current.next;
            counter++;
        }
        return false;
    }

    get(index) {
        if (index < 0 || index > this.length - 1) return false;
        let current = this.head;
        let counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(val, index) {
        if (index < 0 || index > this.length - 1) return false;
        let current = this.head;
        let counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        current.val = val;
        return true;
    }

    size() {
        return this.length;
    }

    reverse() {
        if (this.length <= 1) return this;

        let tail = this.head;
        let head = this.tail;

        let current = this.head;
        let prev = null;
        let next = null;
        while (next = current.next) {
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = head;
        this.head.next = prev
        this.tail = tail;
        return this;
    }
}

/////////////// QUEUE ///////////////

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (!this.front) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        return ++this.length;
    }

    dequeue() {
        if (!this.front) {
            return null;
        }
        if (this.front === this.back) {
            this.back = null;
        }
        const temp = this.front;
        this.front = this.front.next;
        --this.length;
        return temp.value;
    }

    size() {
        return this.length;
    }
}

/////////////// TREES ///////////////

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function inOrderArray(root) {
    if (!root) return [];

    return [
        ...inOrderArray(root.left),
        root.val,
        ...inOrderArray(root.right)
    ];
}

function preOrderArray(root) {
    if (!root) return [];

    return [
        root.val,
        ...inOrderArray(root.left),
        ...inOrderArray(root.right)
    ];
}

function postOrderArray(root) {
    if (!root) return [];

    return [
        ...postOrderArray(root.left),
        ...postOrderArray(root.right),
        root.val,
    ];
}

function depthFirst(root) {
    // initialize the stack with the root node
    let stack = [root];

    // continue running the algorithm while there are still nodes on the stack
    while (stack.length) {

        // pop the top node from the stack
        let node = stack.pop();

        // we consider a node visited once we pop it,
        // so we should print the node's value now
        console.log(node.val);

        // add the node's left and right children, if they exist
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);

        // IMPORTANT: do not print out the children yet; they must wait their turn to be popped first
    }
}

function breadthFirst(root) {
    // initialize the queue with the root node
    let queue = [root];

    // continue running the algorithm while there are still nodes on the queue
    while (queue.length) {
        // remove the front node from the queue
        let node = queue.shift();

        // the node we just removed is now "visited", so print it
        console.log(node.val);

        // add the left and right children to the back of the queue, if they exist
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        // IMPORTANT: do not print out the children yet; they must wait their turn to exit the front of the queue first
    }
}

/////////////// BINARY SEARCH TREE /////////////// 

// O(log(n)) time for a balanced tree //// O(n) time for unbalanced tree //
// O(log(n)) space for a balanced tree //// O(n) space for unbalanced tree //

// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

class BST {
    constructor() {
        // initialize the tree to be empty
        this.root = null;
    }

    insert(val, root = this.root) {
        // if the tree is currently empty, then create the node as the 'absolute' root
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }

        // otherwise, the tree is not empty, so...
        // if our val to insert is less than the root...
        if (val < root.val) {
            if (!root.left) {                       // ...and the left child does not exist,
                root.left = new TreeNode(val);      //      then create the node as the left child
            } else {                                // ...and the left child already exists,
                this.insert(val, root.left);        //      then recursively insert on the left subtree
            }

            // if our val to insert is greater than or equal to the root...
        } else {
            if (!root.right) {                      //  ...and the right child does not exist,
                root.right = new TreeNode(val);     //      then create the node as the right child
            } else {                                //  ...and the right child already exists,
                this.insert(val, root.right);       //      then recursively insert on the right subtree
            }
        }
    }

    search(val, root = this.root) {
        // if the tree is empty, then the target val is not in the tree, so return false
        if (!root) return false;

        // otherwise the tree is not empty, so...
        if (val < root.val) {
            // if the target is less than the root,
            //  then search the left subtree
            return this.search(val, root.left);
        } else if (val > root.val) {
            // if the target is greater than the root,
            //  then search the right subtree
            return this.search(val, root.right);
        } else {
            // otherwise, the target must be equal to the root
            // so return true since we found it!
            return true;
        }
    }
}

/////////////// MAX HEAP ///////////////

class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;

        let parentIdx = this.getParent(idx);

        if (this.array[parentIdx] < this.array[idx]) {
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
            this.siftUp(parentIdx);
        }
    }

    deleteMax() {
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length === 1) return null;

        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }

    siftDown(idx) {
        let ary = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = ary[leftIdx];
        let rightVal = ary[rightIdx];

        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;

        if (ary[idx] > leftVal && ary[idx] > rightVal) return;

        if (leftVal < rightVal) {
            var swapIdx = rightIdx;
        } else {
            var swapIdx = leftIdx;
        }

        [ary[idx], ary[swapIdx]] = [ary[swapIdx], ary[idx]];
        this.siftDown(swapIdx);
    }
}

function heapSort(array) {
    // Step 1: build the heap
    let heap = new MaxHeap();
    array.forEach(num => heap.insert(num));

    // Step 2: constructed the sorted array
    let sorted = [];
    while (heap.array.length > 1) {
        sorted.push(heap.deleteMax());
    }

    return sorted;
}

// swap the elements at indices i and j of array
function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}

// sift-down the node at index i until max heap property is restored
// n represents the size of the heap
function heapify(array, n, i) {
    let leftIdx = 2 * i + 1;
    let rightIdx = 2 * i + 2;

    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    if (leftIdx >= n) leftVal = -Infinity;
    if (rightIdx >= n) rightVal = -Infinity;

    if (array[i] > leftVal && array[i] > rightVal) return;

    let swapIdx;
    if (leftVal < rightVal) {
        swapIdx = rightIdx;
    } else {
        swapIdx = leftIdx;
    }
    swap(array, i, swapIdx);
    heapify(array, n, swapIdx);
}

/////////////// TRIE ///////////////

// class Node {
//     constructor() {
//         this.children = {};
//         this.isTerminal = false;
//     }
// }

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word, root = this.root) {
        // take the first letter of the word
        let letter = word[0];

        // if the current root doesn't have an outgoing edge for the given letter 
        //      then we must create a new edge for the letter and point it to a new destination node
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        }

        // if there are no other characters in the word, then mark the destination node as terminal
        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {    // otherwise, we have remaining characters so recursively insert them into the destination node
            this.insert(word.slice(1), root.children[letter]);
        }
    }

    search(word, root = this.root) {
        if (word.length === 0) {
            if (root.isTerminal) {
                // the word is recognized if it is empty and the current node is terminal
                return true;
            } else {
                // the word is not recognized if it is empty and the current node is nonterminal
                return false;
            }
        }

        // take the first letter of the string
        let letter = word[0];

        // if there is an edge for this letter
        if (letter in root.children) {
            // then recursively check the subtree rooted at the edge's destination with the remaining characters
            return this.search(word.slice(1), root.children[letter]);
        } else {
            // otherwise the edge does not exist, so this word is not recognized
            return false;
        }
    }
}

/////////////// DIJKSTRAS ///////////////

let graph = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};

function dijkstras(graph, source) {
    let distance = {};
    for (let node in graph) {
        distance[node] = Infinity;
    }
    distance[source] = 0;

    let unvisited = new Set(Object.keys(graph));
    let previous = {}; // to indentify the optimal path

    while (unvisited.size > 0) {
        let currentNode = getSmallestNode(unvisited, distance);
        unvisited.delete(currentNode);

        for (let neighbor in graph[currentNode]) {
            let distanceToNeighbor = graph[currentNode][neighbor];
            let totalDistance = distanceToNeighbor + distance[currentNode];

            if (totalDistance < distance[neighbor]) {
                distance[neighbor] = totalDistance;
                previous[neighbor] = currentNode; // to indentify the optimal path
            }
        }
    }

    return { distance, previous };
}

function getSmallestNode(unvisited, distance) {
    return Array.from(unvisited).reduce((minNode, node) => {
        if (distance[node] < distance[minNode]) {
            return node;
        } else {
            return minNode;
        }
    });
}