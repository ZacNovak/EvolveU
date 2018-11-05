/****************************
* Variables and Data Dtypes
****************************/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//

var _3years = 3;
var JohnMark = 'John and Mark';
var if = 23;
*/
/**************************
*/
/*
var firstName= 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;


console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/
/***************************
* Basic Operators
*/


//Math Operators
/*
var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

yearJohn = year - 28;
yearMark = year - 33;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

/***********************************
* Operator Precedence
*/
/*

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x =y = = (3 + 5) * 4 - 6; 
*/

/***********************************
* Cosing Challangee
*/

/*

var johnMass, johnHeight, markMass, markHeight, johnBMI, markBMI;

johnMass = 50;
johnheight = 150;

markMass = 75;
markHeight = 125;

johnBMI = johnMass / johnHeight * 2;
markBMI = markMass / markHeight * 2;

console.log("is Mark's BMI higher then John's? " +(markBMI >= johnBMI));

if (markBMI > johnBMI){
    console.log('Mark\' BMI is higher than John/s.')
} else {
    console.log('John\ BMI is higher than Marks\'s.')
}


*/


/***********************************
* Coding Challenge 2
*/
/*
var john1 = 100;
var john2 = 100;
var john3 = 100;

var mike1 = 100;
var mike2 = 100;
var mike3 = 100;

var johnaverage = (john1 + john2 + john3) / 3;
var mikeaverage = (mike1 + mike2 + mike3) / 3;

if (johnaverage > mikeaverage){
    console.log("John's team as higher average score");
} else if (mikeaverage > johnaverage) {
    console.log("Mike's team as a higher average score");
} else {
    console.log("There is a draw");
}
*/

/************************************
* Functions
*/

/*
function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.')
    } else {
        console.log(firstName + 'is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/

/*************************************
* Function Statements and Expressions
*/
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
    case 'teacher':
        return firstName + ' teaches kids how to code';
    case 'driver':
        return firstName + ' drives a cab in Lisbon';
    case 'designer':
        return firstName + ' designs a beautiful websites';
    default: 
        return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

*/

/*************************************
* Arrays
******************/

/*
var names = ['john', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

names[1] = 'Ben';
names[5] = 'Mary';

names[names.length] = 'Mary';

console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr');
john.pop();
john.pop();
john.shift();

console.log(john.indexOf(1990));


console.log(john);
*/
/*
var bills = [124, 48, 268]

function tipping(bill) {
    if(bill > 50) {
        return bill*0.2; 
    } else if (bill <= 200) {
        return bill*0.15; 
    } else {
        return bill*0.1;
    }        
}
        
var tips = [tipping(bills[0]),tipping(bills[1]), tipping(bills[2])];

var total = [(bills[0] + tips[0]),(bills[1]+tips[1]), (bills[2] + tips[2])];

console.log(tips);
console.log(total);
*/

/**********************
* Objects and Properties
******************/

/*
var john  = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    ismarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/


/**********************
* Objects and Methods
***********************/

/*
var john  = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    ismarried: false,
    calcAge: function(birthYear){
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/**********************
* Coding Test 3
***********************/
/*
var john = {
    name: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function(mass, height){
        this.BMI = this.mass /(this.height * this.height);
        return this.BMI;
    }
};

var mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(mass, height){
        this.BMI = this.mass /(this.height * this.height);
        return this.BMI;
    }
}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.BMI > mark.BMI){
    console.log(john.name + " has a higher BMI than Mark of " + john.BMI)
    } else if (mark.BMI > john.BMI) {
        console.log(mark.name + " has a higher BMI than Mark of " + mark.BMI)
    } else {
        console.log("Mark and John have the same BMI")
    }

*/

/**********************
* Loops and Iteration
***********************/

/*
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}

*/


/***********************
* Coding Challenge 5
*/

var john = {
    name: 'john',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
        
        
        for(var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
               percentage = 0.2; 
            } else if (bill <= 200) {
                percentage = 0.15; 
            } else {
                percentage = 0.1;
            }  
        
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
            
        }
    }        
}


var mark = {
    name: 'mark',
    bills: [77, 475, 110, 45],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
        
        
        for(var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
               percentage = 0.2; 
            } else if (bill <= 300) {
                percentage = 0.10; 
            } else {
                percentage = 0.25;
            }  
        
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
            
        }
    }        
}

function averageTips(tips){
    var sum = 0;
    var average = 0;
    for(var i = 0; i < tips.length; i++){
        sum += tips[i];
    }
    average = sum / tips.length;
    return average;
}

john.calcTips();
mark.calcTips();
console.log(john.tips, mark.tips);

johnAverage = averageTips(john.tips);
markAverage = averageTips(mark.tips);


console.log(johnAverage);
console.log(markAverage);

if (johnAverage > markAverage){
    console.log(john.name + " paid the highest on tips");
    } else if (markAverage > johnAverage) {
        console.log(mark.name + " paid the highest on tips");
    } else {
        console.log("Mark and John paid the same");
    }































































