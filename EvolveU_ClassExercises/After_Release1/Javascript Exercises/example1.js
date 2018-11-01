console.log("Hello World from Javascript File!");

function myfunction(){
	console.log("Hello world!");
	alert("Riker is badass!");
}

var counter = 0;
function love(){
	console.log("Riker joint smoked counter:  " + counter);
	counter++;
}

var counter1 = 0;

function addstufftodiv(){
	var div = document.getElementById('NewDiv');
	div.innerHTML += '<br/>Zac says: This is halloween ' + counter1 + ' Riker says: woo!';
	counter1++;
}

function clearstuff(){
	document.getElementById('NewDiv').innerHTML = " ";
}

function moveright(){
	var x = document.getElementById("circle").getAttribute("cx");
	x = parseInt(x);
	x +=20;
	document.getElementById("circle").setAttribute("cx", x);
}

function add(){
	var first = parseInt(document.getElementById("firstnumber").value);
	var second = parseInt(document.getElementById("secondnumber").value);
	answer = first + second;
	document.getElementById("answer").innerHTML = answer;
}

function circleplacement(){
	var xaxis = parseInt(document.getElementById("xaxis").value);
	var yaxis = parseInt(document.getElementById("yaxis").value);
	document.getElementById("circle").setAttribute("cx", xaxis);
	document.getElementById("circle").setAttribute("cy", yaxis);

}