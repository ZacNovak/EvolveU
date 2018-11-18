class Node extends Object {
	constructor(value){
		super()
		this.value = value;
		this.nextNode = null;
	}
} 

function getMyLL(){
	let head = new Node('First');
	head.nextNode = new Node('Second');
	head.nextNode.nextNode = new Node('Third');
	head.nextNode.nextNode.nextNode = new Node('Fourth');

	return head;
}

function replace(placement, order, name, head){
	let pointer = head;
	let counter = 0;
	let saveobj = null;
	
	while(pointer){
		counter++;
		if((placement) === pointer.order){
			saveobj = pointer.nextNode;
			pointer.nextNode = new Node("two and a half", null);
			pointer.nextNode.order = order;	
			pointer.nextNode.nextNode = saveobj;
			break
		}
		pointer = pointer.nextNode;
	}
	return head;
}

function removeNode(placement, head){
	let pointer = head;
	let counter = 0;
	let saveobj = null;

	while(pointer){
		counter++;
		if((placement) === pointer.nextNode.order){
			saveobj = pointer.nextNode.nextNode;
			pointer.nextNode = saveobj;
			break;
		}
		pointer = pointer.nextNode;
	}
	return head;
}

export default { getMyLL, replace, removeNode };
