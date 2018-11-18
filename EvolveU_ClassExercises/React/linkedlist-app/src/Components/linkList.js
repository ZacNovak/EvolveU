 
class LinkList {
  constructor(first){
      this.head = new Node(first, null);

  }

    play(str){
        console.log(str);
        return str;
    }
    show(){
      let pointer = this.head;
      let output = this.head.value;
      while(pointer.next){
        output +=", " + pointer.next.value;
        pointer = pointer.next;
      }
      return output;
    }

    add(str){
      let pointer = this.head;
      while(pointer.next){
        pointer = pointer.next;
      }
      pointer.next = new Node(str, null);

    }
  }

// let x = new LinkList();
// x.play('boom!');

  export default { LinkList };

  class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }

  

    
}
    export default { LinkList };
