class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(node){
        const newNode = new Node(node);
        if(this.head === null) {
            this.head = newNode;
        }
        else{
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;                
            }
            currentNode.next = newNode;
        }        
        this.size++;
    }
    remove(ind) {
        let currentNode = this.head;
        let nodeInd = 0;
        let prevNode;
        while(currentNode){
            if(ind === nodeInd) {
                if(ind === 0) {
                    this.head = currentNode.next;
                }
                else{
                    prevNode.next = currentNode.next;                
                }
                break;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
            nodeInd++;
        }
    }
    toString(){
        let output = `Total Size ${this.size} \nHEAD \n`;
        let currentNode = this.head;
        let nodeInd = 0;
        while(currentNode){
            output += `Node${nodeInd} -->  ${currentNode} \n`;
            currentNode = currentNode.next;
            nodeInd++;
        }
        return output;
    }
    reverse(){
        let prev = null;
        let currentNode = this.head;
        let next = null;
        while(currentNode){
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        this.head = prev;
    }
}
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
    toString(){
        return `Value - ${this.value} - NextValue - ${this.next ? this.next.value: 'End'}`;
    }
}
const l1 = new LinkedList();
l1.add(1);
l1.add(2);
l1.add(3);
l1.add(4);
l1.reverse();
console.log(`${l1}`);