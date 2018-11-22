// reference type


var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};


// context



//instantitation

class Player {
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`hi I am ${this.name}, I'm a ${this.type}`)
	}
} 

class Wizard extends Player{
	constructor(name, type){
		super(name, type)

	}
	play(){
		console.log(`WEEEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelley', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');