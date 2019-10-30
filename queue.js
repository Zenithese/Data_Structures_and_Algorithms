class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

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