// Create Person Class that has name, age, bankaccount as properties and birthday method

class Person { 
    constructor (name, age, bankAmt){
        this.name = name;
        this.age = age;
        this.bankAmt = bankAmt;
    }
    
    birthday() {
        this.age += 1;
    }
}


// Create a subclass for types of employees these will have a pay function that is different for each

class Farmer extends Person {
    constructor(name, age, bankAmt){
        super(name, age, bankAmt);
        this.month = 0;
    }
    
    pay() {
        if(this.month % 12 === 0){
            this.bankAmt += 100000;
        }
        
        this.month += 1;
    }
}

class FullStackDeveloper extends Person {
    constructor(name, age, bankAmt){
        super(name, age, bankAmt);
    }
    
    pay() {
        this.bankAmt += 5000;
    }
}

class Clerk extends Person {
    constructor(name, age, bankAmt){
        super(name, age, bankAmt);
    }
    
    pay() {
        this.bankAmt += (150*15);
    }
}



//Create 4 people (one of each), and store them in an array)

const Person1 = new Farmer('Bob',25,0);
const Person2 = new FullStackDeveloper('Joe',35,0);
const Person3 = new Clerk('Sally',45,0);
const Person4 = new FullStackDeveloper('Zac',50,0);

personArray = [Person1, Person2, Person3, Person4];


console.log(personArray.length);
//Run 36 month simulation in for loop

var run36months = function(personArray) {
    for (var i = 0; i < personArray.length; i++){
        for(var j = 0; j<36; j++){
            personArray[i].pay();
            if(j % 12 === 0){
                personArray[i].birthday();
            }
        }
    }
};

run36months(personArray);
console.log(personArray);



