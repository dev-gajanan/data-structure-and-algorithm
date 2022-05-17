class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    // Adds an elements at the end of list
    add(element) {
        // create a new Node
        const node = new Node(element);

        let current; // to store current node

        // If the list is empty add the element and make it head
        if(this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            // Iterate to the end of the list
            while(current.next) {
                current = current.next;
            }

            // add the node
            current.next = node;
        }
        this.size++;
    }

    // Prints the list items
    printListItems() {
        let current = this.head;
        var str = "";
        while(current) {
            str += current.element + " ";
            current = current.next;
        }

        console.log(str);
    }

    // Add an elements at the position index of the list
    insertAtPositionIndex(element, index) {
        if(index < 0 || index > this.size) {
            return console.log("Invalid index position");
        } else {
            // Create a new node
            const node = new Node(element);
            let current, previous;
            current = this.head;
            // Add the element to the first index
            if(index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                current = this.head;
                let i = 0;
                while(i < index) {
                    i++;
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
        }
        this.size++;
    } 
    // Remove an element from the specified location
    removeFromIndex(index) {
        if(index < 0 || index > this.size) {
            return console.log("Invalid index position");
        } else {
            let current, previous, i = 0
            current = this.head;
            previous = current;

            //delete first elemnent
            if(index === 0) {
                this.head = current.next;
            } else {
                while(i < index) {
                    i++;
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.size--;
            return current.element;
        }
    }
    // Remove a given element from the list
    removeElementFromList(element) {
        let current = this.head;
        let previous = null;

        while(current !== null) {
            // Compare element with current element
            if(current.element === element) {
                if(previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.element;
            }
            previous = current;
            current = current.next;
        }
        return -1 // not found
    }
    // Find the index of an element
    findIndexOfElement(element) {
        let count = 0;
        let current = this.head;
        while(current !== null) {
            if(current.element === element) {
                return count;
            }
            count++;
            current = current.next;
        }
        return -1; //not found
    }
    // Check for the list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Return size of the list
    findSizeOfList() {
        console.log("Size of the list is:", this.size);
    }
}

var l1 = new LinkedList();

// Check for empty list
console.log(l1.isEmpty());

//Adding elemeent
l1.add(10);
l1.printListItems();
l1.findSizeOfList();

// Adding more elements to the list
l1.add(20);
l1.add(30);
l1.printListItems();
l1.findSizeOfList();

// Add 100 at position 2
l1.insertAtPositionIndex(100,2);
l1.printListItems();
l1.findSizeOfList();

// Remove elements
const removeElement = l1.removeElementFromList(30);
console.log("Removed element:", removeElement);
l1.printListItems();
const removeFromIndex = l1.removeFromIndex(1);
console.log("Removed element from index:", removeFromIndex);
l1.printListItems();

console.log("List empty?:",l1.isEmpty());
console.log("Index of 100:",l1.findIndexOfElement(100));
