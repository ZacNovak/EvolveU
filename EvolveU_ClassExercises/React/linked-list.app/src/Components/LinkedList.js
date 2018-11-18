class Node {
	constructor(subject, amount){
        this.forwardNode = null;
        this.subject = subject;
		this.amount = amount;
	}
} 

class LinkedList {
    constructor(subject, amount){
        this.head = new Node(subject, amount);
    }
    
    show(){
        let pointer = this.head;
        let output = "";
        while(pointer){
            output += pointer.subject + " - " + pointer.amount + ", ";
            pointer = pointer.forwardNode;
        }
        output = output.substring(0,output.length-2);
        return output;
        }
    

    add(subject, amount){
        let pointer = this.head;
        while(pointer.forwardNode){
            pointer = pointer.forwardNode;
          }
          pointer.forwardNode = new Node(subject, amount);
    
        }
            
        });

    }


export default { LinkedList };
