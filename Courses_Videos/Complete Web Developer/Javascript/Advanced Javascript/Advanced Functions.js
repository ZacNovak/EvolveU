const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran, the function exectues. It's never going to execute again.
//BUT it's going to remember that there are references to thos ecariables
// so the child scope always has access to the parent scop, but parent does not have access to chiuld



//Currying
const multiply = (a, b) => a+b;

const curriedMultiple = (a) => (b) => a + b;
curriedMultiply(3)(4);

const mupltiplyBy5 = curriedMultiply(5);

//Compose

const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

//Avoiding side effects, functional purity - always reutnr something.
//Deterministic - same input is the smae output

var a = 1;
function b(){
	a = 2;
}