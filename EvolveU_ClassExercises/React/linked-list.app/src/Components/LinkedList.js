class Node {
	constructor(subject, amount){
        this.forwardNode = null;
        this.subject = subject;
        this.amount = amount;
        this.previouseNode = null;
	}
} 

class LinkedList {
    constructor(subject, amount){
        this.head = new Node(subject, amount);
        this.current = this.head;
        this.tail = null;
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
    
    showOne(){
        return this.current.subject + " - " + this.current.amount;
    }

    add(subject, amount){
        let pointer = this.head;
        while(pointer.forwardNode){
            pointer = pointer.forwardNode;
          }
          pointer.forwardNode = new Node(subject, amount);
          pointer.forwardNode.previouseNode = pointer; 
          this.current = pointer.forwardNode;
          this.tail = pointer.forwardNode;
        }

    first(){
        this.current = this.head;
        return this.current.subject + " - " + this.current.amount;
    }

    next(){
        if(this.current.forwardNode){
            this.current = this.current.forwardNode;
            return this.current.subject + " - " + this.current.amount;
        }
    }
    
    previouse(){
        if(this.current.previouseNode){
            this.current = this.current.previouseNode;
            return this.current.subject + " - " + this.current.amount;
        }
    }

    insert(subject, amount){
       let nodeStore = this.current.forwardNode;
       this.current.forwardNode = new Node(subject, amount);
       this.current.forwardNode.previouseNode = this.current; 
       this.current.forwardNode.forwardNode = nodeStore;
       this.current = this.current.forwardNode;
       return this.current.subject + " - " + this.current.amount;
    }

    delete(){
        let forwardNodeStore = this.current.forwardNode;
        forwardNodeStore.previouseNode = this.current.previouseNode;
        this.current.previouseNode.forwardNode = forwardNodeStore;
        
        return this.current.previouseNode.forwardNode.subject + " - " + this.current.previouseNode.forwardNode.amount;
     }

     last(){
         this.current = this.tail;
         return this.current.subject + " - " + this.current.amount;
        }



    

}



export default { LinkedList };
