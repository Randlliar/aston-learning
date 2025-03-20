class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    remove(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            if (!this.head) {
                return this.tail = null;
            }
            return;
        }

        let currentItem = this.head;
        while (currentItem.next) {
            if (currentItem.next.value === value) {
                currentItem.next = currentItem.next.next;
                this.length--;
                if (!currentItem.next) {
                    return this.tail = currentItem;
                }
                return;
            }
            currentItem = currentItem.next;
        }
    }

    find(value) {
        let currentItem = this.head;
        while (currentItem) {
            if (currentItem.value === value) {
                return currentItem;
            }
            currentItem = currentItem.next;
        }
        return null;
    }

    size() {
        return this.length;
    }

    toArray() {
        const elements = [];
        let currentItem = this.head;
        while (currentItem) {
            elements.push(currentItem.value);
            currentItem = currentItem.next;
        }
        return elements;
    }
}

const list = new LinkedList();
list.append(1);
list.prepend(0);
list.append(2);
list.prepend(3);
console.log(list.toArray());
list.remove(2);
console.log(list.toArray());
console.log(list.find(3));
console.log(list.size());
