
import ll from "./ClassExer";
 
// test('What does the following do?', () => {


// 	let head = ll.getMyLL();
// 	console.log(head);
// })

test('Lets test some link lists', () => {
	let head = ll.getMyLL();
	
	//Place code below to print every value in the node
	let pointer = head;
	let values = "";
	while(pointer){
		values = values + ", " + pointer.value;
		pointer = pointer.nextNode;
	}
	console.log(values);

	// Place the code below to print the number of nodes
	let counter = 0;
	let pointer1 = head;
	while(pointer1){
		counter++;
		pointer1 = pointer1.nextNode;
	}

	console.log(counter);

	//Place the code below to add an attrubite 'order' with the count to each node
	let counter1 = 0;
	let pointer2 = head;
	while(pointer2){
		counter1++;
		pointer2.order = counter1;
		pointer2 = pointer2.nextNode;
	}
	// place the code below to print the value and order for each node

	let pointer3 = head;
	while(pointer3){
		console.log("Number: ", pointer3.order, ";   Value: ", pointer3.value);
		pointer3 = pointer3.nextNode;
	}

	
	//Place the code below to sum the order and print the seum

	let pointer4 = head;
	let counter2 = 0;
	let sum = 0;
	while(pointer4){
		counter2++;
		pointer4.order = counter2;
		sum += pointer4.order;
		pointer4 = pointer4.nextNode;
	}
	console.log(sum);


	// add between second and third and call it second point 5


	
	head = ll.replace(2, 2.5, "two-half", head);
	console.log(head)

	head = ll.removeNode(3, head);
	console.log(head);





	//Delete number 3






});