//map, filter, reduce

const array = [1, 2, 10, 16];

const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

//filter

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

//reduce

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0)

console.log('reduce', reduceArray);