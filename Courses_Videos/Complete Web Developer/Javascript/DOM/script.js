var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listElement = document.querySelector("li");


function inputLength(){
	return input.value.length;
}

function createListElement(){
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}
}


function addListAfterKeyPress(event) {
	if(inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}


function changeClass(){
	listElement.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);

listElement.addEventListener("click", changeClass);