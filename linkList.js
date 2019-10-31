class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class LinkList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail (val) {
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

    addToHead (val) {
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

    insert (val, index) {
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

    removeTail () {
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

    removeHead () {
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
        // temp.next = null;
        return temp;
    }

    remove (index) {
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

    contains (target) {
        let current = this.head;
        let counter = 0;
        while (counter !== this.length) {
            if (current.val === target) return true;
            current = current.next;
            counter++;
        }
        return false;
    }

    get (index) {
        if (index < 0 || index > this.length - 1) return false;
        let current = this.head;
        let counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set (val, index) {
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

    size () {
        return this.length;
    }

    reverse () {
        if (this.length <= 1) return this;

        let tail = this.head;
        let head = this.tail;

        let current = this.head;
        let prev = null;
        let next = null;
        while (current.next) {
            next = current.next
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

linkedList = new LinkList();
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToTail(4);
linkedList.addToTail(5);
// console.log(linkedList.size())
linkedList.addToTail(6);
linkedList.addToTail(7);
linkedList.addToTail(8);
linkedList.addToTail(9);
linkedList.addToTail(10);
linkedList.addToTail(0);
// console.log(linkedList.get(0));
let head = linkedList.removeTail();
linkedList.addToHead(1);
linkedList.addToHead(head.val);
// console.log(linkedList.get(0));
// console.log(linkedList.remove(6));
linkedList.insert(7, 6);
// console.log(linkedList.get(linkedList.size() - 1));
// console.log(linkedList.contains(100));
// console.log(linkedList.contains(10));
linkedList.set(5, 7);
console.log(linkedList);

// console.log(linkedList.removeHead());

console.log(linkedList.reverse());

// [P R E V] --> [C U R R] --> [N E X T]
