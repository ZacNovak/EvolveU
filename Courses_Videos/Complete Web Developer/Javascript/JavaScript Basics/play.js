// var age = prompt("What is your age?");

// function checkDriverAge(age){
// 	if(age = 18){
// 		alert("Congratulations on your first year of driving");
// }	 else if (age > 18){
// 		alert("Powering on enjoy the ride");
// 	} else if (age < 18){
// 		alert("Sorry, you are too yound to drive");
// 	} else {
// 		alert("You did not enter an age");
// 	}
// }

// checkDriverAge(20);


// {
// 	username: "andrei",
// 	password: "supersecret"
// }

var database = [
{
	username: "andrei",
	password: "supersecret"
},
{
	username: "sally",
	password: "1234"
},
{
	username: "molly",
	password: "777"
}

];

var newsFeed = [ {
	username: "Bobby",
	timeline: "So tired from all that learning!"
}, 
{
	username: "Sally",
	timeline: "Javascript is sooooo cool!"
}, 
{
	username: "Mitch",
	timeline: "Javascript is preeetyy cool!"
}];


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);


function isUserValid(username, password){
	for (var i = 0; i < database.length; i++){
		if(database[i].username === username 	
			&& database[i].password === password){
			return true;
		}
	
	}
	return false;
}



function signIn(username, password){
	if (isUserValid(username, password)){
			console.log(newsFeed);
		} else {
			alert("Sorry, wrong user name and password");
		}
	}

	// if (user === database[0].username && 
	// 	pass === database[0].password){
	// 	console.log(newsFeed);
	// } else {
	// 	alert("Sorry, wrong username and password!");
	// }
// var todos = [
// 	"clean room",
// 	"brush teeth",
// 	"exercise",
// 	"study javascript",
// 	"eat healthy"
// ];


// var todosLength = todos.length

// for (var i = 0; i < todosLength; i++){
// 	console.log(todos[i], i);
// }

// todos.forEach(function(todo, i){
// 	console.log(todo, i);
// })




// for (var i=0; i < todosLength; i++){
// 	todos.pop();
// }

// var counterOne = 10;
// while(counterOne > 0){
// 	console.log(counterOne);
// 	counterOne--;
// }


// var counterTwo = 0;
// do {
// 	console.log(counterTwo)
// 	counterTwo++
// } while (counterTwo < 10);

